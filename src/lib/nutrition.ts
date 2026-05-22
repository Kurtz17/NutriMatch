import { ActivityLevel, Gender, HealthGoal } from "@prisma/client";

// =============================================================================
// TIPE DATA
// =============================================================================

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

// =============================================================================
// MULTIPLIER AKTIVITAS
// =============================================================================

const ACTIVITY_MULTIPLIER: Record<ActivityLevel, number> = {
  SEDENTARY: 1.2,
  LIGHTLY_ACTIVE: 1.375,
  MODERATELY_ACTIVE: 1.55,
  VERY_ACTIVE: 1.725,
};

// =============================================================================
// ADJUSTMENT KALORI BERDASARKAN HEALTH GOAL
// =============================================================================

const GOAL_ADJUSTMENT: Record<HealthGoal, number> = {
  LOSE_WEIGHT: -500,     // Defisit 500 kcal/hari → turun ~0.5kg/minggu
  MAINTAIN_WEIGHT: 0,    // Sesuai TDEE
  GAIN_WEIGHT: 300,      // Surplus 300 kcal/hari → naik ~0.3kg/minggu
};

// =============================================================================
// KALKULASI BMR — Menggunakan Rumus Mifflin-St Jeor (lebih akurat dari Harris-Benedict)
//
// Pria:   BMR = (10 × berat_kg) + (6.25 × tinggi_cm) - (5 × usia) + 5
// Wanita: BMR = (10 × berat_kg) + (6.25 × tinggi_cm) - (5 × usia) - 161
// =============================================================================

export function calculateBMR(
  weightKg: number,
  heightCm: number,
  age: number,
  gender: Gender
): number {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  const genderAdjustment = gender === "MALE" ? 5 : -161;
  return Math.round(base + genderAdjustment);
}

// =============================================================================
// KALKULASI TDEE — BMR × Activity Multiplier
// =============================================================================

export function calculateTDEE(bmr: number, activityLevel: ActivityLevel): number {
  const multiplier = ACTIVITY_MULTIPLIER[activityLevel];
  return Math.round(bmr * multiplier);
}

// =============================================================================
// KALKULASI TARGET KALORI HARIAN — TDEE ± Goal Adjustment
// =============================================================================

export function calculateTargetCalories(
  tdee: number,
  healthGoal: HealthGoal
): number {
  const adjustment = GOAL_ADJUSTMENT[healthGoal];
  return Math.round(tdee + adjustment);
}

// =============================================================================
// FUNGSI UTAMA — Hitung semua sekaligus
// =============================================================================

export function calculateNutrition(input: NutritionInput): NutritionResult {
  const bmr = calculateBMR(
    input.weightKg,
    input.heightCm,
    input.age,
    input.gender
  );

  const tdee = calculateTDEE(bmr, input.activityLevel);
  const targetCalories = calculateTargetCalories(tdee, input.healthGoal);

  return { bmr, tdee, targetCalories };
}