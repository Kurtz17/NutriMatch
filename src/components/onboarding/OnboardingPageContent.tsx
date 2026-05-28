"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { OnboardingStepper } from "@/components/onboarding/OnboardingStepper";
import { ActivityCard } from "@/components/profile/ActivityCard";
import { AllergyCard } from "@/components/profile/AllergyCard";
import { GoalCard } from "@/components/profile/GoalCard";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import type { ActivityLevel, Allergy, AllergyId, DietGoal, Gender, UserProfile } from "@/types";

const steps = ["Personal", "Body", "Goal", "Allergies"];
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

const defaultForm: EditableProfile = {
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

export function OnboardingPageContent() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<EditableProfile>(defaultForm);
  const [allergies, setAllergies] = useState<Allergy[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    let active = true;

    async function loadData() {
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

        if (!active) return;

        setAllergies((allergensData.allergens ?? []).map(toAllergy));
        setForm((current) => ({
          ...current,
          name: meData.user?.name ?? "",
          email: meData.user?.email ?? "",
        }));

        if (profileResponse.ok) {
          const profileData = await profileResponse.json();
          const savedProfile = profileData.profile as ApiProfile;

          setForm({
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
            : "Gagal memuat onboarding.",
        );
      } finally {
        if (active) setIsLoading(false);
      }
    }

    loadData();

    return () => {
      active = false;
    };
  }, []);

  const toggleAllergy = (id: AllergyId) => {
    setForm((current) => ({
      ...current,
      allergies: current.allergies.includes(id)
        ? current.allergies.filter((allergy) => allergy !== id)
        : [...current.allergies, id],
    }));
  };

  const saveProfile = async () => {
    setError("");

    if (form.age === "" || form.weightKg === "" || form.heightCm === "") {
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
          name: form.name,
          age: Number(form.age),
          weightKg: Number(form.weightKg),
          heightCm: Number(form.heightCm),
          gender: genderToApi[form.gender],
          activityLevel: activityToApi[form.activityLevel],
          healthGoal: goalToApi[form.dietGoal],
          allergenIds: form.allergies,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? "Gagal menyimpan profil.");
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch {
      setError("Tidak bisa menghubungi server. Coba jalankan ulang aplikasinya.");
    } finally {
      setIsSaving(false);
    }
  };

  const goNext = () => {
    if (step === steps.length) {
      saveProfile();
      return;
    }
    setStep((current) => current + 1);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <main className="app-container py-8 sm:py-10">
          <Card>
            <CardContent>
              <p className="text-sm font-semibold text-muted">
                Memuat onboarding...
              </p>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="app-container py-8 sm:py-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold text-brand-700">
                Onboarding
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-normal text-ink">
                Build your nutrition profile
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                A focused flow for collecting profile, goal, activity, and
                allergy data before generating recommendations.
              </p>
            </div>
            <p className="text-sm font-bold text-slate-500">
              Step {step} of {steps.length}
            </p>
          </div>

          <OnboardingStepper steps={steps} currentStep={step} />
          {error ? (
            <p className="mt-5 rounded-lg border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              {error}
            </p>
          ) : null}

          <Card className="mt-5">
            <CardContent className="p-5 sm:p-7">
              {step === 1 ? (
                <div>
                  <h2 className="text-2xl font-bold text-ink">
                    Personal Information
                  </h2>
                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    <Input
                      label="Name"
                      value={form.name}
                      onChange={(event) =>
                        setForm({ ...form, name: event.target.value })
                      }
                    />
                    <Input
                      label="Age"
                      type="number"
                      value={form.age}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          age:
                            event.target.value === ""
                              ? ""
                              : Number(event.target.value),
                        })
                      }
                    />
                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-slate-700">
                        Gender
                      </span>
                      <select
                        value={form.gender}
                        onChange={(event) =>
                          setForm({
                            ...form,
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
                </div>
              ) : null}

              {step === 2 ? (
                <div>
                  <h2 className="text-2xl font-bold text-ink">Body Profile</h2>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <Input
                      label="Height"
                      type="number"
                      value={form.heightCm}
                      helper="Centimeters"
                      onChange={(event) =>
                        setForm({
                          ...form,
                          heightCm:
                            event.target.value === ""
                              ? ""
                              : Number(event.target.value),
                        })
                      }
                    />
                    <Input
                      label="Weight"
                      type="number"
                      value={form.weightKg}
                      helper="Kilograms"
                      onChange={(event) =>
                        setForm({
                          ...form,
                          weightKg:
                            event.target.value === ""
                              ? ""
                              : Number(event.target.value),
                        })
                      }
                    />
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {activityLevels.map((level) => (
                      <ActivityCard
                        key={level}
                        level={level}
                        selected={form.activityLevel === level}
                        onSelect={(activityLevel) =>
                          setForm({ ...form, activityLevel })
                        }
                      />
                    ))}
                  </div>
                </div>
              ) : null}

              {step === 3 ? (
                <div>
                  <h2 className="text-2xl font-bold text-ink">
                    Nutrition Goal
                  </h2>
                  <div className="mt-6 grid gap-3 md:grid-cols-3">
                    {goals.map((goal) => (
                      <GoalCard
                        key={goal}
                        goal={goal}
                        selected={form.dietGoal === goal}
                        onSelect={(dietGoal) => setForm({ ...form, dietGoal })}
                      />
                    ))}
                  </div>
                </div>
              ) : null}

              {step === 4 ? (
                <div>
                  <h2 className="text-2xl font-bold text-ink">
                    Allergy Selection
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                    Select any allergies you want NutriMatch to avoid. If you
                    do not have allergies, you can leave this section empty.
                  </p>
                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                    {allergies.map((allergy) => (
                      <AllergyCard
                        key={allergy.id}
                        allergy={allergy}
                        selected={form.allergies.includes(allergy.id)}
                        onToggle={toggleAllergy}
                      />
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3 rounded-lg border border-brand-100 bg-brand-50 p-4 text-brand-900">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" />
                    <p className="text-sm font-semibold leading-6">
                      NutriMatch will only apply allergy filters when you select
                      one or more allergies.
                    </p>
                  </div>
                </div>
              ) : null}
            </CardContent>
          </Card>

          <div className="mt-5 flex justify-between gap-3">
            <Button
              variant="outline"
              disabled={step === 1}
              onClick={() => setStep((current) => current - 1)}
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <Button onClick={goNext} disabled={isSaving}>
              {step === steps.length
                ? isSaving
                  ? "Saving..."
                  : "Complete profile"
                : "Continue"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
