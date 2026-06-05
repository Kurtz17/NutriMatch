"use client";

import { useEffect, useState } from "react";
import {
  ShieldAlert,
  Egg,
  TreePine,
  Shell,
  Flower2,
  ChevronRight,
} from "lucide-react";

type ProfileData = {
  name: string;
  calorieTarget: number;
  protein: number;
  carbs: number;
  fat: number;
  allergies: string[];
  todayMeals: { name: string; cal: number; type: string }[];
};

const SAMPLE: ProfileData = {
  name: "Alex",
  calorieTarget: 1900,
  protein: 120,
  carbs: 210,
  fat: 65,
  allergies: ["Peanuts", "Tree nuts", "Shellfish", "Sesame"],
  todayMeals: [
    { name: "Greek yogurt bowl", cal: 420, type: "Breakfast" },
    { name: "Quinoa salad", cal: 530, type: "Lunch" },
  ],
};

const allergyIcons: Record<string, typeof ShieldAlert> = {
  Peanuts: Egg,
  "Tree nuts": TreePine,
  Shellfish: Shell,
  Sesame: Flower2,
};

export function HeroDashboardPreview() {
  const [data, setData] = useState<ProfileData>(SAMPLE);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const meRes = await fetch("/api/auth/me", { cache: "no-store" });
        if (!meRes.ok) return;
        const { user } = await meRes.json();
        const profRes = await fetch("/api/profile", { cache: "no-store" });
        if (!profRes.ok) return;
        const { profile } = await profRes.json();
        if (!active || !profile) return;

        const target = profile.targetCalories ?? 1900;
        const pGrams = Math.round((target * 0.25) / 4);
        const cGrams = Math.round((target * 0.45) / 4);
        const fGrams = Math.round((target * 0.3) / 9);
        const allergies = (profile.allergies ?? []).map(
          (a: { allergen: { name: string } }) => a.allergen.name,
        );
        const firstName =
          user.name?.trim().split(/\s+/)[0] ??
          user.email?.split("@")[0] ??
          "there";

        setData({
          name: firstName,
          calorieTarget: Math.round(target),
          protein: pGrams,
          carbs: cGrams,
          fat: fGrams,
          allergies: allergies.length > 0 ? allergies : SAMPLE.allergies,
          todayMeals: SAMPLE.todayMeals,
        });
      } catch {}
    })();
    return () => {
      active = false;
    };
  }, []);

  const macros = [
    {
      label: "Protein",
      value: data.protein,
      unit: "g",
      pct: 25,
      color: "#16a34a",
    },
    { label: "Carbs", value: data.carbs, unit: "g", pct: 45, color: "#2563eb" },
    { label: "Fat", value: data.fat, unit: "g", pct: 30, color: "#f59e0b" },
  ];

  return (
    <div className="animate-float rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
      <div className="mb-4 flex items-center gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
          {data.name[0]?.toUpperCase() ?? "N"}
        </span>
        <div>
          <p className="text-sm font-bold text-ink">Dashboard</p>
          <p className="text-xs text-muted">Welcome back, {data.name} 👋</p>
        </div>
      </div>
      <p className="mb-3 text-[11px] text-muted">
        Here&apos;s your nutrition summary for today.
      </p>

      <div className="mb-4 grid grid-cols-4 gap-2">
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-2">
          <p className="text-[10px] font-semibold text-muted">Daily Target</p>
          <p className="text-lg font-bold text-ink">{data.calorieTarget}</p>
          <p className="text-[10px] text-muted">of {data.calorieTarget} kcal</p>
        </div>
        {macros.map((m) => (
          <div key={m.label} className="rounded-lg bg-slate-50 p-2">
            <p className="text-[10px] font-semibold text-muted">{m.label}</p>
            <p className="text-lg font-bold text-ink">
              {m.value}
              <span className="text-xs font-semibold text-muted">{m.unit}</span>
            </p>
            <div className="mt-1 h-1 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full"
                style={{ width: `${m.pct}%`, backgroundColor: m.color }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="mb-2 text-xs font-bold text-ink">Today&apos;s Plan</p>
          {data.todayMeals.map((meal, i) => (
            <div
              key={i}
              className="mb-2 flex items-center gap-2 rounded-lg bg-slate-50 p-2"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-[10px] font-bold text-brand-700">
                {meal.type[0]}
              </span>
              <div className="min-w-0">
                <p className="truncate text-[11px] font-semibold text-ink">
                  {meal.name}
                </p>
                <p className="text-[10px] text-muted">{meal.cal} kcal</p>
              </div>
            </div>
          ))}
          <button className="mt-1 flex items-center gap-1 text-[10px] font-semibold text-brand-600 hover:text-brand-700">
            View full plan <ChevronRight className="h-3 w-3" />
          </button>
        </div>

        <div>
          <p className="mb-2 text-xs font-bold text-ink">Nutrition Summary</p>
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 36 36" className="h-16 w-16 shrink-0">
              <circle
                cx="18"
                cy="18"
                r="14"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="4"
              />
              <circle
                cx="18"
                cy="18"
                r="14"
                fill="none"
                stroke="#16a34a"
                strokeWidth="4"
                strokeDasharray="22 66"
                strokeDashoffset="25"
                strokeLinecap="round"
              />
              <circle
                cx="18"
                cy="18"
                r="14"
                fill="none"
                stroke="#2563eb"
                strokeWidth="4"
                strokeDasharray="40 48"
                strokeDashoffset="3"
                strokeLinecap="round"
              />
              <circle
                cx="18"
                cy="18"
                r="14"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="4"
                strokeDasharray="26 62"
                strokeDashoffset="-37"
                strokeLinecap="round"
              />
            </svg>
            <div className="space-y-1.5">
              {macros.map((m) => (
                <div key={m.label} className="flex items-center gap-1.5">
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: m.color }}
                  />
                  <span className="text-[10px] text-muted">{m.label}</span>
                  <span className="ml-auto text-[10px] font-bold text-ink">
                    {m.pct}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="mb-1.5 mt-3 text-xs font-bold text-ink">Allergies</p>
          <div className="flex flex-wrap gap-1.5">
            {data.allergies.slice(0, 4).map((a) => {
              const Icon = allergyIcons[a] ?? ShieldAlert;
              return (
                <span
                  key={a}
                  className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-semibold text-red-700 ring-1 ring-red-100"
                >
                  <Icon className="h-2.5 w-2.5" /> {a}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
