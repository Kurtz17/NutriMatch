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
        <img 
          src="/images/icon.png" 
          alt="NutriMatch Icon" 
          className="h-12 w-12 object-contain drop-shadow-md" 
        />
        <h2 className="mt-6 max-w-md text-3xl font-bold tracking-normal">
          {title}
        </h2>
        <p className="mt-3 max-w-md text-sm leading-6 text-white/78">
          {description}
        </p>
      </div>
    </aside>
  );
}
