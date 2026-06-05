import type { Meal, MealPlanDay, MealType, NutritionSummary } from "@/types";

type MealItem = {
  id: string;
  mealType: string;
  servingG: number;
  calories: number;
  proteinG: number;
  carbsG: number;
  fatG: number;
  caloriesPer100g?: number | null;
  matchScore?: number | null;
  food: {
    name: string;
    category?: string | null;
    imageUrl?: string | null;
  };
};

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80";

const imageByCategory: Record<string, string> = {
  Karbohidrat:
    "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=80",
  Protein:
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
  Sayuran:
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
  Buah: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=900&q=80",
  Minuman:
    "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80",
  "Makanan Khas":
    "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80",
};

export function buildNutritionSummary({
  bmr,
  tdee,
  targetCalories,
}: {
  bmr: number;
  tdee: number;
  targetCalories: number;
}): NutritionSummary {
  const macroTargets = [
    { label: "Protein" as const, percentage: 25, color: "#16a34a" },
    { label: "Carbs" as const, percentage: 45, color: "#2563eb" },
    { label: "Fat" as const, percentage: 30, color: "#f59e0b" },
  ];

  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    calorieTarget: Math.round(targetCalories),
    macros: macroTargets.map((macro) => ({
      ...macro,
      grams: Math.round(
        (targetCalories * (macro.percentage / 100)) /
          (macro.label === "Fat" ? 9 : 4),
      ),
    })),
  };
}

export function mealTypeLabel(mealType: string): MealType {
  const labels: Record<string, MealType> = {
    BREAKFAST: "Breakfast",
    LUNCH: "Lunch",
    DINNER: "Dinner",
    SNACK: "Snack",
  };

  return labels[mealType] ?? "Snack";
}

export function toUiMeal(item: MealItem): Meal {
  const category = item.food.category ?? "";

  const image =
    item.food.imageUrl || imageByCategory[category] || FALLBACK_IMAGE;

  return {
    id: item.id,
    type: mealTypeLabel(item.mealType),
    name: item.food.name,
    calories: Math.round(item.calories),
    protein: Math.round(item.proteinG),
    carbs: Math.round(item.carbsG),
    fat: Math.round(item.fatG),
    calories100g:
      item.caloriesPer100g == null
        ? undefined
        : Math.round(item.caloriesPer100g),
    idealGrams: Math.round(item.servingG),
    matchScore:
      item.matchScore == null
        ? undefined
        : Math.round(item.matchScore * 100) / 100,
    image,
    ingredients: [
      item.food.name,
      `${Math.round(item.servingG)}g serving`,
      category || "Food item",
    ],
    allergySafe: true,
    allergyAnalysis:
      "This item was generated after excluding foods that match your saved allergy filters.",
    fitReason:
      item.matchScore == null
        ? "The serving size is calculated from your saved calorie target and meal slot."
        : `NutriMatch AI ranked this food with a match score of ${Math.round(item.matchScore * 100) / 100}.`,
  };
}

const MEAL_TYPE_ORDER: MealType[] = ["Breakfast", "Lunch", "Dinner", "Snack"];

export function toUiMealPlanDays(
  days: Array<{
    dayNumber: number;
    totalCalories: number;
    meals: Record<string, MealItem[]>;
  }>,
): MealPlanDay[] {
  return days.map((day) => {
    const meals = ["BREAKFAST", "LUNCH", "DINNER", "SNACK"].flatMap(
      (mealType) => day.meals[mealType] ?? [],
    );

    const uiMeals = meals.map(toUiMeal);

    const mealsByType: Record<MealType, Meal[]> = {
      Breakfast: [],
      Lunch: [],
      Dinner: [],
      Snack: [],
    };
    for (const meal of uiMeals) {
      mealsByType[meal.type].push(meal);
    }

    return {
      day: day.dayNumber,
      label: `Day ${day.dayNumber}`,
      calories: day.totalCalories,
      meals: uiMeals,
      mealsByType,
    };
  });
}

export { MEAL_TYPE_ORDER };
