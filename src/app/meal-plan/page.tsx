"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
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
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { mockMealPlan, mockNutritionSummary, mockUser } from "@/data";
import type { Meal } from "@/types";

export default function MealPlanPage() {
  const [activeDay, setActiveDay] = useState(1);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);

  const currentDay = useMemo(
    () => mockMealPlan.find((day) => day.day === activeDay) ?? mockMealPlan[0],
    [activeDay],
  );

  const weeklyCalories = mockMealPlan.reduce(
    (total, day) => total + day.calories,
    0,
  );

  return (
    <DashboardShell>
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:py-8">
        <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-semibold text-brand-700">
              7-day meal plan
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-normal text-ink">
              Allergy-safe weekly recommendations
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
              Browse breakfast, lunch, dinner, and snack options generated from
              the saved mock profile.
            </p>
          </div>
          <Badge variant="safe">
            <ShieldCheck className="h-3.5 w-3.5" />
            {mockUser.allergies.length} allergy filters active
          </Badge>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1fr_380px]">
          <div className="min-w-0">
            <MealPlanTabs
              days={mockMealPlan}
              activeDay={activeDay}
              onChange={setActiveDay}
            />

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {currentDay.meals.map((meal) => (
                <MealCard key={meal.id} meal={meal} onOpen={setSelectedMeal} />
              ))}
            </div>
          </div>

          <div className="space-y-4">
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
                  {Math.round(weeklyCalories / mockMealPlan.length)} kcal.
                </p>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {mockNutritionSummary.macros.map((macro) => (
                    <div key={macro.label} className="rounded-lg bg-slate-50 p-3">
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
                      Meals are mocked as allergy-safe, but production should
                      validate ingredients, preparation notes, and cross-contact
                      metadata from the backend.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <MacroDistributionCard summary={mockNutritionSummary} />
          </div>
        </div>
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
                  {[
                    ["Calories", selectedMeal.calories],
                    ["Protein", `${selectedMeal.protein}g`],
                    ["Carbs", `${selectedMeal.carbs}g`],
                    ["Fat", `${selectedMeal.fat}g`],
                  ].map(([label, value]) => (
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

                <Button className="mt-6 w-full" variant="secondary">
                  <RefreshCcw className="h-5 w-5" />
                  Alternative meal
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </DashboardShell>
  );
}
