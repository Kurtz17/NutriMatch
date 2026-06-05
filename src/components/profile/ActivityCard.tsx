import {
  Bike,
  Dumbbell,
  Footprints,
  HeartPulse,
  Monitor,
  type LucideIcon,
} from "lucide-react";
import type { ActivityLevel } from "@/types";
import { cn } from "@/lib/utils";

const activityMeta: Record<
  ActivityLevel,
  { icon: LucideIcon; helper: string }
> = {
  Sedentary: {
    icon: Monitor,
    helper: "Desk work and little planned exercise.",
  },
  Light: {
    icon: Footprints,
    helper: "Light movement or workouts 1-3 days weekly.",
  },
  Moderate: {
    icon: HeartPulse,
    helper: "Exercise 3-5 days weekly.",
  },
  Active: {
    icon: Bike,
    helper: "Training most days or active job.",
  },
  "Very Active": {
    icon: Dumbbell,
    helper: "Intense exercise or physical work daily.",
  },
};

export function ActivityCard({
  level,
  selected,
  onSelect,
}: {
  level: ActivityLevel;
  selected: boolean;
  onSelect?: (level: ActivityLevel) => void;
}) {
  const meta = activityMeta[level];
  const Icon = meta.icon;

  return (
    <button
      type="button"
      onClick={() => onSelect?.(level)}
      className={cn(
        "rounded-lg border bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-card focus:outline-none focus:ring-2 focus:ring-brand-500",
        selected ? "border-brand-500 bg-brand-50" : "border-slate-200",
      )}
    >
      <span
        className={cn(
          "inline-flex h-10 w-10 items-center justify-center rounded-lg",
          selected ? "bg-white text-brand-700" : "bg-slate-100 text-slate-600",
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <p className="mt-4 font-bold text-ink">{level}</p>
      <p className="mt-1 text-sm leading-5 text-muted">{meta.helper}</p>
    </button>
  );
}
