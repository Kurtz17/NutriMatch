"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogIn, Mail, LockKeyhole } from "lucide-react";
import { AuthAside } from "@/components/auth/AuthAside";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

export function LoginPageContent() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? "Login gagal. Silakan coba lagi.");
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch {
      setError("Tidak bisa menghubungi server. Coba jalankan ulang aplikasinya.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="grid min-h-[calc(100vh-64px)] lg:grid-cols-2">
        <section className="flex items-center justify-center px-4 py-10">
          <Card className="w-full max-w-md">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-8">
                <p className="text-sm font-semibold text-brand-700">
                  Welcome back
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-normal text-ink">
                  Login to NutriMatch
                </h1>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Continue to your dashboard and weekly allergy-safe meal plan.
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="email"
                  required
                  icon={<Mail className="h-4 w-4" />}
                />
                <Input
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="current-password"
                  required
                  icon={<LockKeyhole className="h-4 w-4" />}
                />
                {error ? (
                  <p className="rounded-lg border border-red-100 bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
                    {error}
                  </p>
                ) : null}
                <div className="text-right">
                  <Link
                    href="/login"
                    className="text-sm font-semibold text-brand-700"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  <LogIn className="h-5 w-5" />
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>
              </form>

              <p className="mt-6 text-center text-sm text-muted">
                New to NutriMatch?{" "}
                <Link href="/register" className="font-bold text-brand-700">
                  Create account
                </Link>
              </p>
            </CardContent>
          </Card>
        </section>
        <AuthAside
          title="Your dashboard keeps calories, macros, and allergy safety in one calm view."
          description="Sign in to manage your saved profile, allergy filters, and generated weekly meal plan."
          className="min-h-[calc(100vh-64px)] rounded-none"
        />
      </main>
    </div>
  );
}
