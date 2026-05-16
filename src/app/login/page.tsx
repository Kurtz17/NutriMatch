import Link from "next/link";
import { LogIn, Mail, LockKeyhole } from "lucide-react";
import { AuthAside } from "@/components/auth/AuthAside";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

export default function LoginPage() {
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

              <form className="space-y-4">
                <Input
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  icon={<Mail className="h-4 w-4" />}
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder="Your password"
                  icon={<LockKeyhole className="h-4 w-4" />}
                />
                <div className="text-right">
                  <Link
                    href="/login"
                    className="text-sm font-semibold text-brand-700"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <LogIn className="h-5 w-5" />
                  Login
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
          description="Use the demo data to present the user journey while the backend and recommendation model are still being prepared."
          className="min-h-[calc(100vh-64px)] rounded-none"
        />
      </main>
    </div>
  );
}
