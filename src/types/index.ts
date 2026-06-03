export type Gender = "Male" | "Female" | "Prefer not to say";

export type ActivityLevel =
  | "Sedentary"
  | "Light"
  | "Moderate"
  | "Active"
  | "Very Active";

export type DietGoal = "Lose weight" | "Maintain weight" | "Gain weight";

export type AllergyId = string;

export interface Allergy {
  id: AllergyId;
  slug?: string;
  label: string;
  description: string;
}

export interface UserProfile {
  name: string;
  email: string;
  age: number;
  gender: Gender;
  heightCm: number;
  weightKg: number;
  activityLevel: ActivityLevel;
  dietGoal: DietGoal;
  allergies: AllergyId[];
}

export interface MacroItem {
  label: "Protein" | "Carbs" | "Fat";
  grams: number;
  percentage: number;
  color: string;
}

export interface NutritionSummary {
  bmr: number;
  tdee: number;
  calorieTarget: number;
  macros: MacroItem[];
}

export interface AIInsight {
  title: string;
  summary: string;
  highlights: string[];
}

export type MealType = "Breakfast" | "Lunch" | "Dinner" | "Snack";

export interface Meal {
  id: string;
  type: MealType;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  calories100g?: number;
  idealGrams?: number;
  matchScore?: number;
  image: string;
  ingredients: string[];
  allergySafe: boolean;
  allergyAnalysis: string;
  fitReason: string;
}

export interface MealPlanDay {
  day: number;
  label: string;
  calories: number;
  meals: Meal[];
  mealsByType: Record<MealType, Meal[]>;
}
