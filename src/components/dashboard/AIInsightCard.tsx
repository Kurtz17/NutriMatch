import Link from "next/link";
import { ArrowRight, Sparkles, Lightbulb, TrendingUp, Utensils } from "lucide-react";
import type { AIInsight } from "@/types";
import { Card, CardContent } from "@/components/ui/Card";
import { buttonStyles } from "@/components/ui/Button";

const tips = [
  {
    icon: Lightbulb,
    title: "Stay consistent",
    text: "Following your daily calorie target closely helps your body adjust and supports your health goal.",
  },
  {
    icon: TrendingUp,
    title: "Track progress",
    text: "Review your meal plans weekly and adjust your profile as your body metrics change.",
  },
  {
    icon: Utensils,
    title: "Variety matters",
    text: "Regenerate your plan periodically to discover new allergy-safe foods and keep meals interesting.",
  },
];

export function AIInsightCard({ insight }: { insight: AIInsight }) {
  return (
    <Card className="border-brand-100 bg-gradient-to-br from-brand-50 to-white">
      <CardContent className="flex h-full flex-col">
        <div className="flex items-start gap-3">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-brand-700 shadow-sm">
            <Sparkles className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-brand-700">
              AI nutrition insight
            </p>
            <h2 className="mt-1 text-xl font-bold text-ink">{insight.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              {insight.summary}
            </p>
          </div>
        </div>
        <div className="mt-5 space-y-3">
          {insight.highlights.map((highlight) => (
            <div key={highlight} className="flex gap-3 text-sm text-slate-700">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-500" />
              <span className="leading-6">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Nutrition tips */}
        <div className="mt-6 flex-1 space-y-3 rounded-lg border border-brand-100 bg-white/60 p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-700">
            Quick Tips
          </p>
          {tips.map((tip) => (
            <div key={tip.title} className="flex gap-3">
              <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                <tip.icon className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{tip.title}</p>
                <p className="mt-0.5 text-xs leading-5 text-muted">{tip.text}</p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/meal-plan"
          className={buttonStyles({
            variant: "secondary",
            className: "mt-5 w-full",
          })}
        >
          View Meal Plan <ArrowRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
