import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import {
  calculateServing,
  calculateNutritionByServing,
} from "@/lib/mealPlanGenerator";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ itemId: string }> },
) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { itemId } = await params;

    const currentItem = await prisma.mealPlanItem.findUnique({
      where: { id: itemId },
      include: {
        food: true,
        mealPlan: true,
      },
    });

    if (!currentItem) {
      return NextResponse.json(
        { error: "Item tidak ditemukan" },
        { status: 404 },
      );
    }

    if (currentItem.mealPlan.userId !== user.id) {
      return NextResponse.json({ error: "Akses ditolak" }, { status: 403 });
    }

    const profile = await prisma.userProfile.findUnique({
      where: { userId: user.id },
      include: { allergies: true },
    });

    const allergenIds = profile?.allergies.map((a) => a.allergenId) ?? [];

    const currentCalories = currentItem.calories;
    const toleranceLow = currentCalories * 0.7;
    const toleranceHigh = currentCalories * 1.3;

    const alternatives = await prisma.food.findMany({
      where: {
        id: { not: currentItem.foodId },

        category: currentItem.food.category,

        caloriesPer100g: {
          gt: 0,
        },

        ...(allergenIds.length > 0 && {
          NOT: {
            allergens: {
              some: {
                allergenId: { in: allergenIds },
              },
            },
          },
        }),
      },
      take: 20,
    });

    const validAlternatives = alternatives.filter((food) => {
      const serving = calculateServing(currentCalories, food.caloriesPer100g);
      const nutrition = calculateNutritionByServing(serving, {
        calories: food.caloriesPer100g,
        protein: food.proteinPer100g,
        carbs: food.carbsPer100g,
        fat: food.fatPer100g,
      });
      return (
        nutrition.calories >= toleranceLow &&
        nutrition.calories <= toleranceHigh
      );
    });

    let finalAlternatives = validAlternatives;
    if (finalAlternatives.length === 0) {
      const fallback = await prisma.food.findMany({
        where: {
          id: { not: currentItem.foodId },
          ...(allergenIds.length > 0 && {
            NOT: {
              allergens: {
                some: { allergenId: { in: allergenIds } },
              },
            },
          }),
        },
        take: 30,
      });

      finalAlternatives = fallback.filter((food) => {
        const serving = calculateServing(currentCalories, food.caloriesPer100g);
        const nutrition = calculateNutritionByServing(serving, {
          calories: food.caloriesPer100g,
          protein: food.proteinPer100g,
          carbs: food.carbsPer100g,
          fat: food.fatPer100g,
        });
        return (
          nutrition.calories >= toleranceLow &&
          nutrition.calories <= toleranceHigh
        );
      });
    }

    if (finalAlternatives.length === 0) {
      return NextResponse.json(
        {
          error:
            "Tidak ada makanan pengganti yang tersedia dengan kalori setara dan aman dari alergi.",
        },
        { status: 404 },
      );
    }

    const randomIndex = Math.floor(Math.random() * finalAlternatives.length);
    const chosenFood = finalAlternatives[randomIndex];

    const newServingG = calculateServing(
      currentCalories,
      chosenFood.caloriesPer100g,
    );
    const newNutrition = calculateNutritionByServing(newServingG, {
      calories: chosenFood.caloriesPer100g,
      protein: chosenFood.proteinPer100g,
      carbs: chosenFood.carbsPer100g,
      fat: chosenFood.fatPer100g,
    });

    const updatedItem = await prisma.mealPlanItem.update({
      where: { id: itemId },
      data: {
        foodId: chosenFood.id,
        servingG: newServingG,
        calories: newNutrition.calories,
        proteinG: newNutrition.proteinG,
        carbsG: newNutrition.carbsG,
        fatG: newNutrition.fatG,
      },
      include: {
        food: true,
      },
    });

    return NextResponse.json({
      message: `Berhasil mengganti "${currentItem.food.name}" dengan "${chosenFood.name}"`,
      previousFood: {
        id: currentItem.foodId,
        name: currentItem.food.name,
        calories: currentItem.calories,
      },
      newItem: {
        id: updatedItem.id,
        dayNumber: updatedItem.dayNumber,
        mealType: updatedItem.mealType,
        food: {
          id: chosenFood.id,
          name: chosenFood.name,
          category: chosenFood.category,
        },
        servingG: newServingG,
        calories: newNutrition.calories,
        proteinG: newNutrition.proteinG,
        carbsG: newNutrition.carbsG,
        fatG: newNutrition.fatG,
      },
    });
  } catch (error) {
    console.error("PATCH /api/meal-plan/item/[itemId] error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 },
    );
  }
}
