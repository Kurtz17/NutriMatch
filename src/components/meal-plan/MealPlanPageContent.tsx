"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Coffee,
  Moon,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Sun,
  TriangleAlert,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { MacroDistributionCard } from "@/components/dashboard/MacroDistributionCard";
import { MealCard } from "@/components/meal-plan/MealCard";
import { MealPlanTabs } from "@/components/meal-plan/MealPlanTabs";
import { Badge } from "@/components/ui/Badge";
import { Button, buttonStyles } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import {
  localIsoDate,
  parseStoredRecommendationPayload,
  RECOMMENDATION_PAYLOAD_STORAGE_KEY,
} from "@/lib/recommendationPayload";
import {
  buildNutritionSummary,
  MEAL_TYPE_ORDER,
  toUiMealPlanDays,
} from "@/lib/uiData";
import type { Meal, MealPlanDay, MealType, NutritionSummary } from "@/types";

type ApiProfile = {
  bmr: number | null;
  tdee: number | null;
  targetCalories: number | null;
  allergies: Array<{
    allergen: {
      name: string;
      slug?: string;
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
        imageUrl?: string | null;
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

const MEAL_SECTION_META: Record<
  MealType,
  { icon: React.ReactNode; label: string; description: string; color: string; bg: string }
> = {
  Breakfast: {
    icon: <Coffee className="h-5 w-5" />,
    label: "Sarapan",
    description: "Mulai hari dengan energi yang cukup",
    color: "text-amber-700",
    bg: "bg-amber-50 border-amber-200",
  },
  Lunch: {
    icon: <Sun className="h-5 w-5" />,
    label: "Makan Siang",
    description: "Isi ulang energi di tengah hari",
    color: "text-orange-700",
    bg: "bg-orange-50 border-orange-200",
  },
  Dinner: {
    icon: <Moon className="h-5 w-5" />,
    label: "Makan Malam",
    description: "Tutup hari dengan makan yang seimbang",
    color: "text-indigo-700",
    bg: "bg-indigo-50 border-indigo-200",
  },
  Snack: {
    icon: <UtensilsCrossed className="h-5 w-5" />,
    label: "Camilan",
    description: "Cemilan sehat di antara waktu makan",
    color: "text-emerald-700",
    bg: "bg-emerald-50 border-emerald-200",
  },
};

function HalalOnlyCheckbox({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-emerald-100 bg-emerald-50 px-4 py-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-1 h-4 w-4 rounded border-emerald-300 text-emerald-600 focus:ring-emerald-500"
      />
      <span>
        <span className="block text-sm font-bold text-emerald-950">
          Halal only
        </span>
        <span className="mt-1 block text-xs leading-5 text-emerald-800">
          Kirim filter halal ke AI saat membuat meal plan.
        </span>
      </span>
    </label>
  );
}

function MealSection({
  mealType,
  meals,
  onOpenMeal,
}: {
  mealType: MealType;
  meals: Meal[];
  onOpenMeal: (meal: Meal) => void;
}) {
  if (meals.length === 0) return null;
  const meta = MEAL_SECTION_META[mealType];
  const totalCals = meals.reduce((s, m) => s + m.calories, 0);

  return (
    <div className="mb-8">
      <div className={`mb-4 flex items-center justify-between rounded-xl border px-4 py-3 ${meta.bg}`}>
        <div className={`flex items-center gap-2.5 ${meta.color}`}>
          {meta.icon}
          <div>
            <p className={`font-bold ${meta.color}`}>{meta.label}</p>
            <p className="text-xs text-muted">{meta.description}</p>
          </div>
        </div>
        <span className={`text-sm font-bold ${meta.color}`}>
          {Math.round(totalCals)} kcal
        </span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {meals.map((meal) => (
          <MealCard key={meal.id} meal={meal} onOpen={onOpenMeal} />
        ))}
      </div>
    </div>
  );
}

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
  const [halalOnly, setHalalOnly] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      parseStoredRecommendationPayload(
        window.localStorage.getItem(RECOMMENDATION_PAYLOAD_STORAGE_KEY),
      )?.halal_only ?? false
    );
  });

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
        setRecommendationSource(mealPlan.source ?? null);
        setNarrativeSummary(mealPlan.narrativeSummary ?? "");
        setDays(toUiMealPlanDays(mealPlan.days));
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
      const savedPayload = parseStoredRecommendationPayload(
        window.localStorage.getItem(RECOMMENDATION_PAYLOAD_STORAGE_KEY),
      );
      const requestPayload = {
        ...(savedPayload ?? {}),
        start_date: localIsoDate(),
        days: 7,
        variety_penalty: 0.15,
        halal_only: halalOnly,
      };
      window.localStorage.setItem(
        RECOMMENDATION_PAYLOAD_STORAGE_KEY,
        JSON.stringify(requestPayload),
      );
      const response = await fetch("/api/meal-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestPayload),
      });
      const data = await response.json();

      if (!response.ok) {
        const details = Array.isArray(data.details) ? data.details : [];
        setError(
          [data.error, data.detail, ...details].filter(Boolean).join(" ") ||
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
        {/* Header */}
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

        {/* Loading state */}
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
                NutriMatch will use the recommendation settings saved on your
                profile.
              </p>
              <div className="mt-5 max-w-md">
                <HalalOnlyCheckbox checked={halalOnly} onChange={setHalalOnly} />
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" onClick={generateMealPlan} disabled={isGenerating}>
                  <RefreshCcw className="h-5 w-5" />
                  {isGenerating ? "Generating..." : "Generate meal plan"}
                </Button>
                <Link
                  href="/profile"
                  className={buttonStyles({ variant: "outline", size: "lg" })}
                >
                  Edit preferences
                </Link>
              </div>
            </CardContent>
          </Card>
        ) : (
          /* Main content: tabs + sections + sidebar */
          <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
            {/* Left: day tabs + meal sections */}
            <div className="min-w-0">
              <MealPlanTabs
                days={days}
                activeDay={activeDay}
                onChange={setActiveDay}
              />

              {/* Daily summary bar */}
              {currentDay && (
                <div className="mt-4 mb-6 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-5 py-3">
                  <div>
                    <p className="text-xs font-semibold text-muted uppercase tracking-wide">
                      Total hari ini
                    </p>
                    <p className="mt-0.5 text-2xl font-bold text-ink">
                      {Math.round(currentDay.calories).toLocaleString()}{" "}
                      {summary?.calorieTarget ? (
                        <span className="text-base font-medium text-muted">
                          / {summary.calorieTarget.toLocaleString()} kcal
                        </span>
                      ) : (
                        "kcal"
                      )}
                    </p>
                  </div>
                  <div className="flex gap-4 text-center">
                    {(["Breakfast", "Lunch", "Dinner", "Snack"] as MealType[]).map((t) => {
                      const count = currentDay.mealsByType[t].length;
                      const meta = MEAL_SECTION_META[t];
                      return (
                        <div key={t} className="hidden sm:block">
                          <p className={`text-xs font-semibold ${meta.color}`}>{meta.label}</p>
                          <p className="mt-0.5 text-sm font-bold text-ink">{count} item</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Meal sections per type */}
              {currentDay &&
                MEAL_TYPE_ORDER.map((mealType) => (
                  <MealSection
                    key={mealType}
                    mealType={mealType}
                    meals={currentDay.mealsByType[mealType]}
                    onOpenMeal={setSelectedMeal}
                  />
                ))}
            </div>

            {/* Right sidebar */}
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

              <HalalOnlyCheckbox checked={halalOnly} onChange={setHalalOnly} />

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

      {/* Meal detail modal */}
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
                  alt={selectedMeal.name}
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
                      <h3 className="font-bold text-ink">Why this meal fits you</h3>
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
