import Link from "next/link";
import { redirect } from "next/navigation";
import {
  Activity,
  ArrowRight,
  Flame,
  ShieldCheck,
  Target,
  Utensils,
} from "lucide-react";
import { AIInsightCard } from "@/components/dashboard/AIInsightCard";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { MacroDistributionCard } from "@/components/dashboard/MacroDistributionCard";
import { MealCard } from "@/components/meal-plan/MealCard";
import { StatCard } from "@/components/dashboard/StatCard";
import { Badge } from "@/components/ui/Badge";
import { buttonStyles } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { prisma } from "@/lib/prisma";
import { createClient } from "@/lib/supabase/server";
import { buildNutritionSummary, toUiMeal } from "@/lib/uiData";

export async function DashboardPageContent() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const profile = await prisma.userProfile.findUnique({
    where: { userId: user.id },
    include: {
      user: true,
      allergies: {
        include: {
          allergen: true,
        },
      },
    },
  });

  if (!profile) {
    return (
      <DashboardShell>
        <div className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 lg:py-8">
          <Card>
            <CardContent>
              <p className="text-sm font-semibold text-brand-700">
                Dashboard
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-normal text-ink">
                Complete your nutrition profile
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                Your account is active. Add body metrics, activity level, goal,
                and allergy preferences before generating a meal plan.
              </p>
              <Link
                href="/onboarding"
                className={buttonStyles({ size: "lg", className: "mt-6" })}
              >
                Start onboarding <ArrowRight className="h-5 w-5" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </DashboardShell>
    );
  }

  const mealPlan = await prisma.mealPlan.findFirst({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    include: {
      items: {
        include: {
          food: true,
        },
        orderBy: [
          { dayNumber: "asc" },
          { mealType: "asc" },
        ],
      },
    },
  });

  const nutritionSummary = buildNutritionSummary({
    bmr: profile.bmr ?? 0,
    tdee: profile.tdee ?? 0,
    targetCalories: profile.targetCalories ?? 0,
  });
  const allergyLabels = profile.allergies.map((item) => item.allergen.name);
  const firstName =
    profile.user.name?.trim().split(/\s+/)[0] ?? user.email?.split("@")[0] ?? "there";
  const previewMeals =
    mealPlan?.items.filter((item) => item.dayNumber === 1).slice(0, 2).map(toUiMeal) ??
    [];

  const insight = {
    title: "Profile-based nutrition target",
    summary: `Your current plan targets ${nutritionSummary.calorieTarget} kcal per day from your saved body metrics and goal.`,
    highlights: [
      `${allergyLabels.length} allergy filter${
        allergyLabels.length === 1 ? "" : "s"
      } active`,
      `${nutritionSummary.bmr} kcal BMR`,
      `${nutritionSummary.tdee} kcal estimated TDEE`,
    ],
  };

  return (
    <DashboardShell>
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:py-8">
        <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-semibold text-brand-700">Dashboard</p>
            <h1 className="mt-2 text-3xl font-bold tracking-normal text-ink">
              Welcome back, {firstName}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
              Your nutrition targets, allergy filters, and recommendation
              previews are loaded from your saved profile.
            </p>
          </div>
          <Link href="/meal-plan" className={buttonStyles({ size: "lg" })}>
            Open Meal Plan <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <StatCard
            title="Daily calorie target"
            value={`${nutritionSummary.calorieTarget}`}
            helper="Goal-adjusted daily intake"
            badge="Saved"
            icon={Target}
            tone="green"
          />
          <StatCard
            title="BMR"
            value={`${nutritionSummary.bmr}`}
            helper="Estimated calories at rest"
            icon={Flame}
            tone="amber"
          />
          <StatCard
            title="TDEE"
            value={`${nutritionSummary.tdee}`}
            helper="Estimated daily energy expenditure"
            icon={Activity}
            tone="blue"
          />
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-[1fr_0.9fr]">
          <MacroDistributionCard summary={nutritionSummary} />

          <Card>
            <CardContent>
              <div className="flex items-start gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-brand-700">
                    Allergy safety status
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-ink">
                    {allergyLabels.length > 0
                      ? "Active filtering enabled"
                      : "No allergy filters selected"}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    Meal generation excludes foods connected to your selected
                    allergy groups.
                  </p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {allergyLabels.length > 0 ? (
                  allergyLabels.map((label) => (
                    <Badge key={label} variant="safe">
                      {label}
                    </Badge>
                  ))
                ) : (
                  <Badge variant="neutral">No allergy filters</Badge>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
          <AIInsightCard insight={insight} />

          <Card>
            <CardContent>
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-brand-700">
                    Latest recommendation preview
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-ink">
                    {previewMeals.length > 0
                      ? "Day 1 highlights"
                      : "No meal plan yet"}
                  </h2>
                </div>
                <Utensils className="h-5 w-5 text-slate-400" />
              </div>
              {previewMeals.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2">
                  {previewMeals.map((meal) => (
                    <MealCard key={meal.id} meal={meal} />
                  ))}
                </div>
              ) : (
                <div>
                  <p className="text-sm leading-6 text-muted">
                    Generate your first 7-day meal plan from the saved profile.
                  </p>
                  <Link
                    href="/meal-plan"
                    className={buttonStyles({
                      variant: "secondary",
                      className: "mt-5",
                    })}
                  >
                    Generate meal plan <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  );
}
