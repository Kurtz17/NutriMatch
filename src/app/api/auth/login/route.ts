import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    const normalizedEmail = String(email ?? "").trim().toLowerCase();

    // --- Validasi input ---
    if (!normalizedEmail || !password) {
      return NextResponse.json(
        { error: "Email dan password wajib diisi" },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    // --- Login via Supabase Auth ---
    const { data, error } = await supabase.auth.signInWithPassword({
      email: normalizedEmail,
      password,
    });

    if (error) {
      return NextResponse.json(
        { error: "Email atau password salah" },
        { status: 401 }
      );
    }

    const name = data.user.user_metadata?.name as string | undefined;
    const userEmail = data.user.email ?? normalizedEmail;

    await prisma.user.upsert({
      where: { id: data.user.id },
      update: {
        email: userEmail,
        ...(name ? { name } : {}),
      },
      create: {
        id: data.user.id,
        email: userEmail,
        name,
      },
    });

    return NextResponse.json({
      message: "Login berhasil",
      user: {
        id: data.user.id,
        email: userEmail,
        name,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
