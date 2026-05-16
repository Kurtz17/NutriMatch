import type { MealPlanDay } from "@/types";
import { cn } from "@/lib/utils";

export function MealPlanTabs({
  days,
  activeDay,
  onChange,
}: {
  days: MealPlanDay[];
  activeDay: number;
  onChange: (day: number) => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto rounded-lg border border-slate-200 bg-white p-2 shadow-sm">
      {days.map((day) => (
        <button
          key={day.day}
          type="button"
          onClick={() => onChange(day.day)}
          className={cn(
            "h-10 min-w-24 shrink-0 rounded-lg px-4 text-sm font-bold transition",
            activeDay === day.day
              ? "bg-brand-500 text-white shadow-sm"
              : "text-slate-600 hover:bg-slate-100 hover:text-ink",
          )}
        >
          {day.label}
        </button>
      ))}
    </div>
  );
}
