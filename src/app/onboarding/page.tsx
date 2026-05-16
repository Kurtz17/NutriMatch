"use client";

import { useState } from "react";
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
import { mockAllergies, mockUser } from "@/data";
import type { ActivityLevel, AllergyId, DietGoal, Gender } from "@/types";

const steps = ["Personal", "Body", "Goal", "Allergies"];
const activityLevels: ActivityLevel[] = [
  "Sedentary",
  "Light",
  "Moderate",
  "Active",
  "Very Active",
];
const goals: DietGoal[] = ["Lose weight", "Maintain weight", "Gain weight"];
const genders: Gender[] = ["Female", "Male", "Prefer not to say"];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(mockUser);

  const toggleAllergy = (id: AllergyId) => {
    setForm((current) => ({
      ...current,
      allergies: current.allergies.includes(id)
        ? current.allergies.filter((allergy) => allergy !== id)
        : [...current.allergies, id],
    }));
  };

  const goNext = () => {
    if (step === steps.length) {
      router.push("/dashboard");
      return;
    }
    setStep((current) => current + 1);
  };

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
                        setForm({ ...form, age: Number(event.target.value) })
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
                          heightCm: Number(event.target.value),
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
                          weightKg: Number(event.target.value),
                        })
                      }
                    />
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
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
                  <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {mockAllergies.map((allergy) => (
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
                      NutriMatch will avoid meals that may trigger your selected
                      allergies.
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
            <Button onClick={goNext}>
              {step === steps.length ? "Complete profile" : "Continue"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
