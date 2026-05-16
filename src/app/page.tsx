import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  CalendarDays,
  ChartPie,
  ClipboardList,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { FeatureCard } from "@/components/home/FeatureCard";
import { Navbar } from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/Badge";
import { buttonStyles } from "@/components/ui/Button";
import { mockNutritionSummary } from "@/data";

const features = [
  {
    icon: ClipboardList,
    title: "Personalized nutrition profile",
    description:
      "Capture age, gender, body metrics, activity, goals, and allergies in a guided flow.",
  },
  {
    icon: Calculator,
    title: "BMR & TDEE calculator",
    description:
      "Show energy needs clearly with daily calorie targets ready for backend formulas.",
  },
  {
    icon: ShieldCheck,
    title: "Allergy-safe meal filtering",
    description:
      "Highlight safe recommendations and make allergy status visible before users commit.",
  },
  {
    icon: Sparkles,
    title: "AI nutrition insight",
    description:
      "Summarize why each recommendation fits the user's health profile and goals.",
  },
  {
    icon: CalendarDays,
    title: "7-day meal plan",
    description:
      "Preview breakfast, lunch, dinner, and snack recommendations across the week.",
  },
];

export default function LandingPage() {
  return (
    <div className="bg-white">
      <Navbar transparent />

      <section className="hero-food-bg relative min-h-screen overflow-hidden">
        <div className="app-container flex min-h-screen flex-col justify-end pb-10 pt-32">
          <div className="max-w-3xl text-white">
            <Badge className="bg-white/15 text-white ring-white/20" variant="neutral">
              Allergy-aware nutrition planning
            </Badge>
            <h1 className="mt-5 text-4xl font-bold tracking-normal sm:text-5xl lg:text-6xl">
              Personalized Meal Plans, Safe for Your Allergies
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              NutriMatch helps people build practical meal plans from their
              health profile, calorie needs, diet goals, and allergy preferences.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/register" className={buttonStyles({ size: "lg" })}>
                Get Started <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/dashboard"
                className={buttonStyles({
                  variant: "outline",
                  size: "lg",
                  className:
                    "border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-ink",
                })}
              >
                View Demo
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-3 rounded-lg border border-white/20 bg-white/90 p-3 shadow-soft backdrop-blur md:grid-cols-3">
            <div className="flex min-h-40 flex-col justify-between rounded-lg border border-emerald-200 bg-gradient-to-br from-white to-emerald-50 p-5 text-ink shadow-card">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-brand-700">
                    Daily target
                  </p>
                  <p className="mt-1 text-3xl font-bold">
                    {mockNutritionSummary.calorieTarget}
                    <span className="ml-1 text-sm font-semibold text-muted">
                      kcal
                    </span>
                  </p>
                </div>
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-700">
                  <ChartPie className="h-7 w-7" />
                </span>
              </div>
              <div className="mt-6 flex overflow-hidden rounded-full bg-slate-200">
                {mockNutritionSummary.macros.map((macro) => (
                  <span
                    key={macro.label}
                    className="h-3"
                    style={{
                      width: `${macro.percentage}%`,
                      backgroundColor: macro.color,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="flex min-h-40 flex-col justify-between rounded-lg bg-brand-50 p-5">
              <p className="text-sm font-semibold text-brand-700">Safe meals</p>
              <div>
                <p className="text-3xl font-bold text-ink">28</p>
                <p className="mt-3 text-xs leading-5 text-muted">
                  Filtered for seafood, nuts, and dairy.
                </p>
              </div>
            </div>

            <div className="flex min-h-40 flex-col justify-between rounded-lg bg-white p-5">
              <p className="text-sm font-semibold text-muted">Next meal</p>
              <div>
                <p className="font-bold text-ink">Quinoa garden bowl</p>
                <p className="mt-3 text-xs leading-5 text-muted">
                  610 kcal . 42g protein . allergy-safe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 sm:py-20">
        <div className="app-container">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-700">
              Product features
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-ink sm:text-4xl">
              A complete frontend for safer nutrition recommendations
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Built as a responsive SaaS-style prototype with clean forms,
              dashboard summaries, meal cards, and allergy-safe states.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-50 py-16">
        <div className="app-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Badge variant="safe">Presentation-ready prototype</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-normal text-ink">
              From profile to weekly plan in a few focused screens
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              The frontend uses mocked data today, but the page and component
              structure is ready for API integration when the backend and AI
              model are available.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["1", "Profile"],
              ["2", "Nutrition summary"],
              ["3", "Meal plan"],
            ].map(([number, label]) => (
              <div key={label} className="rounded-lg bg-white p-5 shadow-card">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
                  {number}
                </span>
                <p className="mt-4 font-bold text-ink">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8">
        <div className="app-container flex flex-col justify-between gap-3 text-sm text-muted sm:flex-row sm:items-center">
          <p className="font-semibold text-ink">NutriMatch</p>
          <p>Allergy-aware meal planning frontend prototype.</p>
        </div>
      </footer>
    </div>
  );
}
