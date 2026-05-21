import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// =============================================================================
// GET /api/allergens
// Ambil semua allergen untuk ditampilkan sebagai pilihan di form onboarding
// Endpoint ini public (tidak perlu login) karena hanya baca data statis
// =============================================================================

export async function GET() {
  try {
    const allergens = await prisma.allergen.findMany({
      orderBy: { name: "asc" },
    });

    return NextResponse.json({ allergens });
  } catch (error) {
    console.error("GET /api/allergens error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}