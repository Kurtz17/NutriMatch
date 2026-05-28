import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { email, password, name } = await request.json();
    const normalizedEmail = String(email ?? "").trim().toLowerCase();
    const normalizedName = String(name ?? "").trim();

    // --- Validasi input ---
    if (!normalizedEmail || !password || !normalizedName) {
      return NextResponse.json(
        { error: "Email, password, dan nama wajib diisi" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password minimal 6 karakter" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
      select: { id: true },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email sudah terdaftar. Silakan login." },
        { status: 409 }
      );
    }

    const supabase = await createClient();

    // --- Step 1: Daftarkan user ke Supabase Auth ---
    const { data: authData, error: authError } =
      await supabase.auth.signUp({
        email: normalizedEmail,
        password,
        options: {
          data: { name: normalizedName },
        },
      });

    if (authError) {
      return NextResponse.json(
        { error: authError.message },
        { status: 400 }
      );
    }

    if (!authData.user) {
      return NextResponse.json(
        { error: "Gagal membuat akun" },
        { status: 500 }
      );
    }

    // --- Step 2: Simpan user ke tabel users di Prisma ---
    const user = await prisma.user.create({
      data: {
        id: authData.user.id,
        email: authData.user.email ?? normalizedEmail,
        name: normalizedName,
      },
    });

    return NextResponse.json(
      {
        message: authData.session
          ? "Registrasi berhasil"
          : "Registrasi berhasil. Silakan cek email untuk verifikasi.",
        requiresEmailConfirmation: !authData.session,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
