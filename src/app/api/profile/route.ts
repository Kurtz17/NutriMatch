import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import { calculateNutrition } from "@/lib/nutrition";
import { ActivityLevel, Gender, HealthGoal } from "@prisma/client";

// =============================================================================
// GET /api/profile
// Ambil profil user yang sedang login beserta daftar alerginya
// =============================================================================

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const profile = await prisma.userProfile.findUnique({
      where: { userId: user.id },
      include: {
        user: true,
        allergies: {
          include: {
            allergen: true,
          },
        },
      },
    });

    if (!profile) {
      return NextResponse.json(
        { error: "Profil belum diisi", hasProfile: false },
        { status: 404 }
      );
    }

    return NextResponse.json({ hasProfile: true, profile });
  } catch (error) {
    console.error("GET /api/profile error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}

// =============================================================================
// POST /api/profile
// Buat atau update profil fisik user + hitung BMR/TDEE + simpan alergi
// =============================================================================

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const {
      name,
      photoUrl,
      age,
      weightKg,
      heightCm,
      gender,
      activityLevel,
      healthGoal,
      allergenIds,
    } = body;

    const missingFields = [];
    if (!age) missingFields.push("age");
    if (!weightKg) missingFields.push("weightKg");
    if (!heightCm) missingFields.push("heightCm");
    if (!gender) missingFields.push("gender");
    if (!activityLevel) missingFields.push("activityLevel");
    if (!healthGoal) missingFields.push("healthGoal");

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Field berikut wajib diisi: ${missingFields.join(", ")}` },
        { status: 400 }
      );
    }

    const validGenders = ["MALE", "FEMALE"];
    const validActivityLevels = ["SEDENTARY", "LIGHTLY_ACTIVE", "MODERATELY_ACTIVE", "VERY_ACTIVE"];
    const validHealthGoals = ["LOSE_WEIGHT", "MAINTAIN_WEIGHT", "GAIN_WEIGHT"];

    if (!validGenders.includes(gender)) {
      return NextResponse.json(
        { error: "Gender tidak valid. Gunakan: MALE atau FEMALE" },
        { status: 400 }
      );
    }
    if (!validActivityLevels.includes(activityLevel)) {
      return NextResponse.json(
        { error: "Activity Level tidak valid." },
        { status: 400 }
      );
    }
    if (!validHealthGoals.includes(healthGoal)) {
      return NextResponse.json(
        { error: "Health Goal tidak valid." },
        { status: 400 }
      );
    }

    const { bmr, tdee, targetCalories } = calculateNutrition({
      age: Number(age),
      weightKg: Number(weightKg),
      heightCm: Number(heightCm),
      gender: gender as Gender,
      activityLevel: activityLevel as ActivityLevel,
      healthGoal: healthGoal as HealthGoal,
    });

    const profile = await prisma.$transaction(async (tx) => {
      
      if (name !== undefined || photoUrl !== undefined) {
        await tx.user.update({
          where: { id: user.id },
          data: { 
            ...(name !== undefined ? { name } : {}),
            ...(photoUrl !== undefined ? { photoUrl } : {}),
          },
        });
      }

      const savedProfile = await tx.userProfile.upsert({
        where: { userId: user.id },
        update: {
          age: Number(age),
          weightKg: Number(weightKg),
          heightCm: Number(heightCm),
          gender: gender as Gender,
          activityLevel: activityLevel as ActivityLevel,
          healthGoal: healthGoal as HealthGoal,
          bmr,
          tdee,
          targetCalories,
        },
        create: {
          userId: user.id,
          age: Number(age),
          weightKg: Number(weightKg),
          heightCm: Number(heightCm),
          gender: gender as Gender,
          activityLevel: activityLevel as ActivityLevel,
          healthGoal: healthGoal as HealthGoal,
          bmr,
          tdee,
          targetCalories,
        },
      });

      await tx.userAllergy.deleteMany({
        where: { profileId: savedProfile.id },
      });

      if (Array.isArray(allergenIds) && allergenIds.length > 0) {
        await tx.userAllergy.createMany({
          data: allergenIds.map((allergenId: string) => ({
            profileId: savedProfile.id,
            allergenId,
          })),
        });
      }

      return savedProfile;
    });

    return NextResponse.json(
      {
        message: "Profil berhasil disimpan",
        profile: {
          ...profile,
          bmr,
          tdee,
          targetCalories,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST /api/profile error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}