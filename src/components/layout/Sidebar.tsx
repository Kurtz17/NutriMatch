"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarDays,
  LayoutDashboard,
  Leaf,
  LogOut,
  Settings,
  UserRound,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/meal-plan",
    label: "Meal Plan",
    icon: CalendarDays,
  },
  {
    href: "/profile",
    label: "Profile",
    icon: UserRound,
  },
  {
    href: "/onboarding",
    label: "Onboarding",
    icon: Settings,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      <aside className="hidden min-h-screen w-64 shrink-0 border-r border-slate-200 bg-white px-4 py-5 lg:block">
        <Link href="/" className="mb-8 flex items-center gap-2 px-2 font-bold">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="text-lg text-ink">NutriMatch</span>
        </Link>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex h-11 items-center gap-3 rounded-lg px-3 text-sm font-semibold transition",
                  active
                    ? "bg-brand-50 text-brand-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-ink",
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 rounded-lg border border-amber-100 bg-amber-50 p-4">
          <p className="text-sm font-bold text-amber-900">Allergy-safe mode</p>
          <p className="mt-1 text-xs leading-5 text-amber-800">
            Meal recommendations are filtered against saved allergy preferences.
          </p>
        </div>

        <Link
          href="/login"
          className="mt-6 flex h-11 items-center gap-3 rounded-lg px-3 text-sm font-semibold text-slate-500 hover:bg-slate-100 hover:text-ink"
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </Link>
      </aside>

      <div className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur lg:hidden">
        <div className="mb-3 flex items-center gap-2 font-bold">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
            <Leaf className="h-5 w-5" />
          </span>
          NutriMatch
        </div>
        <nav className="flex gap-2 overflow-x-auto">
          {navItems.slice(0, 3).map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex h-10 shrink-0 items-center gap-2 rounded-lg px-3 text-sm font-semibold",
                  active
                    ? "bg-brand-50 text-brand-700"
                    : "bg-slate-100 text-slate-600",
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
