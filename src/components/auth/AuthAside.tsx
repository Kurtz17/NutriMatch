import { BadgeCheck, Leaf, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function AuthAside({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <aside
      className={cn(
        "auth-food-bg relative hidden overflow-hidden lg:block",
        className ?? "min-h-[calc(100vh-32px)] rounded-lg",
      )}
    >
      <div className="absolute inset-x-0 bottom-0 p-8 text-white">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/15 backdrop-blur">
          <Leaf className="h-6 w-6" />
        </span>
        <h2 className="mt-6 max-w-md text-3xl font-bold tracking-normal">
          {title}
        </h2>
        <p className="mt-3 max-w-md text-sm leading-6 text-white/78">
          {description}
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg bg-white/14 p-4 backdrop-blur">
            <ShieldCheck className="h-5 w-5" />
            <p className="mt-3 text-sm font-bold">Allergy-safe filtering</p>
          </div>
          <div className="rounded-lg bg-white/14 p-4 backdrop-blur">
            <BadgeCheck className="h-5 w-5" />
            <p className="mt-3 text-sm font-bold">Personal macro targets</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
