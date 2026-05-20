import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const connectionString = process.env.DIRECT_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Mulai seeding...");

  // ===========================================================================
  // 1. ALLERGENS
  // ===========================================================================
  console.log("📋 Seeding allergens...");

  const allergens = await Promise.all([
    prisma.allergen.upsert({
      where: { slug: "seafood" },
      update: {},
      create: { name: "Seafood", slug: "seafood" },
    }),
    prisma.allergen.upsert({
      where: { slug: "kacang" },
      update: {},
      create: { name: "Kacang", slug: "kacang" },
    }),
    prisma.allergen.upsert({
      where: { slug: "gluten" },
      update: {},
      create: { name: "Gluten", slug: "gluten" },
    }),
    prisma.allergen.upsert({
      where: { slug: "dairy" },
      update: {},
      create: { name: "Dairy (Susu)", slug: "dairy" },
    }),
    prisma.allergen.upsert({
      where: { slug: "telur" },
      update: {},
      create: { name: "Telur", slug: "telur" },
    }),
    prisma.allergen.upsert({
      where: { slug: "kedelai" },
      update: {},
      create: { name: "Kedelai", slug: "kedelai" },
    }),
  ]);

  // Map slug -> id untuk relasi food_allergens
  const allergenMap = allergens.reduce((acc, a) => {
    acc[a.slug] = a.id;
    return acc;
  }, {} as Record<string, string>);

  console.log(`✅ ${allergens.length} allergens selesai`);

  // ===========================================================================
  // 2. FOODS
  // Nutrisi per 100 gram
  // ===========================================================================
  console.log("🍽️  Seeding foods...");

  const foodsData = [
    // --- KARBOHIDRAT ---
    {
      name: "Nasi Putih",
      category: "Karbohidrat",
      caloriesPer100g: 130,
      proteinPer100g: 2.7,
      carbsPer100g: 28.2,
      fatPer100g: 0.3,
      fiberPer100g: 0.3,
      allergens: [] as string[],
    },
    {
      name: "Nasi Merah",
      category: "Karbohidrat",
      caloriesPer100g: 111,
      proteinPer100g: 2.6,
      carbsPer100g: 23.0,
      fatPer100g: 0.9,
      fiberPer100g: 1.8,
      allergens: [],
    },
    {
      name: "Nasi Goreng",
      category: "Karbohidrat",
      caloriesPer100g: 173,
      proteinPer100g: 4.0,
      carbsPer100g: 26.0,
      fatPer100g: 6.0,
      fiberPer100g: 0.5,
      allergens: ["telur", "kedelai"],
    },
    {
      name: "Mie Goreng",
      category: "Karbohidrat",
      caloriesPer100g: 337,
      proteinPer100g: 8.0,
      carbsPer100g: 49.0,
      fatPer100g: 12.0,
      fiberPer100g: 2.0,
      allergens: ["gluten", "telur", "kedelai"],
    },
    {
      name: "Mie Rebus",
      category: "Karbohidrat",
      caloriesPer100g: 138,
      proteinPer100g: 4.5,
      carbsPer100g: 25.0,
      fatPer100g: 2.0,
      fiberPer100g: 1.0,
      allergens: ["gluten", "telur"],
    },
    {
      name: "Roti Tawar",
      category: "Karbohidrat",
      caloriesPer100g: 265,
      proteinPer100g: 9.0,
      carbsPer100g: 49.0,
      fatPer100g: 3.2,
      fiberPer100g: 2.7,
      allergens: ["gluten", "dairy", "telur"],
    },
    {
      name: "Kentang Rebus",
      category: "Karbohidrat",
      caloriesPer100g: 87,
      proteinPer100g: 1.9,
      carbsPer100g: 20.1,
      fatPer100g: 0.1,
      fiberPer100g: 1.8,
      allergens: [],
    },
    {
      name: "Ubi Jalar",
      category: "Karbohidrat",
      caloriesPer100g: 86,
      proteinPer100g: 1.6,
      carbsPer100g: 20.1,
      fatPer100g: 0.1,
      fiberPer100g: 3.0,
      allergens: [],
    },
    {
      name: "Oatmeal",
      category: "Karbohidrat",
      caloriesPer100g: 389,
      proteinPer100g: 17.0,
      carbsPer100g: 66.0,
      fatPer100g: 7.0,
      fiberPer100g: 10.6,
      allergens: ["gluten"],
    },

    // --- PROTEIN HEWANI ---
    {
      name: "Ayam Goreng",
      category: "Protein",
      caloriesPer100g: 260,
      proteinPer100g: 27.0,
      carbsPer100g: 5.0,
      fatPer100g: 15.0,
      fiberPer100g: 0.0,
      allergens: ["gluten"],
    },
    {
      name: "Ayam Rebus",
      category: "Protein",
      caloriesPer100g: 215,
      proteinPer100g: 29.0,
      carbsPer100g: 0.0,
      fatPer100g: 11.0,
      fiberPer100g: 0.0,
      allergens: [],
    },
    {
      name: "Daging Sapi Goreng",
      category: "Protein",
      caloriesPer100g: 271,
      proteinPer100g: 26.0,
      carbsPer100g: 0.0,
      fatPer100g: 18.0,
      fiberPer100g: 0.0,
      allergens: [],
    },
    {
      name: "Ikan Goreng",
      category: "Protein",
      caloriesPer100g: 196,
      proteinPer100g: 20.0,
      carbsPer100g: 5.0,
      fatPer100g: 11.0,
      fiberPer100g: 0.0,
      allergens: ["seafood", "gluten"],
    },
    {
      name: "Ikan Bakar",
      category: "Protein",
      caloriesPer100g: 162,
      proteinPer100g: 23.0,
      carbsPer100g: 2.0,
      fatPer100g: 7.0,
      fiberPer100g: 0.0,
      allergens: ["seafood"],
    },
    {
      name: "Ikan Tongkol",
      category: "Protein",
      caloriesPer100g: 132,
      proteinPer100g: 26.0,
      carbsPer100g: 0.0,
      fatPer100g: 3.0,
      fiberPer100g: 0.0,
      allergens: ["seafood"],
    },
    {
      name: "Udang Goreng",
      category: "Protein",
      caloriesPer100g: 192,
      proteinPer100g: 18.0,
      carbsPer100g: 8.0,
      fatPer100g: 10.0,
      fiberPer100g: 0.0,
      allergens: ["seafood", "gluten"],
    },
    {
      name: "Telur Rebus",
      category: "Protein",
      caloriesPer100g: 155,
      proteinPer100g: 13.0,
      carbsPer100g: 1.1,
      fatPer100g: 11.0,
      fiberPer100g: 0.0,
      allergens: ["telur"],
    },
    {
      name: "Telur Dadar",
      category: "Protein",
      caloriesPer100g: 185,
      proteinPer100g: 12.0,
      carbsPer100g: 1.5,
      fatPer100g: 15.0,
      fiberPer100g: 0.0,
      allergens: ["telur", "dairy"],
    },
    {
      name: "Telur Ceplok",
      category: "Protein",
      caloriesPer100g: 196,
      proteinPer100g: 13.6,
      carbsPer100g: 0.4,
      fatPer100g: 15.4,
      fiberPer100g: 0.0,
      allergens: ["telur"],
    },

    // --- PROTEIN NABATI ---
    {
      name: "Tempe Goreng",
      category: "Protein",
      caloriesPer100g: 220,
      proteinPer100g: 16.0,
      carbsPer100g: 10.0,
      fatPer100g: 13.0,
      fiberPer100g: 3.0,
      allergens: ["kedelai"],
    },
    {
      name: "Tempe Bacem",
      category: "Protein",
      caloriesPer100g: 257,
      proteinPer100g: 15.0,
      carbsPer100g: 18.0,
      fatPer100g: 13.0,
      fiberPer100g: 3.0,
      allergens: ["kedelai", "kacang"],
    },
    {
      name: "Tahu Goreng",
      category: "Protein",
      caloriesPer100g: 135,
      proteinPer100g: 10.0,
      carbsPer100g: 4.5,
      fatPer100g: 9.0,
      fiberPer100g: 0.3,
      allergens: ["kedelai"],
    },
    {
      name: "Tahu Rebus",
      category: "Protein",
      caloriesPer100g: 76,
      proteinPer100g: 8.0,
      carbsPer100g: 2.0,
      fatPer100g: 4.5,
      fiberPer100g: 0.3,
      allergens: ["kedelai"],
    },

    // --- SAYURAN ---
    {
      name: "Kangkung Tumis",
      category: "Sayuran",
      caloriesPer100g: 45,
      proteinPer100g: 2.6,
      carbsPer100g: 4.0,
      fatPer100g: 2.5,
      fiberPer100g: 2.0,
      allergens: [],
    },
    {
      name: "Bayam Rebus",
      category: "Sayuran",
      caloriesPer100g: 23,
      proteinPer100g: 2.9,
      carbsPer100g: 3.6,
      fatPer100g: 0.4,
      fiberPer100g: 2.2,
      allergens: [],
    },
    {
      name: "Brokoli Rebus",
      category: "Sayuran",
      caloriesPer100g: 35,
      proteinPer100g: 2.4,
      carbsPer100g: 7.2,
      fatPer100g: 0.4,
      fiberPer100g: 3.3,
      allergens: [],
    },
    {
      name: "Wortel Rebus",
      category: "Sayuran",
      caloriesPer100g: 35,
      proteinPer100g: 0.8,
      carbsPer100g: 8.2,
      fatPer100g: 0.2,
      fiberPer100g: 3.0,
      allergens: [],
    },
    {
      name: "Capcay",
      category: "Sayuran",
      caloriesPer100g: 65,
      proteinPer100g: 4.0,
      carbsPer100g: 7.0,
      fatPer100g: 3.0,
      fiberPer100g: 2.5,
      allergens: ["kedelai"],
    },
    {
      name: "Sayur Sop",
      category: "Sayuran",
      caloriesPer100g: 50,
      proteinPer100g: 3.0,
      carbsPer100g: 7.0,
      fatPer100g: 1.5,
      fiberPer100g: 2.0,
      allergens: [],
    },

    // --- BUAH ---
    {
      name: "Pisang",
      category: "Buah",
      caloriesPer100g: 89,
      proteinPer100g: 1.1,
      carbsPer100g: 23.0,
      fatPer100g: 0.3,
      fiberPer100g: 2.6,
      allergens: [],
    },
    {
      name: "Apel",
      category: "Buah",
      caloriesPer100g: 52,
      proteinPer100g: 0.3,
      carbsPer100g: 14.0,
      fatPer100g: 0.2,
      fiberPer100g: 2.4,
      allergens: [],
    },
    {
      name: "Pepaya",
      category: "Buah",
      caloriesPer100g: 43,
      proteinPer100g: 0.5,
      carbsPer100g: 11.0,
      fatPer100g: 0.3,
      fiberPer100g: 1.7,
      allergens: [],
    },
    {
      name: "Semangka",
      category: "Buah",
      caloriesPer100g: 30,
      proteinPer100g: 0.6,
      carbsPer100g: 7.6,
      fatPer100g: 0.2,
      fiberPer100g: 0.4,
      allergens: [],
    },
    {
      name: "Mangga",
      category: "Buah",
      caloriesPer100g: 60,
      proteinPer100g: 0.8,
      carbsPer100g: 15.0,
      fatPer100g: 0.4,
      fiberPer100g: 1.6,
      allergens: [],
    },

    // --- MINUMAN ---
    {
      name: "Susu Sapi",
      category: "Minuman",
      caloriesPer100g: 61,
      proteinPer100g: 3.2,
      carbsPer100g: 4.8,
      fatPer100g: 3.3,
      fiberPer100g: 0.0,
      allergens: ["dairy"],
    },
    {
      name: "Yogurt Plain",
      category: "Minuman",
      caloriesPer100g: 59,
      proteinPer100g: 3.5,
      carbsPer100g: 5.0,
      fatPer100g: 3.0,
      fiberPer100g: 0.0,
      allergens: ["dairy"],
    },
    {
      name: "Susu Kedelai",
      category: "Minuman",
      caloriesPer100g: 33,
      proteinPer100g: 3.3,
      carbsPer100g: 1.8,
      fatPer100g: 1.8,
      fiberPer100g: 0.3,
      allergens: ["kedelai"],
    },

    // --- MAKANAN KHAS INDONESIA ---
    {
      name: "Gado-gado",
      category: "Makanan Khas",
      caloriesPer100g: 148,
      proteinPer100g: 7.0,
      carbsPer100g: 12.0,
      fatPer100g: 8.0,
      fiberPer100g: 3.0,
      allergens: ["kacang", "kedelai", "telur"],
    },
    {
      name: "Soto Ayam",
      category: "Makanan Khas",
      caloriesPer100g: 78,
      proteinPer100g: 7.0,
      carbsPer100g: 5.0,
      fatPer100g: 3.0,
      fiberPer100g: 0.5,
      allergens: [],
    },
    {
      name: "Rendang Daging",
      category: "Makanan Khas",
      caloriesPer100g: 193,
      proteinPer100g: 18.0,
      carbsPer100g: 6.0,
      fatPer100g: 11.0,
      fiberPer100g: 1.0,
      allergens: [],
    },
    {
      name: "Pecel Lele",
      category: "Makanan Khas",
      caloriesPer100g: 210,
      proteinPer100g: 18.0,
      carbsPer100g: 8.0,
      fatPer100g: 12.0,
      fiberPer100g: 1.0,
      allergens: ["seafood", "kacang"],
    },
    {
      name: "Nasi Padang (Ayam)",
      category: "Makanan Khas",
      caloriesPer100g: 155,
      proteinPer100g: 10.0,
      carbsPer100g: 18.0,
      fatPer100g: 5.0,
      fiberPer100g: 0.5,
      allergens: [],
    },
  ];

  let foodCount = 0;
  for (const foodData of foodsData) {
    const { allergens: foodAllergenSlugs, ...foodFields } = foodData;

    const food = await prisma.food.upsert({
      where: { name: foodFields.name },
      update: {},
      create: foodFields,
    });

    for (const slug of foodAllergenSlugs) {
      const allergenId = allergenMap[slug];
      if (allergenId) {
        await prisma.foodAllergen.upsert({
          where: {
            foodId_allergenId: {
              foodId: food.id,
              allergenId: allergenId,
            },
          },
          update: {},
          create: {
            foodId: food.id,
            allergenId: allergenId,
          },
        });
      }
    }

    foodCount++;
  }

  console.log(`✅ ${foodCount} foods selesai`);
  console.log("🎉 Seeding selesai!");
}

main()
  .catch((e) => {
    console.error("❌ Error saat seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });