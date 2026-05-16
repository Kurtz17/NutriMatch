import { Sparkles } from "lucide-react";
import type { AIInsight } from "@/types";
import { Card, CardContent } from "@/components/ui/Card";

export function AIInsightCard({ insight }: { insight: AIInsight }) {
  return (
    <Card className="border-brand-100 bg-gradient-to-br from-brand-50 to-white">
      <CardContent>
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
      </CardContent>
    </Card>
  );
}
