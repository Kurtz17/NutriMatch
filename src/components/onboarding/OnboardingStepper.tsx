import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function OnboardingStepper({
  steps,
  currentStep,
}: {
  steps: string[];
  currentStep: number;
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="grid grid-cols-4 gap-2">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const active = stepNumber === currentStep;
          const complete = stepNumber < currentStep;
          return (
            <div key={step} className="min-w-0">
              <div
                className={cn(
                  "mb-3 h-2 rounded-full",
                  complete || active ? "bg-brand-500" : "bg-slate-100",
                )}
              />
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                    complete
                      ? "bg-brand-500 text-white"
                      : active
                        ? "bg-brand-50 text-brand-700 ring-1 ring-brand-200"
                        : "bg-slate-100 text-slate-500",
                  )}
                >
                  {complete ? <Check className="h-4 w-4" /> : stepNumber}
                </span>
                <span className="truncate text-xs font-semibold text-slate-600 sm:text-sm">
                  {step}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
