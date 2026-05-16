import type { LucideIcon } from "lucide-react";
import { ArrowDown, ArrowUp, Minus, Target } from "lucide-react";
import type { DietGoal } from "@/types";
import { cn } from "@/lib/utils";

const goalMeta: Record<
  DietGoal,
  { icon: LucideIcon; description: string; accent: string }
> = {
  "Lose weight": {
    icon: ArrowDown,
    description: "A gentle calorie deficit with high satiety meals.",
    accent: "bg-sky-50 text-sky-700",
  },
  "Maintain weight": {
    icon: Minus,
    description: "Balanced intake for steady energy and routine.",
    accent: "bg-brand-50 text-brand-700",
  },
  "Gain weight": {
    icon: ArrowUp,
    description: "Nutrient-dense meals with controlled surplus.",
    accent: "bg-amber-50 text-amber-700",
  },
};

export function GoalCard({
  goal,
  selected,
  onSelect,
}: {
  goal: DietGoal;
  selected: boolean;
  onSelect?: (goal: DietGoal) => void;
}) {
  const meta = goalMeta[goal];
  const Icon = meta.icon;

  return (
    <button
      type="button"
      onClick={() => onSelect?.(goal)}
      className={cn(
        "rounded-lg border bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-card focus:outline-none focus:ring-2 focus:ring-brand-500",
        selected ? "border-brand-500 bg-brand-50" : "border-slate-200",
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span className={cn("rounded-lg p-2.5", meta.accent)}>
          <Icon className="h-5 w-5" />
        </span>
        {selected ? <Target className="h-5 w-5 text-brand-600" /> : null}
      </div>
      <p className="mt-5 font-bold text-ink">{goal}</p>
      <p className="mt-2 text-sm leading-5 text-muted">{meta.description}</p>
    </button>
  );
}
