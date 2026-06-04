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
      ];

  const stripLabel = (text: string) => text.replace(/^\[.*?\]\s*/, "");

  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-brand-50">
        <Image
          src={meal.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <CardContent className="flex flex-1 flex-col justify-between">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <Badge variant="blue">{meal.type}</Badge>
            <h3 className="mt-3 line-clamp-2 text-lg font-bold capitalize leading-snug text-ink">
              {stripLabel(meal.name)}
            </h3>
          </div>
          {meal.allergySafe ? (
            <Badge variant="safe" className="shrink-0">
              <ShieldCheck className="h-3.5 w-3.5" />
              Safe
            </Badge>
          ) : null}
        </div>

        <div className="mt-auto">
          <div className={`mt-5 grid gap-2 text-center ${stats.length === 3 ? "grid-cols-3" : "grid-cols-4"}`}>
            {stats.map(([label, value]) => (
              <div key={label} className="rounded-lg bg-slate-50 px-2 py-3">
                <p className="text-xs font-semibold text-muted">{label}</p>
                <p className="mt-1 text-sm font-bold text-ink">{value}</p>
              </div>
            ))}
          </div>



          {onOpen ? (
            <Button
              variant="outline"
              className="mt-5 w-full"
              onClick={() => onOpen(meal)}
            >
              View details
            </Button>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
