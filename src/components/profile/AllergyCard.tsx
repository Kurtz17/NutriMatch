import type { LucideIcon } from "lucide-react";
import { Bean, Egg, Fish, Milk, Nut, Shell, ShieldCheck, Wheat } from "lucide-react";
import type { Allergy, AllergyId } from "@/types";
import { cn } from "@/lib/utils";

const allergyIcons: Record<AllergyId, LucideIcon> = {
  seafood: Fish,
  nuts: Nut,
  gluten: Wheat,
  dairy: Milk,
  egg: Egg,
  soy: Bean,
  shellfish: Shell,
  wheat: Wheat,
};

export function AllergyCard({
  allergy,
  selected,
  onToggle,
}: {
  allergy: Allergy;
  selected: boolean;
  onToggle?: (id: AllergyId) => void;
}) {
  const Icon = allergyIcons[allergy.id];

  return (
    <button
      type="button"
      onClick={() => onToggle?.(allergy.id)}
      className={cn(
        "min-h-32 rounded-lg border bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-card focus:outline-none focus:ring-2 focus:ring-brand-500",
        selected ? "border-brand-500 bg-brand-50" : "border-slate-200",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-lg",
            selected ? "bg-white text-brand-700" : "bg-slate-100 text-slate-600",
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        {selected ? (
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 text-white">
            <ShieldCheck className="h-4 w-4" />
          </span>
        ) : null}
      </div>
      <p className="mt-4 font-bold text-ink">{allergy.label}</p>
      <p className="mt-1 text-sm leading-5 text-muted">{allergy.description}</p>
    </button>
  );
}
