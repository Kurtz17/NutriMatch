import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const error = searchParams.get("error");
  const mode = searchParams.get("mode") ?? "register";

  if (error) {
    console.error("OAuth error:", error);
    return NextResponse.redirect(`${origin}/login?error=google_auth_failed`);
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
      `${origin}/login?error=session_exchange_failed`,
    );
  }

  const { user } = data;
  const userEmail = user.email ?? "";

  const name =
    (user.user_metadata?.full_name as string | undefined) ??
    (user.user_metadata?.name as string | undefined) ??
    (userEmail.split("@")[0] || "User");

  const photoUrl = user.user_metadata?.avatar_url as string | undefined;

  const existingUserByEmail = await prisma.user.findUnique({
    where: { email: userEmail },
    select: { id: true },
  });

  if (existingUserByEmail && existingUserByEmail.id !== user.id) {
    await prisma.user.update({
      where: { email: userEmail },
      data: { id: user.id },
    });
  }

  const existingUser =
    existingUserByEmail ||
    (await prisma.user.findUnique({
      where: { id: user.id },
      select: { id: true },
    }));

  if (mode === "login") {
    if (!existingUser) {
      await supabase.auth.signOut();
      return NextResponse.redirect(`${origin}/login?error=account_not_found`);
    }

    await prisma.user.update({
      where: { id: user.id },
      data: {
        email: userEmail,
        ...(name ? { name } : {}),
        ...(photoUrl ? { photoUrl } : {}),
      },
    });

    return NextResponse.redirect(`${origin}/dashboard`);
  }

  await prisma.user.upsert({
    where: { id: user.id },
    update: {
      email: userEmail,
      ...(name ? { name } : {}),
      ...(photoUrl ? { photoUrl } : {}),
    },
    create: {
      id: user.id,
      email: userEmail,
      name,
      photoUrl,
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
