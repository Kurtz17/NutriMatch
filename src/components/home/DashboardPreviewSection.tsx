"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Flame,
  ShieldAlert,
  Target,
  Activity,
  Utensils,
  LayoutDashboard,
  User,
  Settings,
} from "lucide-react";
import { buttonStyles } from "@/components/ui/Button";

type DashData = {
  name: string;
  calorieTarget: number;
  bmr: number;
  tdee: number;
  protein: number;
  carbs: number;
  fat: number;
  allergies: string[];
};

const SAMPLE: DashData = {
  name: "Alex Johnson",
  calorieTarget: 1900,
  bmr: 1680,
  tdee: 2140,
  protein: 120,
  carbs: 210,
  fat: 65,
  allergies: ["Peanuts", "Tree nuts", "Shellfish", "Sesame", "Gluten"],
};

const sidebarItems = [
  { icon: LayoutDashboard, label: "Meal Plan", active: true },
  { icon: User, label: "Profile", active: false },
  { icon: ShieldAlert, label: "Allergies", active: false },
  { icon: Settings, label: "Settings", active: false },
];

const todayMeals = [
  { name: "Greek yogurt bowl", cal: 420, type: "Breakfast" },
  { name: "Brown rice salad", cal: 530, type: "Lunch" },
  { name: "Quinoa salad", cal: 510, type: "Dinner" },
];

export function DashboardPreviewSection() {
  const [d, setD] = useState<DashData>(SAMPLE);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const me = await fetch("/api/auth/me", { cache: "no-store" });
        if (!me.ok) return;
        const { user } = await me.json();
        const prof = await fetch("/api/profile", { cache: "no-store" });
        if (!prof.ok) return;
        const { profile } = await prof.json();
        if (!active || !profile) return;
        const t = profile.targetCalories ?? 1900;
        const allergies = (profile.allergies ?? []).map(
          (a: { allergen: { name: string } }) => a.allergen.name
        );
        setD({
          name: user.name ?? user.email?.split("@")[0] ?? "User",
          calorieTarget: Math.round(t),
          bmr: Math.round(profile.bmr ?? 1680),
          tdee: Math.round(profile.tdee ?? 2140),
          protein: Math.round((t * 0.25) / 4),
          carbs: Math.round((t * 0.45) / 4),
          fat: Math.round((t * 0.30) / 9),
          allergies: allergies.length > 0 ? allergies : SAMPLE.allergies,
        });
      } catch { /* keep sample */ }
    })();
    return () => { active = false; };
  }, []);

  const macros = [
    { label: "Protein", pct: 25, color: "#16a34a" },
    { label: "Carbs", pct: 45, color: "#2563eb" },
    { label: "Fat", pct: 30, color: "#f59e0b" },
  ];

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="app-container">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left text */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-700">
              Dashboard Preview
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Review. Understand.
              <br />
              Eat with confidence.
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-muted">
              Your dashboard brings everything together—targets, allergies, meal
              previews, and nutrition summaries—so you can plan smarter every day.
            </p>
            <Link
              href="/dashboard"
              className={buttonStyles({ size: "lg", className: "mt-6" })}
            >
              Explore Dashboard <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Right dashboard mockup */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
            <div className="flex">
              {/* Mini sidebar */}
              <div className="hidden w-44 shrink-0 border-r border-slate-100 bg-slate-50 p-3 sm:block">
                <div className="mb-4 flex items-center gap-2 px-1">
                  <img src="/images/icon.png" alt="" className="h-6 w-6" />
                  <span className="text-xs font-bold text-ink">NutriMatch</span>
                </div>
                {sidebarItems.map((item) => (
                  <div
                    key={item.label}
                    className={`mb-1 flex items-center gap-2 rounded-lg px-2.5 py-2 text-[11px] font-semibold ${
                      item.active
                        ? "bg-brand-500 text-white"
                        : "text-muted hover:bg-slate-100"
                    }`}
                  >
                    <item.icon className="h-3.5 w-3.5" />
                    {item.label}
                  </div>
                ))}
                {/* User */}
                <div className="mt-6 flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-[9px] font-bold text-white">
                    {d.name[0]?.toUpperCase()}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[10px] font-bold text-ink">{d.name}</p>
                    <p className="text-[9px] text-muted">Premium Plan</p>
                  </div>
                </div>
              </div>

              {/* Main content area */}
              <div className="flex-1 p-4">
                {/* Stats row */}
                <div className="mb-3 grid grid-cols-4 gap-2">
                  <MiniStat label="Calorie Target" value={d.calorieTarget} unit="kcal" icon={Target} accent="emerald" />
                  <MiniStat label="BMR" value={d.bmr} unit="kcal" icon={Flame} accent="amber" />
                  <MiniStat label="TDEE" value={d.tdee} unit="kcal" icon={Activity} accent="blue" />
                  <MiniStat label="Protein" value={d.protein} unit={`${d.protein}g`} icon={Utensils} accent="emerald" />
                </div>

                {/* Body */}
                <div className="grid grid-cols-3 gap-2">
                  {/* Allergies */}
                  <div className="rounded-lg bg-slate-50 p-2.5">
                    <p className="mb-2 text-[10px] font-bold text-ink">Allergies</p>
                    <div className="space-y-1">
                      {d.allergies.slice(0, 4).map((a) => (
                        <div key={a} className="flex items-center gap-1 rounded bg-white px-1.5 py-1 text-[9px] font-semibold text-red-700 shadow-sm">
                          <ShieldAlert className="h-2.5 w-2.5" /> {a}
                        </div>
                      ))}
                    </div>
                    <button className="mt-2 flex items-center gap-0.5 text-[9px] font-semibold text-brand-600">
                      Manage allergies <ChevronRight className="h-2.5 w-2.5" />
                    </button>
                  </div>

                  {/* Today's Plan */}
                  <div className="rounded-lg bg-slate-50 p-2.5">
                    <p className="mb-2 text-[10px] font-bold text-ink">Today&apos;s Plan</p>
                    {todayMeals.map((m, i) => (
                      <div key={i} className="mb-1.5 rounded bg-white p-1.5 shadow-sm">
                        <p className="text-[10px] font-semibold text-ink">{m.name}</p>
                        <p className="text-[9px] text-muted">{m.cal} kcal</p>
                      </div>
                    ))}
                    <button className="mt-1 flex items-center gap-0.5 text-[9px] font-semibold text-brand-600">
                      View full 7-day plan <ChevronRight className="h-2.5 w-2.5" />
                    </button>
                  </div>

                  {/* Nutrition Summary */}
                  <div className="rounded-lg bg-slate-50 p-2.5">
                    <p className="mb-2 text-[10px] font-bold text-ink">Nutrition Summary</p>
                    <div className="flex items-center justify-center">
                      <svg viewBox="0 0 36 36" className="h-14 w-14">
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#e2e8f0" strokeWidth="4" />
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#16a34a" strokeWidth="4"
                          strokeDasharray="22 66" strokeDashoffset="25" strokeLinecap="round" />
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#2563eb" strokeWidth="4"
                          strokeDasharray="40 48" strokeDashoffset="3" strokeLinecap="round" />
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#f59e0b" strokeWidth="4"
                          strokeDasharray="26 62" strokeDashoffset="-37" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="mt-2 space-y-1">
                      {macros.map((m) => (
                        <div key={m.label} className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: m.color }} />
                            <span className="text-[9px] text-muted">{m.label}</span>
                          </div>
                          <span className="text-[9px] font-bold text-ink">{m.pct}%</span>
                        </div>
                      ))}
                    </div>
                    <button className="mt-2 flex items-center gap-0.5 text-[9px] font-semibold text-brand-600">
                      View full nutrition <ChevronRight className="h-2.5 w-2.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniStat({ label, value, unit, icon: Icon, accent }: {
  label: string; value: number; unit: string; icon: typeof Target; accent: string;
}) {
  const bg = accent === "emerald" ? "bg-emerald-50" : accent === "amber" ? "bg-amber-50" : "bg-sky-50";
  const text = accent === "emerald" ? "text-emerald-700" : accent === "amber" ? "text-amber-700" : "text-sky-700";
  return (
    <div className={`rounded-lg ${bg} p-2`}>
      <div className="mb-1 flex items-center justify-between">
        <p className="text-[9px] font-semibold text-muted">{label}</p>
        <Icon className={`h-3 w-3 ${text}`} />
      </div>
      <p className="text-sm font-bold text-ink">{value}<span className="ml-0.5 text-[9px] font-semibold text-muted">{unit === "kcal" ? "kcal" : ""}</span></p>
    </div>
  );
}
