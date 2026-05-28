"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
  X,
} from "lucide-react";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { MacroDistributionCard } from "@/components/dashboard/MacroDistributionCard";
import { MealCard } from "@/components/meal-plan/MealCard";
import { MealPlanTabs } from "@/components/meal-plan/MealPlanTabs";
import { Badge } from "@/components/ui/Badge";
import { Button, buttonStyles } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { buildNutritionSummary, toUiMealPlanDays } from "@/lib/uiData";
import type { Meal, MealPlanDay, NutritionSummary } from "@/types";

type ApiProfile = {
  bmr: number | null;
  tdee: number | null;
  targetCalories: number | null;
  allergies: Array<{
    allergen: {
      name: string;
    };
  }>;
};

type ApiMealPlanDay = {
  dayNumber: number;
  totalCalories: number;
  meals: Record<
    string,
    Array<{
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
      };
    }>
  >;
};

type ApiMealPlanResponse = {
  mealPlan: {
    source?: "ai" | "fallback";
    narrativeSummary?: string | null;
    days: ApiMealPlanDay[];
  };
};

export function MealPlanPageContent() {
  const [activeDay, setActiveDay] = useState(1);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [days, setDays] = useState<MealPlanDay[]>([]);
  const [summary, setSummary] = useState<NutritionSummary | null>(null);
  const [recommendationSource, setRecommendationSource] = useState<
    "ai" | "fallback" | null
  >(null);
  const [narrativeSummary, setNarrativeSummary] = useState("");
  const [allergyCount, setAllergyCount] = useState(0);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasProfile, setHasProfile] = useState(false);

  async function loadMealPlan() {
    setError("");
    setIsLoading(true);

    try {
      const [profileResponse, mealPlanResponse] = await Promise.all([
        fetch("/api/profile"),
        fetch("/api/meal-plan"),
      ]);

      if (!profileResponse.ok) {
        setHasProfile(false);
        setDays([]);
        return;
      }

      const profileData = await profileResponse.json();
      const profile = profileData.profile as ApiProfile;
      setHasProfile(true);
      setAllergyCount(profile.allergies.length);
      setSummary(
        buildNutritionSummary({
          bmr: profile.bmr ?? 0,
          tdee: profile.tdee ?? 0,
          targetCalories: profile.targetCalories ?? 0,
        }),
      );

      if (mealPlanResponse.ok) {
        const mealPlanData = await mealPlanResponse.json();
        const mealPlan = (mealPlanData as ApiMealPlanResponse).mealPlan;
        const apiDays = mealPlan.days;
        setRecommendationSource(mealPlan.source ?? null);
        setNarrativeSummary(mealPlan.narrativeSummary ?? "");
        setDays(toUiMealPlanDays(apiDays));
      } else {
        setRecommendationSource(null);
        setNarrativeSummary("");
        setDays([]);
      }
    } catch {
      setError("Gagal memuat meal plan.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const timer = window.setTimeout(() => {
      loadMealPlan();
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const currentDay = useMemo(
    () => days.find((day) => day.day === activeDay) ?? days[0],
    [activeDay, days],
  );

  const weeklyCalories = days.reduce((total, day) => total + day.calories, 0);
  const selectedMealStats =
    selectedMeal?.matchScore == null
      ? [
          ["Calories", selectedMeal?.calories],
          ["Protein", `${selectedMeal?.protein}g`],
          ["Carbs", `${selectedMeal?.carbs}g`],
          ["Fat", `${selectedMeal?.fat}g`],
        ]
      : [
          ["Calories", selectedMeal.calories],
          ["Serving", `${selectedMeal.idealGrams ?? 0}g`],
          ["Cal/100g", selectedMeal.calories100g ?? 0],
          ["Match", selectedMeal.matchScore],
        ];

  async function generateMealPlan() {
    setError("");
    setIsGenerating(true);

    try {
      const response = await fetch("/api/meal-plan", { method: "POST" });
      const data = await response.json();

      if (!response.ok) {
        setError(
          [data.error, data.detail].filter(Boolean).join(" ") ||
            "Gagal generate meal plan.",
        );
        return;
      }

      await loadMealPlan();
      setActiveDay(1);
    } catch {
      setError("Tidak bisa menghubungi server. Coba jalankan ulang aplikasinya.");
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <DashboardShell>
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:py-8">
        <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-semibold text-brand-700">
              AI meal recommendations
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-normal text-ink">
              Allergy-safe meal recommendations
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
              Browse breakfast, lunch, dinner, and snack options generated from
              NutriMatch AI using your saved profile and allergy filters.
            </p>
          </div>
          <Badge variant="safe">
            <ShieldCheck className="h-3.5 w-3.5" />
            {allergyCount} allergy filters active
          </Badge>
        </div>

        {error ? (
          <p className="mb-4 rounded-lg border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
            {error}
          </p>
        ) : null}

        {isLoading ? (
          <Card>
            <CardContent>
              <p className="text-sm font-semibold text-muted">
                Memuat meal plan...
              </p>
            </CardContent>
          </Card>
        ) : !hasProfile ? (
          <Card>
            <CardContent>
              <p className="text-sm font-semibold text-brand-700">
                Profile required
              </p>
              <h2 className="mt-1 text-xl font-bold text-ink">
                Complete your profile first
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                Meal plan generation needs your body metrics, goal, activity
                level, and allergy preferences.
              </p>
              <Link
                href="/onboarding"
                className={buttonStyles({ size: "lg", className: "mt-6" })}
              >
                Start onboarding
              </Link>
            </CardContent>
          </Card>
        ) : days.length === 0 ? (
          <Card>
            <CardContent>
              <p className="text-sm font-semibold text-brand-700">
                No meal plan yet
              </p>
              <h2 className="mt-1 text-xl font-bold text-ink">
                Generate your first weekly plan
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                NutriMatch will use your saved calorie target and exclude foods
                that match selected allergens.
              </p>
              <Button
                className="mt-6"
                size="lg"
                onClick={generateMealPlan}
                disabled={isGenerating}
              >
                <RefreshCcw className="h-5 w-5" />
                {isGenerating ? "Generating..." : "Generate meal plan"}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 xl:grid-cols-[1fr_380px]">
            <div className="min-w-0">
              <MealPlanTabs
                days={days}
                activeDay={activeDay}
                onChange={setActiveDay}
              />

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {currentDay?.meals.map((meal) => (
                  <MealCard key={meal.id} meal={meal} onOpen={setSelectedMeal} />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {narrativeSummary ? (
                <Card>
                  <CardContent>
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-brand-700">
                        AI summary
                      </p>
                      {recommendationSource ? (
                        <Badge
                          variant={
                            recommendationSource === "ai" ? "safe" : "neutral"
                          }
                        >
                          {recommendationSource}
                        </Badge>
                      ) : null}
                    </div>
                    <p className="text-sm leading-6 text-muted">
                      {narrativeSummary}
                    </p>
                  </CardContent>
                </Card>
              ) : null}

              <Card>
                <CardContent>
                  <p className="text-sm font-semibold text-brand-700">
                    Weekly nutrition summary
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-ink">
                    {weeklyCalories.toLocaleString()} kcal
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    Average daily intake:{" "}
                    {Math.round(weeklyCalories / days.length)} kcal.
                  </p>
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    {summary?.macros.map((macro) => (
                      <div
                        key={macro.label}
                        className="rounded-lg bg-slate-50 p-3"
                      >
                        <p className="text-xs font-semibold text-muted">
                          {macro.label}
                        </p>
                        <p className="mt-1 text-lg font-bold text-ink">
                          {macro.percentage}%
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-100 bg-amber-50">
                <CardContent>
                  <div className="flex gap-3">
                    <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
                    <div>
                      <p className="font-bold text-amber-950">
                        Allergy safety section
                      </p>
                      <p className="mt-2 text-sm leading-6 text-amber-900">
                        Recommendations are generated after filtering foods that
                        contain your saved allergen selections.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {summary ? <MacroDistributionCard summary={summary} /> : null}

              <Button
                className="w-full"
                variant="secondary"
                onClick={generateMealPlan}
                disabled={isGenerating}
              >
                <RefreshCcw className="h-5 w-5" />
                {isGenerating ? "Generating..." : "Regenerate plan"}
              </Button>
            </div>
          </div>
        )}
      </div>

      {selectedMeal ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-end justify-center bg-ink/55 p-0 backdrop-blur-sm sm:items-center sm:p-4"
        >
          <div className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-lg bg-white shadow-soft sm:rounded-lg">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white/95 p-4 backdrop-blur">
              <div>
                <Badge variant="blue">{selectedMeal.type}</Badge>
                <h2 className="mt-2 text-xl font-bold text-ink">
                  {selectedMeal.name}
                </h2>
              </div>
              <Button
                size="icon"
                variant="ghost"
                aria-label="Close meal details"
                onClick={() => setSelectedMeal(null)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-80 bg-brand-50">
                <Image
                  src={selectedMeal.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 sm:p-6">
                <div className="grid grid-cols-4 gap-2 text-center">
                  {selectedMealStats.map(([label, value]) => (
                    <div key={label} className="rounded-lg bg-slate-50 p-3">
                      <p className="text-xs font-semibold text-muted">{label}</p>
                      <p className="mt-1 text-sm font-bold text-ink">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <h3 className="font-bold text-ink">Ingredients</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedMeal.ingredients.map((ingredient) => (
                      <Badge key={ingredient} variant="neutral">
                        {ingredient}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-6 rounded-lg border border-brand-100 bg-brand-50 p-4">
                  <div className="flex gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" />
                    <div>
                      <h3 className="font-bold text-brand-950">
                        Allergy analysis
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-brand-900">
                        {selectedMeal.allergyAnalysis}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex gap-3">
                    <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                    <div>
                      <h3 className="font-bold text-ink">
                        Why this meal fits you
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        {selectedMeal.fitReason}
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  className="mt-6 w-full"
                  variant="secondary"
                  onClick={generateMealPlan}
                  disabled={isGenerating}
                >
                  <RefreshCcw className="h-5 w-5" />
                  {isGenerating ? "Generating..." : "Regenerate alternatives"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </DashboardShell>
  );
}
