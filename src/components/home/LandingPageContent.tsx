import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  CalendarDays,
  ChartPie,
  ClipboardList,
  ShieldCheck,
  Sparkles,
  Utensils,
} from "lucide-react";
import { FeatureCard } from "@/components/home/FeatureCard";
import { Navbar } from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/Badge";
import { buttonStyles } from "@/components/ui/Button";

const sampleNutritionSummary = {
  calorieTarget: 1900,
  macros: [
    { label: "Protein", percentage: 25, color: "#16a34a" },
    { label: "Carbs", percentage: 45, color: "#2563eb" },
    { label: "Fat", percentage: 30, color: "#f59e0b" },
  ],
};

const features = [
  {
    icon: ClipboardList,
    title: "Guided profile setup",
    description:
      "Collect body metrics, activity level, diet goal, and allergy filters in one focused flow.",
  },
  {
    icon: Calculator,
    title: "BMR, TDEE, and target calories",
    description:
      "Turn profile data into clear daily energy targets that drive every recommendation.",
  },
  {
    icon: ShieldCheck,
    title: "Allergy-aware filtering",
    description:
      "Exclude foods connected to selected allergens before building the weekly plan.",
  },
  {
    icon: CalendarDays,
    title: "7-day generated meal plan",
    description:
      "Generate breakfast, lunch, dinner, and snack options from saved profile data.",
  },
  {
    icon: Sparkles,
    title: "Readable nutrition context",
    description:
      "Show why targets and recommendations fit the user's profile without burying the signal.",
  },
];

const workflow = [
  {
    number: "1",
    title: "Create account",
    description: "Register or login so the profile belongs to the active user.",
  },
  {
    number: "2",
    title: "Save profile",
    description: "Fill body metrics, activity, goal, and allergy preferences.",
  },
  {
    number: "3",
    title: "Generate plan",
    description: "Build a weekly plan from foods that pass the allergy filter.",
  },
];

export function LandingPageContent() {
  return (
    <div className="bg-white">
      <Navbar transparent />

      <section className="hero-food-bg relative min-h-[92vh] overflow-hidden">
        <div className="app-container flex min-h-[92vh] flex-col justify-end pb-10 pt-32">
          <div className="max-w-3xl text-white">
            <Badge className="bg-white/15 text-white ring-white/20" variant="neutral">
              Allergy-aware nutrition planning
            </Badge>
            <h1 className="mt-5 text-4xl font-bold tracking-normal sm:text-5xl lg:text-6xl">
              Build Safer Meal Plans From Your Real Profile
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              NutriMatch connects auth, nutrition profile data, allergy
              preferences, and weekly recommendations in one practical flow.
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
                Go to Dashboard
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-3 rounded-lg border border-white/20 bg-white/90 p-3 shadow-soft backdrop-blur md:grid-cols-3">
            <div className="flex min-h-40 flex-col justify-between rounded-lg border border-emerald-200 bg-white p-5 text-ink shadow-card">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-brand-700">
                    Example daily target
                  </p>
                  <p className="mt-1 text-3xl font-bold">
                    {sampleNutritionSummary.calorieTarget}
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
                {sampleNutritionSummary.macros.map((macro) => (
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
              <p className="text-sm font-semibold text-brand-700">
                Profile-driven filtering
              </p>
              <div>
                <p className="text-3xl font-bold text-ink">Auth + DB</p>
                <p className="mt-3 text-xs leading-5 text-muted">
                  User, profile, allergens, and plans are saved through API
                  routes.
                </p>
              </div>
            </div>

            <div className="flex min-h-40 flex-col justify-between rounded-lg bg-white p-5">
              <p className="text-sm font-semibold text-muted">Next action</p>
              <div>
                <p className="font-bold text-ink">Complete onboarding</p>
                <p className="mt-3 text-xs leading-5 text-muted">
                  Save your measurements and allergy preferences before
                  generating meals.
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
              Useful screens for the real recommendation flow
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              The app now follows the same path a user needs: account, profile,
              nutrition summary, allergy-safe meal generation, and plan review.
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
            <Badge variant="safe">Connected recommendation flow</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-normal text-ink">
              From profile to weekly plan in three steps
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              NutriMatch stores auth, profile, allergy preferences, and
              generated meal plans through the application API, so each page
              reflects the active account.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {workflow.map((item) => (
              <div key={item.title} className="rounded-lg bg-white p-5 shadow-card">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
                  {item.number}
                </span>
                <p className="mt-4 font-bold text-ink">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="app-container grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-700">
              Dashboard ready
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-ink">
              Review targets before generating meals
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              The dashboard highlights BMR, TDEE, target calories, allergy
              filters, and latest meal plan previews for the logged-in account.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {[
              ["BMR/TDEE", "Calculated from saved measurements"],
              ["Allergies", "Filters applied before meal selection"],
              ["Plan preview", "Latest generated meals surfaced quickly"],
            ].map(([title, description]) => (
              <div key={title} className="rounded-lg border border-slate-200 bg-white p-5">
                <Utensils className="h-5 w-5 text-brand-700" />
                <p className="mt-4 font-bold text-ink">{title}</p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8">
        <div className="app-container flex flex-col justify-between gap-3 text-sm text-muted sm:flex-row sm:items-center">
          <p className="font-semibold text-ink">NutriMatch</p>
          <p>Allergy-aware meal planning for saved user profiles.</p>
        </div>
      </footer>
    </div>
  );
}
