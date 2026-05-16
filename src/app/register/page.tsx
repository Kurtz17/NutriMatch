import Link from "next/link";
import { Mail, LockKeyhole, UserPlus, UserRound } from "lucide-react";
import { AuthAside } from "@/components/auth/AuthAside";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

export default function RegisterPage() {
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
                  Register to generate allergy-safe recommendations with mocked
                  frontend data.
                </p>
              </div>

              <form className="space-y-4">
                <Input
                  label="Name"
                  placeholder="Your name"
                  icon={<UserRound className="h-4 w-4" />}
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  icon={<Mail className="h-4 w-4" />}
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder="Create a password"
                  icon={<LockKeyhole className="h-4 w-4" />}
                />
                <Input
                  label="Confirm password"
                  type="password"
                  placeholder="Repeat your password"
                  icon={<LockKeyhole className="h-4 w-4" />}
                />
                <Button type="submit" size="lg" className="w-full">
                  <UserPlus className="h-5 w-5" />
                  Register
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
