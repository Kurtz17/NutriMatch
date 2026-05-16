import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helper?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, helper, icon, id, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;

    return (
      <label htmlFor={inputId} className="block">
        <span className="mb-2 block text-sm font-semibold text-slate-700">
          {label}
        </span>
        <span className="relative block">
          {icon ? (
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              {icon}
            </span>
          ) : null}
          <input
            id={inputId}
            ref={ref}
            className={cn(
              "h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-50",
              icon && "pl-10",
              className,
            )}
            {...props}
          />
        </span>
        {helper ? (
          <span className="mt-2 block text-xs text-muted">{helper}</span>
        ) : null}
      </label>
    );
  },
);

Input.displayName = "Input";
