import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";

// =============================================================================
// GET /api/auth/callback
//
// Menerima parameter ?mode=login atau ?mode=register dari redirectTo
//
// mode=login   → cek apakah user sudah ada di Prisma. Kalau belum ada
//               (user baru) → tolak dan redirect ke /login dengan pesan error.
//               Kalau sudah ada → lanjutkan login biasa.
//
// mode=register → izinkan user baru, upsert ke Prisma, arahkan ke onboarding.
// =============================================================================

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const error = searchParams.get("error");
  const mode  = searchParams.get("mode") ?? "register";

  if (error) {
    console.error("OAuth error:", error);
    return NextResponse.redirect(
      `${origin}/login?error=google_auth_failed`
    );
  }

  if (!code) {
    return NextResponse.redirect(`${origin}/login?error=missing_code`);
  }

  const supabase = await createClient();

  const { data, error: exchangeError } =
    await supabase.auth.exchangeCodeForSession(code);

  if (exchangeError || !data.user) {
    console.error("Exchange code error:", exchangeError);
    return NextResponse.redirect(
      `${origin}/login?error=session_exchange_failed`
    );
  }

  const { user } = data;

   const existingUser = await prisma.user.findUnique({
    where: { id: user.id },
    select: { id: true },
  });

  if (mode === "login") {
    if (!existingUser) {
      await supabase.auth.signOut();
 
      return NextResponse.redirect(
        `${origin}/login?error=account_not_found`
      );
    }
    const name =
      (user.user_metadata?.full_name as string | undefined) ??
      (user.user_metadata?.name as string | undefined);
 
    await prisma.user.update({
      where: { id: user.id },
      data: {
        email: user.email ?? existingUser.id,
        ...(name ? { name } : {}),
      },
    });
 
    return NextResponse.redirect(`${origin}/dashboard`);
  }

  const name =
    (user.user_metadata?.full_name as string | undefined) ??
    (user.user_metadata?.name as string | undefined) ??
    (user.email?.split("@")[0] ?? "User");
 
  await prisma.user.upsert({
    where: { id: user.id },
    update: {
      email: user.email ?? "",
      ...(name ? { name } : {}),
    },
    create: {
      id: user.id,
      email: user.email ?? "",
      name,
    },
  });
 
  const existingProfile = await prisma.userProfile.findUnique({
    where: { userId: user.id },
    select: { id: true },
  });
 
  const redirectTo = existingProfile
    ? `${origin}/dashboard`
    : `${origin}/onboarding`;
 
  return NextResponse.redirect(redirectTo);
}