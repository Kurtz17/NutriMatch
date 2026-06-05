"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, LockKeyhole, UserPlus, UserRound } from "lucide-react";
import { AuthAside } from "@/components/auth/AuthAside";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { createClient } from "@/lib/supabase/client";

function GoogleIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

export function RegisterPageContent() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Konfirmasi password tidak sama.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? "Registrasi gagal. Silakan coba lagi.");
        return;
      }

      if (data.requiresEmailConfirmation) {
        setSuccess(data.message ?? "Registrasi berhasil. Silakan cek email.");
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch {
      setError(
        "Tidak bisa menghubungi server. Coba jalankan ulang aplikasinya.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleGoogleSignUp() {
    setError("");
    setIsGoogleLoading(true);

    const supabase = createClient();

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/api/auth/callback?mode=register`,
        queryParams: {
          prompt: "select_account",
        },
      },
    });

    if (error) {
      setError("Gagal melanjutkan dengan Google. Coba lagi.");
      setIsGoogleLoading(false);
    }
  }

  const isAnyLoading = isSubmitting || isGoogleLoading;

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="grid min-h-[calc(100vh-64px)] gap-6 p-4 lg:grid-cols-[1fr_0.95fr]">
        <section className="flex items-center justify-center py-10">
          <Card className="w-full max-w-md">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-8">
                <p className="text-sm font-semibold text-brand-700">
                  Create account
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-normal text-ink">
                  Start your nutrition profile
                </h1>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Register to save your profile and generate allergy-safe
                  recommendations.
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input
                  label="Name"
                  name="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  autoComplete="name"
                  required
                  icon={<UserRound className="h-4 w-4" />}
                />
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
                  placeholder="Create a password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="new-password"
                  minLength={6}
                  required
                  icon={<LockKeyhole className="h-4 w-4" />}
                />
                <Input
                  label="Confirm password"
                  name="confirmPassword"
                  type="password"
                  placeholder="Repeat your password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  autoComplete="new-password"
                  minLength={6}
                  required
                  icon={<LockKeyhole className="h-4 w-4" />}
                />
                {error ? (
                  <p className="rounded-lg border border-red-100 bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
                    {error}
                  </p>
                ) : null}
                {success ? (
                  <p className="rounded-lg border border-brand-100 bg-brand-50 px-3 py-2 text-sm font-medium text-brand-700">
                    {success}
                  </p>
                ) : null}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  <UserPlus className="h-5 w-5" />
                  {isSubmitting ? "Registering..." : "Register"}
                </Button>
              </form>

              <div className="my-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-slate-200" />
                <span className="text-xs font-semibold text-slate-400">OR</span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <Button
                type="button"
                variant="outline"
                size="lg"
                className="w-full"
                onClick={handleGoogleSignUp}
                disabled={isAnyLoading}
              >
                <GoogleIcon />
                {isGoogleLoading
                  ? "Mengarahkan ke Google..."
                  : "Continue with Google"}
              </Button>

              <p className="mt-6 text-center text-sm text-muted">
                Already have an account?{" "}
                <Link href="/login" className="font-bold text-brand-700">
                  Login
                </Link>
              </p>
            </CardContent>
          </Card>
        </section>
        <AuthAside
          title="Healthy planning that respects what your body cannot eat."
          description="NutriMatch turns health profile inputs into clean nutrition summaries, safer meal plans, and clear recommendation context."
        />
      </main>
    </div>
  );
}
