import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import type { Meal } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export function MealCard({
  meal,
  onOpen,
}: {
  meal: Meal;
  onOpen?: (meal: Meal) => void;
}) {
  const stats =
    meal.matchScore == null
      ? [
        ["Cal", meal.calories],
        ["Protein", `${meal.protein}g`],
        ["Carbs", `${meal.carbs}g`],
        ["Fat", `${meal.fat}g`],
      ]
      : [
        ["Cal", meal.calories],
        ["Grams", `${meal.idealGrams ?? 0}g`],
        ["/100g", meal.calories100g ?? 0],
        ["Match", meal.matchScore],
      ];

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-50">
        <Image
          src={meal.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <CardContent>
        <div className="flex items-start justify-between gap-3">
          <div>
            <Badge variant="blue">{meal.type}</Badge>
            <h3 className="mt-3 text-lg font-bold text-ink">{meal.name}</h3>
          </div>
          {meal.allergySafe ? (
            <Badge variant="safe">
              <ShieldCheck className="h-3.5 w-3.5" />
              Safe
            </Badge>
          ) : null}
        </div>

        <div className="mt-4 grid grid-cols-4 gap-2 text-center">
          {stats.map(([label, value]) => (
            <div key={label} className="rounded-lg bg-slate-50 px-2 py-3">
              <p className="text-xs font-semibold text-muted">{label}</p>
              <p className="mt-1 text-sm font-bold text-ink">{value}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 line-clamp-2 text-sm leading-6 text-muted">
          {meal.ingredients.slice(0, 4).join(", ")}
        </p>

        {onOpen ? (
          <Button
            variant="outline"
            className="mt-5 w-full"
            onClick={() => onOpen(meal)}
          >
            View details
          </Button>
        ) : null}
      </CardContent>
    </Card>
  );
}
