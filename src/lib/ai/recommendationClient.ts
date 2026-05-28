import { ActivityLevel, HealthGoal, type Allergen, type UserAllergy, type UserProfile } from "@prisma/client";

export type RecommendRequest = {
  target_macros: {
    calories: number;
    protein_g: number;
    fat_g: number;
    carb_g: number;
  };
  allergies: {
    gluten: 0 | 1;
    dairy: 0 | 1;
    nuts: 0 | 1;
    peanut: 0 | 1;
    seafood: 0 | 1;
    egg: 0 | 1;
    soy: 0 | 1;
    celery: 0 | 1;
  };
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
};

export type RecommendResponse = {
  daily_plan: {
    meal_name: string;
    target_calories: number;
    recommendations: {
      food_name: string;
      calories_100g: number;
      ideal_grams: number;
      ideal_calories: number;
      match_score: number;
    }[];
  }[];
  narrative_summary: string;
};

export type RecommendValidationError = {
  detail: {
    loc: (string | number)[];
    msg: string;
    type: string;
    input: string;
    ctx: Record<string, unknown>;
  }[];
};

export type NormalizedMealRecommendationResult = {
  source: "ai" | "fallback";
  dailyPlan: {
    mealName: string;
    targetCalories: number;
    recommendations: {
      foodName: string;
      calories100g?: number;
      idealGrams?: number;
      idealCalories?: number;
      matchScore?: number;
    }[];
  }[];
  narrativeSummary?: string;
  errorMessage?: string;
};

export class AiRecommendationError extends Error {
  constructor(
    message: string,
    public readonly status?: number,
    public readonly validationMessages: string[] = [],
  ) {
    super(message);
    this.name = "AiRecommendationError";
  }
}

type ProfileWithAllergies = UserProfile & {
  allergies: Array<UserAllergy & { allergen: Allergen }>;
};

const DEFAULT_AI_API_URL =
  "https://nutrimatch-ai.dzikribassyril.me/api/recommend";
const DEFAULT_REQUEST_TIMEOUT_MS = 45000;

const emptyPrefs = {
  food_category: [] as string[],
  main_ingredients: [] as string[],
};

export function isMealFallbackEnabled() {
  return process.env.ENABLE_MEAL_FALLBACK === "true";
}

function getRequestTimeoutMs() {
  const configuredTimeout = Number(process.env.NUTRIMATCH_AI_TIMEOUT_MS);

  return Number.isFinite(configuredTimeout) && configuredTimeout > 0
    ? configuredTimeout
    : DEFAULT_REQUEST_TIMEOUT_MS;
}

export function buildTargetMacros(profile: Pick<UserProfile, "targetCalories">) {
  const calories = Math.round(profile.targetCalories ?? 1800);

  return {
    calories,
    protein_g: Math.round((calories * 0.25) / 4),
    fat_g: Math.round((calories * 0.3) / 9),
    carb_g: Math.round((calories * 0.45) / 4),
  };
}

export function buildAllergyFlags(allergies: ProfileWithAllergies["allergies"]) {
  const flags: RecommendRequest["allergies"] = {
    gluten: 0,
    dairy: 0,
    nuts: 0,
    peanut: 0,
    seafood: 0,
    egg: 0,
    soy: 0,
    celery: 0,
  };

  for (const userAllergy of allergies) {
    const slug = userAllergy.allergen.slug.toLowerCase();
    const name = userAllergy.allergen.name.toLowerCase();
    const text = `${slug} ${name}`;

    if (text.includes("gluten")) flags.gluten = 1;
    if (text.includes("dairy") || text.includes("susu")) flags.dairy = 1;
    if (text.includes("kacang") || text.includes("nut")) {
      flags.nuts = 1;
      flags.peanut = 1;
    }
    if (text.includes("seafood") || text.includes("ikan") || text.includes("udang")) {
      flags.seafood = 1;
    }
    if (text.includes("telur") || text.includes("egg")) flags.egg = 1;
    if (text.includes("kedelai") || text.includes("soy")) flags.soy = 1;
    if (text.includes("celery") || text.includes("seledri")) flags.celery = 1;
  }

  return flags;
}

export function buildUserText(profile: Pick<UserProfile, "activityLevel" | "healthGoal">) {
  const goalText: Record<HealthGoal, string> = {
    LOSE_WEIGHT: "weight loss",
    MAINTAIN_WEIGHT: "weight maintenance",
    GAIN_WEIGHT: "healthy weight gain",
  };
  const activityText: Record<ActivityLevel, string> = {
    SEDENTARY: "sedentary activity",
    LIGHTLY_ACTIVE: "light activity",
    MODERATELY_ACTIVE: "moderate activity",
    VERY_ACTIVE: "very active routine",
  };

  return `Generate balanced daily meal recommendations for ${goalText[profile.healthGoal]} with ${activityText[profile.activityLevel]}. Prioritize practical foods and respect allergy flags.`;
}

export function buildRecommendRequest(profile: ProfileWithAllergies): RecommendRequest {
  return {
    target_macros: buildTargetMacros(profile),
    allergies: buildAllergyFlags(profile.allergies),
    breakfast_prefs: emptyPrefs,
    lunch_prefs: emptyPrefs,
    dinner_prefs: emptyPrefs,
    user_text: buildUserText(profile),
  };
}

function isNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

function validateRecommendResponse(value: unknown): asserts value is RecommendResponse {
  if (!value || typeof value !== "object") {
    throw new AiRecommendationError("AI response is not a valid object.");
  }

  const response = value as Partial<RecommendResponse>;
  if (!Array.isArray(response.daily_plan)) {
    throw new AiRecommendationError("AI response is missing daily_plan.");
  }
  if (typeof response.narrative_summary !== "string") {
    throw new AiRecommendationError("AI response is missing narrative_summary.");
  }

  for (const meal of response.daily_plan) {
    if (
      !meal ||
      typeof meal.meal_name !== "string" ||
      !isNumber(meal.target_calories) ||
      !Array.isArray(meal.recommendations)
    ) {
      throw new AiRecommendationError("AI response contains an invalid meal plan.");
    }

    for (const recommendation of meal.recommendations) {
      if (
        !recommendation ||
        typeof recommendation.food_name !== "string" ||
        !isNumber(recommendation.calories_100g) ||
        !isNumber(recommendation.ideal_grams) ||
        !isNumber(recommendation.ideal_calories) ||
        !isNumber(recommendation.match_score)
      ) {
        throw new AiRecommendationError("AI response contains an invalid recommendation.");
      }
    }
  }
}

export function normalizeRecommendResponse(
  response: RecommendResponse,
): NormalizedMealRecommendationResult {
  return {
    source: "ai",
    dailyPlan: response.daily_plan.map((meal) => ({
      mealName: meal.meal_name,
      targetCalories: meal.target_calories,
      recommendations: meal.recommendations.map((recommendation) => ({
        foodName: recommendation.food_name,
        calories100g: recommendation.calories_100g,
        idealGrams: recommendation.ideal_grams,
        idealCalories: recommendation.ideal_calories,
        matchScore: recommendation.match_score,
      })),
    })),
    narrativeSummary: response.narrative_summary,
  };
}

function getValidationMessages(errorBody: unknown) {
  const validationError = errorBody as Partial<RecommendValidationError>;

  if (!Array.isArray(validationError.detail)) {
    return [];
  }

  return validationError.detail
    .map((item) => item?.msg)
    .filter((message): message is string => typeof message === "string");
}

export async function requestAiMealRecommendation(
  requestBody: RecommendRequest,
): Promise<NormalizedMealRecommendationResult> {
  const endpoint = process.env.NUTRIMATCH_AI_API_URL ?? DEFAULT_AI_API_URL;
  const controller = new AbortController();
  const timeoutMs = getRequestTimeoutMs();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (process.env.NUTRIMATCH_AI_API_TOKEN) {
      headers.Authorization = `Bearer ${process.env.NUTRIMATCH_AI_API_TOKEN}`;
    }

    const response = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody),
      signal: controller.signal,
    });

    const body = await response.json().catch(() => null);

    if (response.status === 422) {
      const validationMessages = getValidationMessages(body);
      throw new AiRecommendationError(
        validationMessages.length > 0
          ? validationMessages.join("; ")
          : "AI recommendation validation failed.",
        422,
        validationMessages,
      );
    }

    if (!response.ok) {
      throw new AiRecommendationError(
        "AI recommendation service returned an error.",
        response.status,
      );
    }

    validateRecommendResponse(body);
    return normalizeRecommendResponse(body);
  } catch (error) {
    if (error instanceof AiRecommendationError) {
      throw error;
    }

    if (error instanceof Error && error.name === "AbortError") {
      throw new AiRecommendationError(
        `AI recommendation service timed out after ${Math.round(timeoutMs / 1000)} seconds.`,
      );
    }

    const causeMessage =
      error instanceof Error && error.message ? ` ${error.message}` : "";
    throw new AiRecommendationError(
      `AI recommendation service is unavailable.${causeMessage}`,
    );
  } finally {
    clearTimeout(timeout);
  }
}
