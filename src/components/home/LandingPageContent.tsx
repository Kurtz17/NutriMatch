import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  CalendarDays,
  ChartPie,
  ClipboardList,
  Lock,
  ShieldCheck,
  Sparkles,
  Target,
  Check,
  Zap,
  Globe,
  Mail,
  MessageCircle,
  Heart,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroDashboardPreview } from "@/components/home/HeroDashboardPreview";
import { DashboardPreviewSection } from "@/components/home/DashboardPreviewSection";
import { buttonStyles } from "@/components/ui/Button";

/* ------------------------------------------------------------------ */
/*  Static data                                                        */
/* ------------------------------------------------------------------ */

const trustBadges = [
  { icon: ShieldCheck, label: "Allergy-aware" },
  { icon: Target, label: "Profile-based" },
  { icon: Sparkles, label: "Science-backed" },
  { icon: Lock, label: "Privacy-first" },
];

const statCards = [
  {
    icon: ChartPie,
    title: "Target Calories",
    value: "1900",
    unit: "kcal",
    sub: "Example daily target",
    accent: "border-emerald-200 bg-white",
  },
  {
    icon: Calculator,
    title: "Smart Personalization",
    value: "100%",
    unit: "Custom",
    sub: "Tailored to your profile, allergies, and activity",
    accent: "bg-brand-50",
  },
  {
    icon: ShieldCheck,
    title: "Allergy-Aware Planning",
    value: "",
    unit: "",
    sub: "Excludes unsafe foods and recommends safe, delicious alternatives.",
    accent: "bg-white",
  },
  {
    icon: Zap,
    title: "Quick & Easy Setup",
    value: "",
    unit: "",
    sub: "Get your first personalized meal plan in just a few simple steps.",
    accent: "bg-white",
  },
];

const features = [
  {
    icon: ClipboardList,
    title: "Guided Profile Setup",
    description: "Collect body metrics, activity level, diet goal, and allergy filters in one focused flow.",
  },
  {
    icon: Calculator,
    title: "BMR, TDEE & Targets",
    description: "Turn profile data into clear daily energy targets that drive every recommendation.",
  },
  {
    icon: ShieldCheck,
    title: "Allergy-Aware Filtering",
    description: "Exclude foods connected to selected allergens before building the weekly plan.",
  },
  {
    icon: CalendarDays,
    title: "7-Day Meal Plan",
    description: "Generate breakfast, lunch, dinner, and snack options from your saved profile data.",
  },
  {
    icon: Sparkles,
    title: "Readable Nutrition",
    description: "Show why targets and recommendations fit the user's profile without the noise.",
  },
  {
    icon: ChartPie,
    title: "Plan Review Dashboard",
    description: "Review targets, allergies, meal previews, and nutrition summaries in one clean dashboard.",
  },
];

const workflow = [
  {
    number: "1",
    title: "Create Account",
    description: "Register or log in to save your profile and get started.",
    color: "bg-emerald-500",
  },
  {
    number: "2",
    title: "Save Your Profile",
    description: "Fill in body metrics, activity, goals, and allergy preferences.",
    color: "bg-brand-500",
  },
  {
    number: "3",
    title: "Generate Your Plan",
    description: "Build a weekly plan from safe foods that match your profile.",
    color: "bg-emerald-600",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function LandingPageContent() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* ============================================================= */}
      {/* HERO                                                           */}
      {/* ============================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50 pt-12 pb-16 sm:pt-20 sm:pb-24">
        {/* Decorative blobs */}
        <div className="hero-gradient-blob -top-32 -left-32 h-96 w-96 bg-emerald-400" />
        <div className="hero-gradient-blob -right-20 top-20 h-72 w-72 bg-sky-300" />

        <div className="app-container relative z-10 grid items-center gap-10 lg:grid-cols-2">
          {/* Left */}
          <div className="animate-fade-in-up max-w-xl">
            <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-ink sm:text-5xl">
              Safer Meal Plans{" "}
              <span className="text-brand-500">
                Built Around Your Real Nutrition Profile
              </span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-muted">
              NutriMatch connects your profile, nutrition data, and allergy
              preferences to generate safe, personalized weekly meal plans you
              can trust—every time.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/register" className={buttonStyles({ size: "lg" })}>
                Get Started <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/dashboard"
                className={buttonStyles({ variant: "outline", size: "lg" })}
              >
                View Dashboard
              </Link>
            </div>
            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-4">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-1.5 text-sm font-medium text-muted"
                >
                  <badge.icon className="h-4 w-4 text-brand-500" />
                  {badge.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dashboard preview card */}
          <div className="animate-fade-in-up animate-delay-200 hidden md:block">
            <HeroDashboardPreview />
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* STAT CARDS BAR                                                 */}
      {/* ============================================================= */}
      <section className="relative z-10 -mt-8">
        <div className="app-container">
          <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
            {statCards.map((card) => (
              <div
                key={card.title}
                className={`flex flex-col justify-between rounded-xl border border-slate-100 p-5 ${card.accent}`}
              >
                <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <card.icon className="h-5 w-5" />
                </span>
                <p className="text-sm font-bold text-muted">{card.title}</p>
                {card.value && (
                  <p className="mt-1 text-2xl font-bold text-ink">
                    {card.value}
                    {card.unit && (
                      <span className="ml-1 text-sm font-semibold text-muted">
                        {card.unit}
                      </span>
                    )}
                  </p>
                )}
                <p className="mt-2 text-xs leading-5 text-muted">{card.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* POWERFUL FEATURES                                              */}
      {/* ============================================================= */}
      <section id="features" className="py-16 sm:py-20">
        <div className="app-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-700">
              Powerful Features
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Everything you need for safe, personalized nutrition
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              From profile setup to weekly plans, NutriMatch makes healthy eating
              simple, safe, and tailored to you.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand-200 hover:shadow-card"
              >
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700 transition group-hover:bg-brand-500 group-hover:text-white">
                  <feature.icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-bold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* HOW IT WORKS                                                   */}
      {/* ============================================================= */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="app-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-700">
              How It Works
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              From profile to weekly plan in 3 simple steps
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              NutriMatch uses your profile, preferences, and health data to
              build plans that fit your life and keep you safe.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {workflow.map((step) => (
              <div
                key={step.number}
                className="relative rounded-xl bg-white p-6 text-center shadow-card"
              >
                <span
                  className={`mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white ${step.color}`}
                >
                  {step.number}
                </span>
                <h3 className="text-base font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* DASHBOARD PREVIEW (functional cards)                           */}
      {/* ============================================================= */}
      <DashboardPreviewSection />



      {/* ============================================================= */}
      {/* FOOTER                                                         */}
      {/* ============================================================= */}
      <footer className="bg-slate-950 py-16 lg:py-20">
        <div className="app-container grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <img
                src="/images/icon.png"
                alt="NutriMatch Icon"
                className="h-10 w-10 object-contain drop-shadow-sm"
              />
              <span className="text-2xl tracking-tight text-white">
                NutriMatch
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              NutriMatch connects your personal profile and allergy preferences
              to generate safe, personalized weekly meal plans you can trust.
            </p>
            {/* Social icons */}
            <div className="mt-5 flex gap-3">
              {[Globe, Mail, MessageCircle, Heart].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition hover:bg-emerald-600 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold text-white">Product</p>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li><Link href="/meal-plan" className="transition hover:text-emerald-400">Meal Plan</Link></li>
              <li><Link href="/dashboard" className="transition hover:text-emerald-400">Dashboard</Link></li>
              <li><Link href="/profile" className="transition hover:text-emerald-400">Profile Setup</Link></li>
              <li><Link href="#features" className="transition hover:text-emerald-400">Features</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Company</p>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li><Link href="#" className="transition hover:text-emerald-400">About Us</Link></li>
              <li><Link href="#" className="transition hover:text-emerald-400">Privacy Policy</Link></li>
              <li><Link href="#" className="transition hover:text-emerald-400">Terms of Service</Link></li>
              <li><Link href="#" className="transition hover:text-emerald-400">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="app-container mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} NutriMatch. All rights reserved.</p>
          <p>Built for allergy-aware nutrition.</p>
        </div>
      </footer>
    </div>
  );
}
