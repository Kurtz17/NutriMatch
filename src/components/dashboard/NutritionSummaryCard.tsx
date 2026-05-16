import { Activity, Flame, Target } from "lucide-react";
import type { NutritionSummary } from "@/types";
import { Card, CardContent } from "@/components/ui/Card";

export function NutritionSummaryCard({
  summary,
}: {
  summary: NutritionSummary;
}) {
  const items = [
    {
      label: "BMR",
      value: summary.bmr,
      suffix: "kcal",
      icon: Flame,
      tone: "bg-amber-50 text-amber-700",
    },
    {
      label: "TDEE",
      value: summary.tdee,
      suffix: "kcal",
      icon: Activity,
      tone: "bg-sky-50 text-sky-700",
    },
    {
      label: "Daily Target",
      value: summary.calorieTarget,
      suffix: "kcal",
      icon: Target,
      tone: "bg-brand-50 text-brand-700",
    },
  ];

  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-brand-700">
              Nutrition summary
            </p>
            <h2 className="mt-1 text-xl font-bold text-ink">
              Your calculated energy needs
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted">
            Mock calculations are ready for backend integration when the API is
            available.
          </p>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <span className={`inline-flex rounded-lg p-2 ${item.tone}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-sm font-semibold text-muted">
                  {item.label}
                </p>
                <p className="mt-1 text-2xl font-bold text-ink">
                  {item.value}
                  <span className="ml-1 text-sm font-semibold text-muted">
                    {item.suffix}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
