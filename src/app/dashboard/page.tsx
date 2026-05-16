import Link from "next/link";
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
import {
  mockAIInsight,
  mockAllergies,
  mockMealPlan,
  mockNutritionSummary,
  mockUser,
} from "@/data";

export default function DashboardPage() {
  const allergyLabels = mockAllergies
    .filter((allergy) => mockUser.allergies.includes(allergy.id))
    .map((allergy) => allergy.label);

  return (
    <DashboardShell>
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:py-8">
        <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-semibold text-brand-700">Dashboard</p>
            <h1 className="mt-2 text-3xl font-bold tracking-normal text-ink">
              Welcome back, {mockUser.name.split(" ")[0]}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
              Your nutrition targets, allergy filters, and recommendation
              previews are ready.
            </p>
          </div>
          <Link href="/meal-plan" className={buttonStyles({ size: "lg" })}>
            Generate 7-Day Meal Plan <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <StatCard
            title="Daily calorie target"
            value={`${mockNutritionSummary.calorieTarget}`}
            helper="Maintenance-adjusted daily intake"
            badge="Today"
            icon={Target}
            tone="green"
          />
          <StatCard
            title="BMR"
            value={`${mockNutritionSummary.bmr}`}
            helper="Estimated calories at rest"
            icon={Flame}
            tone="amber"
          />
          <StatCard
            title="TDEE"
            value={`${mockNutritionSummary.tdee}`}
            helper="Estimated daily energy expenditure"
            icon={Activity}
            tone="blue"
          />
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-[1fr_0.9fr]">
          <MacroDistributionCard summary={mockNutritionSummary} />

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
                    Active filtering enabled
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    Recommendations exclude meals that contain or commonly rely
                    on your selected allergy groups.
                  </p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {allergyLabels.map((label) => (
                  <Badge key={label} variant="safe">
                    {label}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
          <AIInsightCard insight={mockAIInsight} />

          <Card>
            <CardContent>
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-brand-700">
                    Recent recommendation preview
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-ink">
                    Day 1 highlights
                  </h2>
                </div>
                <Utensils className="h-5 w-5 text-slate-400" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {mockMealPlan[0].meals.slice(0, 2).map((meal) => (
                  <MealCard key={meal.id} meal={meal} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  );
}
