import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const toneStyles = {
  green: "bg-brand-50 text-brand-700",
  amber: "bg-amber-50 text-amber-700",
  blue: "bg-sky-50 text-sky-700",
  slate: "bg-slate-100 text-slate-700",
};

export function StatCard({
  title,
  value,
  helper,
  badge,
  icon: Icon,
  tone = "green",
}: {
  title: string;
  value: string;
  helper: string;
  badge?: string;
  icon: LucideIcon;
  tone?: keyof typeof toneStyles;
}) {
  return (
    <Card>
      <CardContent className="flex h-full flex-col justify-between gap-5">
        <div className="flex items-start justify-between gap-3">
          <span className={cn("rounded-lg p-2.5", toneStyles[tone])}>
            <Icon className="h-5 w-5" />
          </span>
          {badge ? (
            <Badge variant={tone === "amber" ? "warning" : "neutral"}>
              {badge}
            </Badge>
          ) : null}
        </div>
        <div>
          <p className="text-sm font-semibold text-muted">{title}</p>
          <p className="mt-2 text-3xl font-bold tracking-normal text-ink">
            {value}
          </p>
          <p className="mt-2 text-sm leading-5 text-muted">{helper}</p>
        </div>
      </CardContent>
    </Card>
  );
}
