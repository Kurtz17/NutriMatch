"use client";

import { useState } from "react";
import { Check, ChevronDown, ClipboardList, Sparkles, X } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import {
  allergyOptions,
  breakfastCategoryOptions,
  breakfastIngredientOptions,
  categoryToIngredientsMap,
  lunchDinnerCategoryOptions,
  lunchDinnerIngredientOptions,
  mealPrefOptions,
  type MealPrefKey,
  type RecommendationPayload,
} from "@/lib/recommendationPayload";
import { cn } from "@/lib/utils";

type SelectOption = {
  value: string;
  label: string;
};

function MultiSelectDropdown({
  label,
  options,
  values,
  onChange,
}: {
  label: string;
  options: SelectOption[];
  values: string[];
  onChange: (values: string[]) => void;
}) {
  const [open, setOpen] = useState(false);
  const selectedOptions = options.filter((option) =>
    values.includes(option.value),
  );
  const selectedLabels = selectedOptions.map((option) => option.label);

  function toggleValue(value: string) {
    onChange([value]);
    setOpen(false);
  }

  return (
    <div className="relative">
      <span className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </span>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex min-h-12 w-full items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-4 py-2 text-left text-sm text-ink outline-none transition hover:border-brand-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-50"
      >
        <span
          className={cn(
            "min-w-0 truncate",
            selectedLabels.length === 0 && "text-slate-400",
          )}
        >
          {selectedLabels.length > 0
            ? selectedLabels.join(", ")
            : "Select options"}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-slate-400 transition",
            open && "rotate-180",
          )}
        />
      </button>

      {open ? (
        <div className="absolute z-30 mt-2 max-h-72 w-full overflow-y-auto rounded-lg border border-slate-200 bg-white p-2 shadow-card">
          <button
            type="button"
            onClick={() => {
              onChange([]);
              setOpen(false);
            }}
            className="mb-1 flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm font-semibold text-slate-500 hover:bg-slate-50"
          >
            <X className="h-4 w-4" />
            Clear selection
          </button>
          {options.map((option) => {
            const selected = values.includes(option.value);

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => toggleValue(option.value)}
                className={cn(
                  "flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left text-sm font-semibold transition",
                  selected
                    ? "bg-brand-50 text-brand-800"
                    : "text-slate-700 hover:bg-slate-50",
                )}
              >
                <span>{option.label}</span>
                {selected ? <Check className="h-4 w-4" /> : null}
              </button>
            );
          })}
        </div>
      ) : null}

      {selectedOptions.length > 0 ? (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {selectedOptions.map((option) => (
            <span
              key={option.value}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700"
            >
              {option.label}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function RecommendationPayloadCard({
  payload,
  onChange,
}: {
  payload: RecommendationPayload;
  onChange: (payload: RecommendationPayload) => void;
}) {
  function updateMealPrefs(
    mealKey: MealPrefKey,
    field: keyof RecommendationPayload["breakfast_prefs"],
    value: string[],
  ) {
    onChange({
      ...payload,
      [mealKey]: {
        ...payload[mealKey],
        [field]: value,
      },
    });
  }

  function handleCategoryChange(mealKey: MealPrefKey, values: string[]) {
    const newCategory = values[0];
    const currentIngredient = payload[mealKey].main_ingredients[0];

    let newIngredients = payload[mealKey].main_ingredients;
    if (
      newCategory &&
      currentIngredient &&
      categoryToIngredientsMap[newCategory] &&
      !categoryToIngredientsMap[newCategory].includes(currentIngredient)
    ) {
      newIngredients = [];
    }

    onChange({
      ...payload,
      [mealKey]: {
        ...payload[mealKey],
        food_category: values,
        main_ingredients: newIngredients,
      },
    });
  }

  return (
    <Card>
      <CardContent>
        <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
          <div>
            <p className="text-sm font-semibold text-brand-700">
              Meal recommendation
            </p>
            <h2 className="mt-1 text-xl font-bold text-ink">
              Meal plan preferences
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
              Add optional meal preferences. Nutrition targets and hidden
              planning settings are prepared from your saved profile.
            </p>
          </div>
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
            <ClipboardList className="h-5 w-5" />
          </span>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
          <div className="space-y-5">
            <div className="space-y-3">
              {mealPrefOptions.map((meal) => {
                const selectedCategory = payload[meal.key].food_category[0];
                const baseIngredients =
                  meal.key === "breakfast_prefs"
                    ? breakfastIngredientOptions
                    : lunchDinnerIngredientOptions;

                const validIngredients =
                  selectedCategory && categoryToIngredientsMap[selectedCategory]
                    ? baseIngredients.filter((opt) =>
                        categoryToIngredientsMap[selectedCategory].includes(
                          opt.value,
                        ),
                      )
                    : baseIngredients;

                return (
                  <div
                    key={meal.key}
                    className="rounded-lg border border-slate-200 bg-white p-4"
                  >
                    <p className="mb-3 font-bold text-ink">{meal.label}</p>
                    <div className="grid gap-3 md:grid-cols-2">
                      <MultiSelectDropdown
                        label="Food category"
                        options={
                          meal.key === "breakfast_prefs"
                            ? breakfastCategoryOptions
                            : lunchDinnerCategoryOptions
                        }
                        values={payload[meal.key].food_category}
                        onChange={(values) =>
                          handleCategoryChange(meal.key, values)
                        }
                      />
                      <MultiSelectDropdown
                        label="Main ingredients"
                        options={validIngredients}
                        values={payload[meal.key].main_ingredients}
                        onChange={(values) =>
                          updateMealPrefs(meal.key, "main_ingredients", values)
                        }
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">
                User text
              </span>
              <textarea
                value={payload.user_text}
                onChange={(event) =>
                  onChange({ ...payload, user_text: event.target.value })
                }
                rows={4}
                placeholder="Contoh: Saya mau makan yang berkuah dan ada ayamnya di siang hari"
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-ink outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-50"
              />
            </label>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-brand-100 bg-brand-50 p-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-brand-700" />
                <p className="font-bold text-brand-950">Generated macros</p>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {[
                  ["Calories", payload.target_macros.calories],
                  ["Protein", `${payload.target_macros.protein_g}g`],
                  ["Fat", `${payload.target_macros.fat_g}g`],
                  ["Carb", `${payload.target_macros.carb_g}g`],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg bg-white px-3 py-2">
                    <p className="text-xs font-semibold text-muted">{label}</p>
                    <p className="mt-1 text-sm font-bold text-ink">{value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs leading-5 text-brand-900">
                Calculated from body profile, activity, and diet goal when you
                save changes.
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="font-bold text-ink">Allergy flags</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {allergyOptions.map((option) => {
                  const selected = payload.allergies[option.key] === 1;

                  return (
                    <div
                      key={option.key}
                      className={cn(
                        "rounded-lg border px-3 py-2 text-sm font-semibold",
                        selected
                          ? "border-brand-500 bg-brand-50 text-brand-800"
                          : "border-slate-200 bg-slate-50 text-slate-500",
                      )}
                    >
                      {option.label}
                      <span className="ml-2 text-xs">
                        {selected ? "1" : "0"}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Badge variant="safe">
                  {Object.values(payload.allergies).filter(Boolean).length}{" "}
                  active
                </Badge>
                <Badge variant="neutral">Synced from allergies</Badge>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
