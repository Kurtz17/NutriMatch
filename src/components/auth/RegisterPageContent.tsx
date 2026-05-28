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

export function RegisterPageContent() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      setError("Tidak bisa menghubungi server. Coba jalankan ulang aplikasinya.");
    } finally {
      setIsSubmitting(false);
    }
  }

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
