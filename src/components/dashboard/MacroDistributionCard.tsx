import type { NutritionSummary } from "@/types";
import { Card, CardContent } from "@/components/ui/Card";

export function MacroDistributionCard({
  summary,
}: {
  summary: NutritionSummary;
}) {
  return (
    <Card>
      <CardContent>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-brand-700">
              Macro distribution
            </p>
            <h2 className="mt-1 text-xl font-bold text-ink">Daily split</h2>
          </div>
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-[10px] border-brand-500 bg-white text-center shadow-sm">
            <span className="text-sm font-bold text-ink">100%</span>
          </div>
        </div>

        <div className="mt-6 space-y-5">
          {summary.macros.map((macro) => (
            <div key={macro.label}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-semibold text-ink">{macro.label}</span>
                <span className="font-semibold text-muted">
                  {macro.grams}g . {macro.percentage}%
                </span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${macro.percentage}%`,
                    backgroundColor: macro.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
