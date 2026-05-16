import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import { buttonStyles } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar({ transparent = false }: { transparent?: boolean }) {
  const linkClass = transparent
    ? "text-emerald-50/85 hover:text-white"
    : "text-slate-600 hover:text-ink";

  return (
    <header
      className={cn(
        "z-30 w-full border-b",
        transparent
          ? "absolute top-0 border-emerald-300/20 bg-emerald-950/75 shadow-[0_18px_45px_-32px_rgba(15,23,42,0.95)] backdrop-blur-md"
          : "border-slate-100 bg-white/90 backdrop-blur",
      )}
    >
      <div className="app-container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-lg",
              transparent
                ? "bg-white/12 text-white ring-1 ring-white/25"
                : "bg-brand-50 text-brand-700",
            )}
          >
            <Leaf className="h-5 w-5" />
          </span>
          <span className={cn("text-lg", transparent ? "text-white" : "text-ink")}>
            NutriMatch
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
          <Link className={linkClass} href="/#features">
            Features
          </Link>
          <Link className={linkClass} href="/meal-plan">
            Meal Plan
          </Link>
          <Link className={linkClass} href="/dashboard">
            Dashboard
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className={cn(
              buttonStyles({
                variant: transparent ? "ghost" : "outline",
                size: "sm",
              }),
              transparent && "text-white hover:bg-white/10 hover:text-white",
            )}
          >
            Login
          </Link>
          <Link href="/register" className={buttonStyles({ size: "sm" })}>
            Start <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
