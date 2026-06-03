export type AllergyKey =
  | "gluten"
  | "dairy"
  | "nuts"
  | "peanut"
  | "seafood"
  | "egg"
  | "soy"
  | "celery";

export type MealPrefKey = "breakfast_prefs" | "lunch_prefs" | "dinner_prefs";

export type RecommendationPayload = {
  target_macros: {
    calories: number;
    protein_g: number;
    fat_g: number;
    carb_g: number;
  };
  allergies: Record<AllergyKey, 0 | 1>;
  breakfast_prefs: {
    food_category: string[];
    main_ingredients: string[];
  };
  lunch_prefs: {
    food_category: string[];
    main_ingredients: string[];
  };
  dinner_prefs: {
    food_category: string[];
    main_ingredients: string[];
  };
  user_text: string;
  start_date: string;
  days: number;
  variety_penalty: number;
  halal_only: boolean;
};

export const RECOMMENDATION_PAYLOAD_STORAGE_KEY =
  "nutrimatch.recommendationPayload";

export const allergyOptions: Array<{ key: AllergyKey; label: string }> = [
  { key: "gluten", label: "Gluten" },
  { key: "dairy", label: "Dairy" },
  { key: "nuts", label: "Nuts" },
  { key: "peanut", label: "Peanut" },
  { key: "seafood", label: "Seafood" },
  { key: "egg", label: "Egg" },
  { key: "soy", label: "Soy" },
  { key: "celery", label: "Celery" },
];

export const mealPrefOptions: Array<{ key: MealPrefKey; label: string }> = [
  { key: "breakfast_prefs", label: "Breakfast" },
  { key: "lunch_prefs", label: "Lunch" },
  { key: "dinner_prefs", label: "Dinner" },
];

export const foodCategoryOptions = [
  { value: "berkuah", label: "Berkuah" },
  { value: "tumis", label: "Tumis" },
  { value: "gorengan", label: "Gorengan" },
  { value: "lauk_hewani", label: "Lauk hewani" },
  { value: "lauk_nabati", label: "Lauk nabati" },
  { value: "karbohidrat_pokok", label: "Karbohidrat pokok" },
  { value: "sayuran", label: "Sayuran" },
  { value: "buah", label: "Buah" },
  { value: "snack_dessert", label: "Snack / dessert" },
  { value: "minuman", label: "Minuman" },
];

export const mainIngredientOptions = [
  { value: "ayam", label: "Ayam" },
  { value: "ikan", label: "Ikan" },
  { value: "sapi", label: "Sapi" },
  { value: "telur", label: "Telur" },
  { value: "beras", label: "Beras" },
  { value: "gandum", label: "Gandum" },
  { value: "umbi", label: "Umbi" },
  { value: "sayuran", label: "Sayuran" },
  { value: "kedelai", label: "Kedelai" },
  { value: "kacang", label: "Kacang" },
];

export function localIsoDate() {
  const date = new Date();
  const offsetDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return offsetDate.toISOString().split("T")[0];
}

export function macroDefaults(calories: number) {
  const safeCalories = Math.max(Math.round(calories || 1800), 1);

  return {
    calories: safeCalories,
    protein_g: Math.round((safeCalories * 0.25) / 4),
    fat_g: Math.round((safeCalories * 0.3) / 9),
    carb_g: Math.round((safeCalories * 0.45) / 4),
  };
}

export function emptyAllergyFlags(): Record<AllergyKey, 0 | 1> {
  return {
    gluten: 0,
    dairy: 0,
    nuts: 0,
    peanut: 0,
    seafood: 0,
    egg: 0,
    soy: 0,
    celery: 0,
  };
}

export function splitTags(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function joinTags(values: string[]) {
  return values.join(", ");
}

export function allergyFlagsFromText(values: string[]) {
  const flags = emptyAllergyFlags();

  for (const value of values) {
    const text = value.toLowerCase();

    if (text.includes("gluten")) flags.gluten = 1;
    if (text.includes("dairy") || text.includes("susu")) flags.dairy = 1;
    if (text.includes("kacang") || text.includes("nut")) {
      flags.nuts = 1;
      flags.peanut = 1;
    }
    if (text.includes("peanut")) flags.peanut = 1;
    if (
      text.includes("seafood") ||
      text.includes("ikan") ||
      text.includes("udang")
    ) {
      flags.seafood = 1;
    }
    if (text.includes("telur") || text.includes("egg")) flags.egg = 1;
    if (text.includes("kedelai") || text.includes("soy")) flags.soy = 1;
    if (text.includes("celery") || text.includes("seledri")) flags.celery = 1;
  }

  return flags;
}

export function createRecommendationPayload({
  targetCalories = 1800,
  allergyTexts = [],
  current,
}: {
  targetCalories?: number;
  allergyTexts?: string[];
  current?: RecommendationPayload | null;
} = {}): RecommendationPayload {
  return {
    target_macros: macroDefaults(targetCalories),
    allergies: allergyFlagsFromText(allergyTexts),
    breakfast_prefs: current?.breakfast_prefs ?? {
      food_category: [],
      main_ingredients: [],
    },
    lunch_prefs: current?.lunch_prefs ?? {
      food_category: [],
      main_ingredients: [],
    },
    dinner_prefs: current?.dinner_prefs ?? {
      food_category: [],
      main_ingredients: [],
    },
    user_text:
      current?.user_text ??
      "Saya mau makan yang berkuah dan ada ayamnya di siang hari",
    start_date: localIsoDate(),
    days: current?.days ?? 7,
    variety_penalty: current?.variety_penalty ?? 0.15,
    halal_only: current?.halal_only ?? false,
  };
}

function toNumber(value: unknown, fallback: number) {
  const parsed = typeof value === "number" ? value : Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function normalizeStringList(value: unknown) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }

  if (typeof value === "string") {
    return splitTags(value);
  }

  return [];
}

function filterDatasetValues(values: string[], options: Array<{ value: string }>) {
  const allowedValues = new Set(options.map((option) => option.value));
  return values.filter((value) => allowedValues.has(value));
}

export function parseStoredRecommendationPayload(raw: string | null) {
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as Partial<RecommendationPayload>;
    const defaults = createRecommendationPayload();
    const allergies = emptyAllergyFlags();

    for (const option of allergyOptions) {
      allergies[option.key] =
        parsed.allergies?.[option.key] === 1 ? 1 : defaults.allergies[option.key];
    }

    return {
      target_macros: {
        calories: Math.max(
          Math.round(toNumber(parsed.target_macros?.calories, 1800)),
          1,
        ),
        protein_g: Math.max(
          Math.round(toNumber(parsed.target_macros?.protein_g, 100)),
          1,
        ),
        fat_g: Math.max(Math.round(toNumber(parsed.target_macros?.fat_g, 50)), 1),
        carb_g: Math.max(
          Math.round(toNumber(parsed.target_macros?.carb_g, 200)),
          1,
        ),
      },
      allergies,
      breakfast_prefs: {
        food_category: filterDatasetValues(
          normalizeStringList(parsed.breakfast_prefs?.food_category),
          foodCategoryOptions,
        ),
        main_ingredients: filterDatasetValues(
          normalizeStringList(parsed.breakfast_prefs?.main_ingredients),
          mainIngredientOptions,
        ),
      },
      lunch_prefs: {
        food_category: filterDatasetValues(
          normalizeStringList(parsed.lunch_prefs?.food_category),
          foodCategoryOptions,
        ),
        main_ingredients: filterDatasetValues(
          normalizeStringList(parsed.lunch_prefs?.main_ingredients),
          mainIngredientOptions,
        ),
      },
      dinner_prefs: {
        food_category: filterDatasetValues(
          normalizeStringList(parsed.dinner_prefs?.food_category),
          foodCategoryOptions,
        ),
        main_ingredients: filterDatasetValues(
          normalizeStringList(parsed.dinner_prefs?.main_ingredients),
          mainIngredientOptions,
        ),
      },
      user_text: parsed.user_text || defaults.user_text,
      start_date:
        typeof parsed.start_date === "string" && parsed.start_date
          ? parsed.start_date
          : defaults.start_date,
      days: Math.min(Math.max(Math.round(toNumber(parsed.days, 7)), 1), 31),
      variety_penalty: Math.min(
        Math.max(toNumber(parsed.variety_penalty, 0.15), 0),
        1,
      ),
      halal_only:
        typeof parsed.halal_only === "boolean" ? parsed.halal_only : false,
    } satisfies RecommendationPayload;
  } catch {
    return null;
  }
}
