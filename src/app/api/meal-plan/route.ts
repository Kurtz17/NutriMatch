import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import { generateMealPlan } from "@/lib/mealPlanGenerator";

// =============================================================================
// GET /api/meal-plan
// Ambil meal plan terakhir milik user yang sedang login
// =============================================================================

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

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
          orderBy: [
            { dayNumber: "asc" },
            { mealType: "asc" },
          ],
        },
      },
    });

    if (!mealPlan) {
      return NextResponse.json(
        { error: "Meal plan belum dibuat", hasMealPlan: false },
        { status: 404 }
      );
    }

    const days = Array.from({ length: 7 }, (_, i) => {
      const dayNumber = i + 1;
      const dayItems = mealPlan.items.filter(
        (item) => item.dayNumber === dayNumber
      );

      const totalCalories = dayItems.reduce((sum, item) => sum + item.calories, 0);
      const totalProteinG = dayItems.reduce((sum, item) => sum + item.proteinG, 0);
      const totalCarbsG = dayItems.reduce((sum, item) => sum + item.carbsG, 0);
      const totalFatG = dayItems.reduce((sum, item) => sum + item.fatG, 0);

      return {
        dayNumber,
        totalCalories: Math.round(totalCalories),
        totalProteinG: Math.round(totalProteinG * 10) / 10,
        totalCarbsG: Math.round(totalCarbsG * 10) / 10,
        totalFatG: Math.round(totalFatG * 10) / 10,
        meals: {
          BREAKFAST: dayItems.filter((i) => i.mealType === "BREAKFAST"),
          LUNCH: dayItems.filter((i) => i.mealType === "LUNCH"),
          DINNER: dayItems.filter((i) => i.mealType === "DINNER"),
          SNACK: dayItems.filter((i) => i.mealType === "SNACK"),
        },
      };
    });

    return NextResponse.json({
      hasMealPlan: true,
      mealPlan: {
        id: mealPlan.id,
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
      { status: 500 }
    );
  }
}

// =============================================================================
// POST /api/meal-plan
// Generate meal plan baru selama 7 hari berdasarkan profil user
// =============================================================================

export async function POST() {
  try {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const profile = await prisma.userProfile.findUnique({
      where: { userId: user.id },
      include: {
        allergies: true,
      },
    });

    if (!profile || !profile.targetCalories) {
      return NextResponse.json(
        {
          error: "Profil belum lengkap. Silakan isi data fisik terlebih dahulu.",
        },
        { status: 400 }
      );
    }

    const allergenIds = profile.allergies.map((a) => a.allergenId);

    const generatedItems = await generateMealPlan(
      user.id,
      profile.targetCalories,
      allergenIds
    );

    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 6); 

    const mealPlan = await prisma.$transaction(async (tx) => {
      const plan = await tx.mealPlan.create({
        data: {
          userId: user.id,
          startDate,
          endDate,
          targetCalories: profile.targetCalories!,
        },
      });

      await tx.mealPlanItem.createMany({
        data: generatedItems.map((item) => ({
          mealPlanId: plan.id,
          foodId: item.foodId,
          dayNumber: item.dayNumber,
          mealType: item.mealType,
          servingG: item.servingG,
          calories: item.calories,
          proteinG: item.proteinG,
          carbsG: item.carbsG,
          fatG: item.fatG,
        })),
      });

      return plan;
    });

    return NextResponse.json(
      {
        message: "Meal plan 7 hari berhasil dibuat!",
        mealPlanId: mealPlan.id,
        summary: {
          targetCaloriesPerDay: profile.targetCalories,
          totalFoodsGenerated: generatedItems.length,
          startDate: startDate.toISOString().split("T")[0],
          endDate: endDate.toISOString().split("T")[0],
          allergenFiltered: allergenIds.length,
        },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("POST /api/meal-plan error:", error);

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}