"use client";

import { FormEvent, useEffect, useState } from "react";
import { Save } from "lucide-react";
import type { ActivityLevel, Allergy, AllergyId, DietGoal, Gender, UserProfile } from "@/types";
import { ActivityCard } from "@/components/profile/ActivityCard";
import { AllergyCard } from "@/components/profile/AllergyCard";
import { GoalCard } from "@/components/profile/GoalCard";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

const activityLevels: ActivityLevel[] = [
  "Sedentary",
  "Light",
  "Moderate",
  "Very Active",
];
const goals: DietGoal[] = ["Lose weight", "Maintain weight", "Gain weight"];
const genders: Gender[] = ["Female", "Male"];

type EditableProfile = Omit<UserProfile, "age" | "heightCm" | "weightKg"> & {
  age: number | "";
  heightCm: number | "";
  weightKg: number | "";
};

const defaultProfile: EditableProfile = {
  name: "",
  email: "",
  age: 25,
  gender: "Female",
  heightCm: 165,
  weightKg: 60,
  activityLevel: "Light",
  dietGoal: "Maintain weight",
  allergies: [],
};

const activityToApi: Record<ActivityLevel, string> = {
  Sedentary: "SEDENTARY",
  Light: "LIGHTLY_ACTIVE",
  Moderate: "MODERATELY_ACTIVE",
  Active: "VERY_ACTIVE",
  "Very Active": "VERY_ACTIVE",
};

const activityFromApi: Record<string, ActivityLevel> = {
  SEDENTARY: "Sedentary",
  LIGHTLY_ACTIVE: "Light",
  MODERATELY_ACTIVE: "Moderate",
  VERY_ACTIVE: "Very Active",
};

const goalToApi: Record<DietGoal, string> = {
  "Lose weight": "LOSE_WEIGHT",
  "Maintain weight": "MAINTAIN_WEIGHT",
  "Gain weight": "GAIN_WEIGHT",
};

const goalFromApi: Record<string, DietGoal> = {
  LOSE_WEIGHT: "Lose weight",
  MAINTAIN_WEIGHT: "Maintain weight",
  GAIN_WEIGHT: "Gain weight",
};

const genderToApi: Record<Gender, string> = {
  Female: "FEMALE",
  Male: "MALE",
  "Prefer not to say": "FEMALE",
};

const genderFromApi: Record<string, Gender> = {
  FEMALE: "Female",
  MALE: "Male",
};

type ApiAllergen = {
  id: string;
  name: string;
  slug: string;
};

type ApiProfile = {
  age: number;
  weightKg: number;
  heightCm: number;
  gender: string;
  activityLevel: string;
  healthGoal: string;
  user: {
    email: string;
    name: string | null;
  };
  allergies: Array<{
    allergen: ApiAllergen;
  }>;
};

function toAllergy(allergen: ApiAllergen): Allergy {
  return {
    id: allergen.id,
    slug: allergen.slug,
    label: allergen.name,
    description: `Avoid foods containing ${allergen.name.toLowerCase()}.`,
  };
}

export function ProfileForm() {
  const [profile, setProfile] = useState<EditableProfile>(defaultProfile);
  const [allergies, setAllergies] = useState<Allergy[]>([]);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    let active = true;

    async function loadProfile() {
      setIsLoading(true);
      setError("");

      try {
        const [meResponse, allergensResponse, profileResponse] =
          await Promise.all([
            fetch("/api/auth/me"),
            fetch("/api/allergens"),
            fetch("/api/profile"),
          ]);

        if (!meResponse.ok) {
          throw new Error("Sesi login tidak valid. Silakan login ulang.");
        }

        const meData = await meResponse.json();
        const allergensData = await allergensResponse.json();
        const nextAllergies = (allergensData.allergens ?? []).map(toAllergy);

        if (!active) return;

        setAllergies(nextAllergies);
        setProfile((current) => ({
          ...current,
          name: meData.user?.name ?? "",
          email: meData.user?.email ?? "",
        }));

        if (profileResponse.ok) {
          const profileData = await profileResponse.json();
          const savedProfile = profileData.profile as ApiProfile;

          setProfile({
            name: savedProfile.user.name ?? "",
            email: savedProfile.user.email,
            age: savedProfile.age,
            gender: genderFromApi[savedProfile.gender] ?? "Female",
            heightCm: savedProfile.heightCm,
            weightKg: savedProfile.weightKg,
            activityLevel:
              activityFromApi[savedProfile.activityLevel] ?? "Light",
            dietGoal: goalFromApi[savedProfile.healthGoal] ?? "Maintain weight",
            allergies: savedProfile.allergies.map(
              (item) => item.allergen.id,
            ),
          });
        }
      } catch (caughtError) {
        setError(
          caughtError instanceof Error
            ? caughtError.message
            : "Gagal memuat profil.",
        );
      } finally {
        if (active) setIsLoading(false);
      }
    }

    loadProfile();

    return () => {
      active = false;
    };
  }, []);

  const toggleAllergy = (id: AllergyId) => {
    setStatus("");
    setProfile((current) => ({
      ...current,
      allergies: current.allergies.includes(id)
        ? current.allergies.filter((allergy) => allergy !== id)
        : [...current.allergies, id],
    }));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    setError("");

    if (profile.age === "" || profile.weightKg === "" || profile.heightCm === "") {
      setError("Age, height, dan weight wajib diisi.");
      return;
    }

    setIsSaving(true);

    try {
      const response = await fetch("/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: profile.name,
          age: Number(profile.age),
          weightKg: Number(profile.weightKg),
          heightCm: Number(profile.heightCm),
          gender: genderToApi[profile.gender],
          activityLevel: activityToApi[profile.activityLevel],
          healthGoal: goalToApi[profile.dietGoal],
          allergenIds: profile.allergies,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? "Gagal menyimpan profil.");
        return;
      }

      setStatus("Profil berhasil disimpan.");
    } catch {
      setError("Tidak bisa menghubungi server. Coba jalankan ulang aplikasinya.");
    } finally {
      setIsSaving(false);
    }
  }

  if (isLoading) {
    return (
      <Card>
        <CardContent>
          <p className="text-sm font-semibold text-muted">Memuat profil...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {error ? (
        <p className="rounded-lg border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {error}
        </p>
      ) : null}

      <Card>
        <CardContent>
          <div className="mb-6">
            <p className="text-sm font-semibold text-brand-700">Profile</p>
            <h2 className="mt-1 text-xl font-bold text-ink">
              Personal information
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              label="Name"
              value={profile.name}
              onChange={(event) =>
                setProfile({ ...profile, name: event.target.value })
              }
              required
            />
            <Input label="Email" value={profile.email} readOnly />
            <Input
              label="Age"
              type="number"
              min={1}
              value={profile.age}
              onChange={(event) =>
                setProfile({
                  ...profile,
                  age:
                    event.target.value === ""
                      ? ""
                      : Number(event.target.value),
                })
              }
              required
            />
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">
                Gender
              </span>
              <select
                value={profile.gender}
                onChange={(event) =>
                  setProfile({
                    ...profile,
                    gender: event.target.value as Gender,
                  })
                }
                className="h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-ink outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-50"
              >
                {genders.map((gender) => (
                  <option key={gender}>{gender}</option>
                ))}
              </select>
            </label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <div className="mb-6">
            <p className="text-sm font-semibold text-brand-700">Body profile</p>
            <h2 className="mt-1 text-xl font-bold text-ink">
              Measurements and activity
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              label="Height"
              type="number"
              min={1}
              value={profile.heightCm}
              helper="Centimeters"
              onChange={(event) =>
                setProfile({
                  ...profile,
                  heightCm:
                    event.target.value === ""
                      ? ""
                      : Number(event.target.value),
                })
              }
              required
            />
            <Input
              label="Weight"
              type="number"
              min={1}
              value={profile.weightKg}
              helper="Kilograms"
              onChange={(event) =>
                setProfile({
                  ...profile,
                  weightKg:
                    event.target.value === ""
                      ? ""
                      : Number(event.target.value),
                })
              }
              required
            />
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {activityLevels.map((level) => (
              <ActivityCard
                key={level}
                level={level}
                selected={profile.activityLevel === level}
                onSelect={(activityLevel) =>
                  setProfile({ ...profile, activityLevel })
                }
              />
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <div className="mb-6">
            <p className="text-sm font-semibold text-brand-700">Diet goal</p>
            <h2 className="mt-1 text-xl font-bold text-ink">Nutrition target</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {goals.map((goal) => (
              <GoalCard
                key={goal}
                goal={goal}
                selected={profile.dietGoal === goal}
                onSelect={(dietGoal) => setProfile({ ...profile, dietGoal })}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <div className="mb-6">
            <p className="text-sm font-semibold text-brand-700">Allergies</p>
            <h2 className="mt-1 text-xl font-bold text-ink">
              Allergy preferences
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
              Select any allergies you want NutriMatch to avoid. If you do not
              have allergies, you can leave this section empty.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {allergies.map((allergy) => (
              <AllergyCard
                key={allergy.id}
                allergy={allergy}
                selected={profile.allergies.includes(allergy.id)}
                onToggle={toggleAllergy}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
        <p className="text-sm font-semibold text-brand-700">{status}</p>
        <Button type="submit" size="lg" disabled={isSaving}>
          <Save className="h-5 w-5" />
          {isSaving ? "Saving..." : "Save changes"}
        </Button>
      </div>
    </form>
  );
}
