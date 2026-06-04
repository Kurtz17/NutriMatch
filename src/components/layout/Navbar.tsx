"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Leaf, LogOut, UserRound } from "lucide-react";
import { buttonStyles } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type CurrentUser = {
  id: string;
  email: string;
  name: string | null;
};

type NavItem = {
  href: string;
  label: string;
  publicOnly?: boolean;
  authenticatedOnly?: boolean;
};

const navItems: NavItem[] = [
  { href: "/meal-plan", label: "Meal Plan" },
  { href: "/dashboard", label: "Dashboard" },
];

export function Navbar({ transparent = false }: { transparent?: boolean }) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    let active = true;

    async function loadUser() {
      try {
        const response = await fetch("/api/auth/me", { cache: "no-store" });

        if (!active) return;

        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch {
        if (active) setUser(null);
      } finally {
        if (active) setIsLoadingUser(false);
      }
    }

    loadUser();

    return () => {
      active = false;
    };
  }, []);

  const visibleNavItems = useMemo(
    () =>
      navItems.filter((item) => {
        if (item.authenticatedOnly && !user) return false;
        if (item.publicOnly && user) return false;
        return true;
      }),
    [user],
  );

  const accountLabel = user?.name?.trim() || user?.email || "Account";
  const accountInitial =
    accountLabel
      .split(/\s+/)
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "NM";
  const linkClass = transparent
    ? "text-emerald-50/85 hover:text-white"
    : "text-slate-600 hover:text-ink";

  async function handleLogout() {
    setIsLoggingOut(true);

    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setUser(null);
      router.push("/login");
      router.refresh();
    } finally {
      setIsLoggingOut(false);
    }
  }

  return (
    <header
      className={cn(
        "z-30 w-full border-b",
        transparent
          ? "absolute top-0 border-emerald-300/20 bg-emerald-950/75 shadow-[0_18px_45px_-32px_rgba(15,23,42,0.95)] backdrop-blur-md"
          : "sticky top-0 border-slate-100 bg-white/95 backdrop-blur",
      )}
    >
      <div className="app-container flex min-h-16 flex-wrap items-center justify-between gap-3 py-2">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <img 
              src="/images/icon.png" 
              alt="NutriMatch Icon" 
              className="h-9 w-9 object-contain drop-shadow-sm" 
            />
            <span
              className={cn("text-xl tracking-tight", transparent ? "text-white" : "text-slate-900")}
            >
              NutriMatch
            </span>
          </Link>
        </div>

        <nav className="order-3 flex w-full gap-2 overflow-x-auto text-sm font-semibold md:order-2 md:w-auto md:items-center md:gap-7">
          {visibleNavItems.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                className={cn(
                  "shrink-0 rounded-lg px-2.5 py-2 transition md:px-0 md:py-0",
                  linkClass,
                  active &&
                  (transparent
                    ? "bg-white/10 text-white md:bg-transparent"
                    : "bg-brand-50 text-brand-700 md:bg-transparent"),
                )}
                href={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="order-2 flex items-center gap-2 md:order-3">
          {isLoadingUser ? null : user ? (
            <div className="flex items-center gap-2">
              <Link
                href="/profile"
                className={cn(
                  "flex min-w-0 items-center gap-2 rounded-lg border px-2 py-1.5 text-left transition",
                  transparent
                    ? "border-white/20 bg-white/10 text-white hover:bg-white/15"
                    : "border-slate-200 bg-white text-ink hover:border-brand-200 hover:bg-brand-50",
                )}
              >
                <span
                  className={cn(
                    "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                    transparent
                      ? "bg-white text-brand-700"
                      : "bg-brand-500 text-white",
                  )}
                >
                  {accountInitial}
                </span>
                <span className="hidden min-w-0 leading-tight sm:block">
                  <span className="block max-w-32 truncate text-sm font-bold">
                    {accountLabel}
                  </span>
                  <span
                    className={cn(
                      "block max-w-32 truncate text-xs",
                      transparent ? "text-white/70" : "text-muted",
                    )}
                  >
                    {user.email}
                  </span>
                </span>
              </Link>
              <button
                type="button"
                className={cn(
                  buttonStyles({
                    variant: transparent ? "ghost" : "outline",
                    size: "icon",
                  }),
                  transparent && "text-white hover:bg-white/10 hover:text-white",
                )}
                onClick={handleLogout}
                disabled={isLoggingOut}
                aria-label="Sign out"
                title="Sign out"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}

export function AccountPlaceholder() {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-white">
      <UserRound className="h-4 w-4" />
    </span>
  );
}
