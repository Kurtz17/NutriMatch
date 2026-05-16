import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "safe" | "warning" | "neutral" | "mint" | "blue";

const styles: Record<BadgeVariant, string> = {
  safe: "bg-brand-50 text-brand-700 ring-brand-100",
  warning: "bg-amber-50 text-amber-700 ring-amber-100",
  neutral: "bg-slate-100 text-slate-700 ring-slate-200",
  mint: "bg-emerald-100 text-emerald-800 ring-emerald-200",
  blue: "bg-sky-100 text-sky-800 ring-sky-200",
};

export function Badge({
  className,
  variant = "neutral",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: BadgeVariant }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ring-1",
        styles[variant],
        className,
      )}
      {...props}
    />
  );
}
