import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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
      { status: 500 },
    );
  }
}
