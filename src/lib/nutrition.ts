import { ActivityLevel, Gender, HealthGoal } from "@prisma/client";

export interface NutritionInput {
  age: number;
  weightKg: number;
  heightCm: number;
  gender: Gender;
  activityLevel: ActivityLevel;
  healthGoal: HealthGoal;
}

export interface NutritionResult {
  bmr: number;
  tdee: number;
  targetCalories: number;
}

const ACTIVITY_MULTIPLIER: Record<ActivityLevel, number> = {
  SEDENTARY: 1.2,
  LIGHTLY_ACTIVE: 1.375,
  MODERATELY_ACTIVE: 1.55,
  VERY_ACTIVE: 1.725,
};

const GOAL_ADJUSTMENT: Record<HealthGoal, number> = {
  LOSE_WEIGHT: -500,
  MAINTAIN_WEIGHT: 0,
  GAIN_WEIGHT: 300,
};

export function calculateBMR(
  weightKg: number,
  heightCm: number,
  age: number,
  gender: Gender,
): number {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  const genderAdjustment = gender === "MALE" ? 5 : -161;
  return Math.round(base + genderAdjustment);
}

export function calculateTDEE(
  bmr: number,
  activityLevel: ActivityLevel,
): number {
  const multiplier = ACTIVITY_MULTIPLIER[activityLevel];
  return Math.round(bmr * multiplier);
}

export function calculateTargetCalories(
  tdee: number,
  healthGoal: HealthGoal,
): number {
  const adjustment = GOAL_ADJUSTMENT[healthGoal];
  return Math.round(tdee + adjustment);
}

export function calculateNutrition(input: NutritionInput): NutritionResult {
  const bmr = calculateBMR(
    input.weightKg,
    input.heightCm,
    input.age,
    input.gender,
  );

  const tdee = calculateTDEE(bmr, input.activityLevel);
  const targetCalories = calculateTargetCalories(tdee, input.healthGoal);

  return { bmr, tdee, targetCalories };
}
