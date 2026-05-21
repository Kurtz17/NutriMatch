import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";

// =============================================================================
// GET /api/meal-plan/history
// Ambil seluruh riwayat meal plan user, diurutkan dari yang terbaru
// Response ringan — hanya summary per plan, tidak include semua items
// =============================================================================

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const mealPlans = await prisma.mealPlan.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
      include: {
        items: {
          select: {
            calories: true,
            proteinG: true,
            carbsG: true,
            fatG: true,
            dayNumber: true,
          },
        },
      },
    });

    if (mealPlans.length === 0) {
      return NextResponse.json({
        total: 0,
        history: [],
      });
    }

    const history = mealPlans.map((plan, index) => {
      const totalCalories = plan.items.reduce((s, i) => s + i.calories, 0);
      const totalProtein = plan.items.reduce((s, i) => s + i.proteinG, 0);
      const totalCarbs = plan.items.reduce((s, i) => s + i.carbsG, 0);
      const totalFat = plan.items.reduce((s, i) => s + i.fatG, 0);

      const uniqueDays = new Set(plan.items.map((i) => i.dayNumber)).size;
      const divisor = uniqueDays || 1;

      return {
        id: plan.id,
        label: `Meal Plan #${mealPlans.length - index}`,
        startDate: plan.startDate,
        endDate: plan.endDate,
        targetCaloriesPerDay: plan.targetCalories,
        createdAt: plan.createdAt,
        isLatest: index === 0,
        summary: {
          totalDays: uniqueDays,
          avgDailyCalories: Math.round(totalCalories / divisor),
          avgDailyProteinG: Math.round((totalProtein / divisor) * 10) / 10,
          avgDailyCarbsG: Math.round((totalCarbs / divisor) * 10) / 10,
          avgDailyFatG: Math.round((totalFat / divisor) * 10) / 10,
        },
      };
    });

    return NextResponse.json({
      total: history.length,
      history,
    });
  } catch (error) {
    console.error("GET /api/meal-plan/history error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}