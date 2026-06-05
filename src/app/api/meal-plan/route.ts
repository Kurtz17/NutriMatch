import { MealType } from "@prisma/client";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import {
  AiRecommendationError,
  buildRecommendRequest,
  buildTargetMacros,
  isEmptyRecommendationError,
  isMealFallbackEnabled,
  type NormalizedMealRecommendationResult,
  type RecommendRequest,
  requestAiMealRecommendation,
} from "@/lib/ai/recommendationClient";

export const runtime = "nodejs";
export const maxDuration = 120;

function normalizeMealType(mealName: string): MealType {
  const normalized = mealName.toLowerCase();

  if (normalized.includes("breakfast") || normalized.includes("sarapan")) {
    return "BREAKFAST";
  }
  if (normalized.includes("lunch") || normalized.includes("siang")) {
    return "LUNCH";
  }
  if (normalized.includes("dinner") || normalized.includes("malam")) {
    return "DINNER";
  }
  if (normalized.includes("snack") || normalized.includes("cemilan")) {
    return "SNACK";
  }

  return "SNACK";
}

function normalizeDayNumber(mealName: string, index: number, days: number) {
  const normalized = mealName.toLowerCase();
  const dayMatch = normalized.match(/(?:day|hari)\s*(\d+)/);
  const parsedDay = dayMatch?.[1] ? Number(dayMatch[1]) : Number.NaN;

  if (Number.isFinite(parsedDay) && parsedDay >= 1) {
    return Math.min(Math.round(parsedDay), days);
  }

  if (days > 1 && index >= 3) {
    return Math.min(Math.floor(index / 3) + 1, days);
  }

  return 1;
}

function toPlanStartDate(startDate: string) {
  return new Date(`${startDate}T00:00:00.000Z`);
}

function toPlanEndDate(startDate: Date, days: number) {
  const endDate = new Date(startDate);
  endDate.setUTCDate(endDate.getUTCDate() + Math.max(days, 1) - 1);
  return endDate;
}

async function saveAiMealPlan({
  userId,
  requestBody,
  result,
}: {
  userId: string;
  requestBody: RecommendRequest;
  result: NormalizedMealRecommendationResult;
}) {
  const startDate = toPlanStartDate(requestBody.start_date);
  const endDate = toPlanEndDate(startDate, requestBody.days);

  const allRecommendations = result.dailyPlan.flatMap((meal, mealIndex) =>
    meal.recommendations.map((rec) => ({
      rec,
      mealType: normalizeMealType(meal.mealName),
      dayNumber: normalizeDayNumber(meal.mealName, mealIndex, requestBody.days),
    })),
  );

  const foodMap = new Map<string, string>();
  await Promise.all(
    allRecommendations.map(async ({ rec }) => {
      const caloriesPer100g = rec.calories100g ?? 0;
      try {
        const food = await prisma.food.upsert({
          where: { name: rec.foodName },
          update: {
            caloriesPer100g,
            ...(rec.imageUrl ? { imageUrl: rec.imageUrl } : {}),
          },
          create: {
            name: rec.foodName,
            category: "AI Recommendation",
            caloriesPer100g,
            imageUrl: rec.imageUrl ?? null,
            proteinPer100g: 0,
            carbsPer100g: 0,
            fatPer100g: 0,
          },
        });
        foodMap.set(rec.foodName, food.id);
      } catch (e) {
        console.error(
          "[saveAiMealPlan] food upsert failed for:",
          rec.foodName,
          e,
        );
        throw e;
      }
    }),
  );

  const savedPlan = await prisma.$transaction(async (tx) => {
    const plan = await tx.mealPlan.create({
      data: {
        userId,
        startDate,
        endDate,
        targetCalories: requestBody.target_macros.calories,
        source: result.source,
        narrativeSummary: result.narrativeSummary,
      },
    });

    await tx.mealPlanItem.createMany({
      data: allRecommendations.map(({ rec, mealType, dayNumber }) => ({
        mealPlanId: plan.id,
        foodId: foodMap.get(rec.foodName)!,
        dayNumber,
        mealType,
        servingG: rec.idealGrams ?? 100,
        calories: rec.idealCalories ?? 0,
        proteinG: rec.idealProtein ?? 0,
        carbsG: rec.idealCarb ?? 0,
        fatG: rec.idealFat ?? 0,
        caloriesPer100g: rec.calories100g ?? 0,
        matchScore: rec.matchScore,
      })),
    });

    return plan;
  });

  return { savedPlan, startDate, endDate };
}

async function saveFallbackMealPlan({
  userId,
  requestBody,
}: {
  userId: string;
  requestBody: RecommendRequest;
}) {
  const simplifiedRequest: RecommendRequest = {
    target_macros: buildTargetMacros({
      targetCalories: requestBody.target_macros.calories,
    }),
    allergies: requestBody.allergies,
    breakfast_prefs: { food_category: [], main_ingredients: [] },
    lunch_prefs: { food_category: [], main_ingredients: [] },
    dinner_prefs: { food_category: [], main_ingredients: [] },
    user_text: "Generate a balanced daily meal plan.",
    start_date: requestBody.start_date,
    days: requestBody.days,
    variety_penalty: 0.2,
    halal_only: requestBody.halal_only,
  };

  const aiResult = await requestAiMealRecommendation(simplifiedRequest);

  const fallbackResult: NormalizedMealRecommendationResult = {
    ...aiResult,
    source: "fallback",
    narrativeSummary:
      aiResult.narrativeSummary ??
      "Generated using a simplified AI request (fallback mode).",
  };

  const saved = await saveAiMealPlan({
    userId,
    requestBody: simplifiedRequest,
    result: fallbackResult,
  });

  const totalFoodsGenerated = aiResult.dailyPlan.reduce(
    (total, meal) => total + meal.recommendations.length,
    0,
  );

  return { ...saved, totalFoodsGenerated };
}

export async function GET() {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const mealPlan = await prisma.mealPlan.findFirst({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
      include: {
        items: {
          include: {
            food: true,
          },
          orderBy: [{ dayNumber: "asc" }, { mealType: "asc" }],
        },
      },
    });

    if (!mealPlan) {
      return NextResponse.json(
        { error: "Meal plan belum dibuat", hasMealPlan: false },
        { status: 404 },
      );
    }

    const maxDay = Math.max(1, ...mealPlan.items.map((item) => item.dayNumber));
    const days = Array.from({ length: maxDay }, (_, i) => {
      const dayNumber = i + 1;
      const dayItems = mealPlan.items.filter(
        (item) => item.dayNumber === dayNumber,
      );

      const totalCalories = dayItems.reduce(
        (sum, item) => sum + item.calories,
        0,
      );
      const totalProteinG = dayItems.reduce(
        (sum, item) => sum + item.proteinG,
        0,
      );
      const totalCarbsG = dayItems.reduce((sum, item) => sum + item.carbsG, 0);
      const totalFatG = dayItems.reduce((sum, item) => sum + item.fatG, 0);

      return {
        dayNumber,
        totalCalories: Math.round(totalCalories),
        totalProteinG: Math.round(totalProteinG * 10) / 10,
        totalCarbsG: Math.round(totalCarbsG * 10) / 10,
        totalFatG: Math.round(totalFatG * 10) / 10,
        meals: {
          BREAKFAST: dayItems.filter((item) => item.mealType === "BREAKFAST"),
          LUNCH: dayItems.filter((item) => item.mealType === "LUNCH"),
          DINNER: dayItems.filter((item) => item.mealType === "DINNER"),
          SNACK: dayItems.filter((item) => item.mealType === "SNACK"),
        },
      };
    });

    return NextResponse.json({
      hasMealPlan: true,
      mealPlan: {
        id: mealPlan.id,
        source: mealPlan.source,
        narrativeSummary: mealPlan.narrativeSummary,
        startDate: mealPlan.startDate,
        endDate: mealPlan.endDate,
        targetCalories: mealPlan.targetCalories,
        createdAt: mealPlan.createdAt,
        days,
      },
    });
  } catch (error) {
    console.error("GET /api/meal-plan error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const profile = await prisma.userProfile.findUnique({
      where: { userId: user.id },
      include: {
        allergies: {
          include: {
            allergen: true,
          },
        },
      },
    });

    if (!profile || !profile.targetCalories) {
      return NextResponse.json(
        {
          error:
            "Profil belum lengkap. Silakan isi data fisik terlebih dahulu.",
        },
        { status: 400 },
      );
    }

    const allergenIds = profile.allergies.map((allergy) => allergy.allergenId);
    const body = await request.json().catch(() => ({}));
    const { requestBody, errors } = buildRecommendRequest(profile, body);

    if (errors.length > 0) {
      return NextResponse.json(
        { error: "Payload rekomendasi tidak valid.", details: errors },
        { status: 400 },
      );
    }

    let source: "ai" | "fallback" = "ai";
    let warning: string | undefined;

    let aiResult: Awaited<
      ReturnType<typeof requestAiMealRecommendation>
    > | null = null;
    try {
      aiResult = await requestAiMealRecommendation(requestBody);
    } catch (aiError) {
      console.error("[meal-plan POST] AI recommendation error:", aiError);

      if (!isMealFallbackEnabled() && !isEmptyRecommendationError(aiError)) {
        const errorMessage =
          aiError instanceof AiRecommendationError
            ? aiError.message
            : "AI recommendation service is unavailable.";

        return NextResponse.json(
          {
            error:
              "AI recommendation service is currently unavailable. Please try again later.",
            detail: errorMessage,
            source: "ai",
          },
          {
            status:
              aiError instanceof AiRecommendationError && aiError.status === 422
                ? 422
                : 503,
          },
        );
      }

      source = "fallback";
      warning = isEmptyRecommendationError(aiError)
        ? "AI returned an empty recommendation, so local fallback was used."
        : aiError instanceof Error
          ? aiError.message
          : "AI recommendation failed. Local fallback was used.";
    }

    if (aiResult !== null) {
      const { savedPlan, startDate, endDate } = await saveAiMealPlan({
        userId: user.id,
        requestBody,
        result: aiResult,
      });

      return NextResponse.json(
        {
          message: "AI meal recommendation berhasil dibuat!",
          source: "ai",
          mealPlanId: savedPlan.id,
          narrativeSummary: aiResult.narrativeSummary,
          requestPayload: requestBody,
          summary: {
            targetCaloriesPerDay: requestBody.target_macros.calories,
            totalFoodsGenerated: aiResult.dailyPlan.reduce(
              (total, meal) => total + meal.recommendations.length,
              0,
            ),
            startDate: startDate.toISOString().split("T")[0],
            endDate: endDate.toISOString().split("T")[0],
            allergenFiltered: allergenIds.length,
          },
        },
        { status: 201 },
      );
    }

    const fallback = await saveFallbackMealPlan({
      userId: user.id,
      requestBody,
    });

    return NextResponse.json(
      {
        message:
          "Meal plan dibuat menggunakan AI fallback (simplified request).",
        source,
        warning,
        mealPlanId: fallback.savedPlan.id,
        requestPayload: requestBody,
        summary: {
          targetCaloriesPerDay: requestBody.target_macros.calories,
          totalFoodsGenerated: fallback.totalFoodsGenerated,
          startDate: fallback.startDate.toISOString().split("T")[0],
          endDate: fallback.endDate.toISOString().split("T")[0],
          allergenFiltered: allergenIds.length,
        },
      },
      { status: 201 },
    );
  } catch (error: unknown) {
    console.error("POST /api/meal-plan error:", error);

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 },
    );
  }
}
