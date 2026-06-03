import { MealType } from "@prisma/client";
import { prisma } from "@/lib/prisma";

// =============================================================================
// TIPE DATA
// =============================================================================

export interface MealSlot {
  mealType: MealType;
  targetCalories: number;  
  categories: string[]; 
}

export interface GeneratedMealItem {
  foodId: string;
  foodName: string;
  mealType: MealType;
  dayNumber: number;
  servingG: number;
  calories: number;
  proteinG: number;
  carbsG: number;
  fatG: number;
}

// =============================================================================
// DISTRIBUSI KALORI PER SESI MAKAN
// Breakfast 25% | Lunch 35% | Dinner 30% | Snack 10%
// =============================================================================

export function getMealSlots(dailyTargetCalories: number): MealSlot[] {
  return [
    {
      mealType: "BREAKFAST",
      targetCalories: Math.round(dailyTargetCalories * 0.25),
      categories: ["Karbohidrat", "Protein", "Minuman"],
    },
    {
      mealType: "LUNCH",
      targetCalories: Math.round(dailyTargetCalories * 0.35),
      categories: ["Karbohidrat", "Protein", "Sayuran", "Makanan Khas"],
    },
    {
      mealType: "DINNER",
      targetCalories: Math.round(dailyTargetCalories * 0.30),
      categories: ["Karbohidrat", "Protein", "Sayuran", "Makanan Khas"],
    },
    {
      mealType: "SNACK",
      targetCalories: Math.round(dailyTargetCalories * 0.10),
      categories: ["Buah", "Minuman"],
    },
  ];
}

// =============================================================================
// HITUNG PORSI (GRAM) BERDASARKAN TARGET KALORI
// Rumus: servingG = (targetCalories / caloriesPer100g) * 100
// Dibatasi antara 80g - 400g agar porsi tetap realistis
// =============================================================================

export function calculateServing(
  targetCalories: number,
  caloriesPer100g: number
): number {
  const rawServing = (targetCalories / caloriesPer100g) * 100;
  const clamped = Math.min(Math.max(rawServing, 80), 400);
  return Math.round(clamped);
}

// =============================================================================
// HITUNG NUTRISI BERDASARKAN PORSI AKTUAL
// =============================================================================

export function calculateNutritionByServing(
  servingG: number,
  per100g: { calories: number; protein: number; carbs: number; fat: number }
) {
  const ratio = servingG / 100;
  return {
    calories: Math.round(per100g.calories * ratio),
    proteinG: Math.round(per100g.protein * ratio * 10) / 10,
    carbsG: Math.round(per100g.carbs * ratio * 10) / 10,
    fatG: Math.round(per100g.fat * ratio * 10) / 10,
  };
}

// =============================================================================
// GENERATOR UTAMA — Generate meal plan 7 hari
// =============================================================================

export async function generateMealPlan(
  userId: string,
  targetCalories: number,
  allergenIds: string[],
  days = 7,
): Promise<GeneratedMealItem[]> {

  const safeFoods = await prisma.food.findMany({
    where:
      allergenIds.length > 0
        ? {
            NOT: {
              allergens: {
                some: {
                  allergenId: { in: allergenIds },
                },
              },
            },
          }
        : {},
    include: {
      allergens: true,
    },
  });

  if (safeFoods.length < 5) {
    throw new Error(
      "Tidak cukup makanan yang aman untuk membuat meal plan. Coba kurangi filter alergi."
    );
  }

  const foodsByCategory: Record<string, typeof safeFoods> = {};
  for (const food of safeFoods) {
    const cat = food.category ?? "Other";
    if (!foodsByCategory[cat]) foodsByCategory[cat] = [];
    foodsByCategory[cat].push(food);
  }

  const mealSlots = getMealSlots(targetCalories);
  const result: GeneratedMealItem[] = [];

  for (let day = 1; day <= days; day++) {
    for (const slot of mealSlots) {
      const candidates = slot.categories
        .flatMap((cat) => foodsByCategory[cat] ?? [])
        .filter((food, idx, arr) => arr.findIndex((f) => f.id === food.id) === idx);

      if (candidates.length === 0) continue;

      const index = (day * mealSlots.indexOf(slot) + day) % candidates.length;
      const selectedFood = candidates[index];

      const servingG = calculateServing(
        slot.targetCalories,
        selectedFood.caloriesPer100g
      );

      const nutrition = calculateNutritionByServing(servingG, {
        calories: selectedFood.caloriesPer100g,
        protein: selectedFood.proteinPer100g,
        carbs: selectedFood.carbsPer100g,
        fat: selectedFood.fatPer100g,
      });

      result.push({
        foodId: selectedFood.id,
        foodName: selectedFood.name,
        mealType: slot.mealType,
        dayNumber: day,
        servingG,
        ...nutrition,
      });
    }
  }

  return result;
}
