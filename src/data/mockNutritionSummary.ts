import type { NutritionSummary } from "@/types";

export const mockNutritionSummary: NutritionSummary = {
  bmr: 1378,
  tdee: 2136,
  calorieTarget: 2050,
  macros: [
    {
      label: "Protein",
      grams: 128,
      percentage: 25,
      color: "#22C55E",
    },
    {
      label: "Carbs",
      grams: 231,
      percentage: 45,
      color: "#38BDF8",
    },
    {
      label: "Fat",
      grams: 68,
      percentage: 30,
      color: "#F59E0B",
    },
  ],
};
