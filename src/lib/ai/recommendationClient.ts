import {
  ActivityLevel,
  HealthGoal,
  type Allergen,
  type UserAllergy,
  type UserProfile,
} from "@prisma/client";

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
  start_date: string;
  days: number;
  variety_penalty: number;
  halal_only: boolean;
};

export type RecommendResponse = {
  daily_plan: {
    meal_name: string;
    target_calories: number;
    recommendations: {
      food_name: string;
      food_id?: string;
      image_url?: string;
      calories_100g: number;
      ideal_grams: number;
      ideal_calories: number;
      ideal_protein?: number;
      ideal_fat?: number;
      ideal_carb?: number;
      match_score?: number;
      pairing_group?: string;
      pairing_role?: string;
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
      imageUrl?: string;
      calories100g?: number;
      idealGrams?: number;
      idealCalories?: number;
      idealProtein?: number;
      idealFat?: number;
      idealCarb?: number;
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
const DEFAULT_REQUEST_TIMEOUT_MS = 120000;
const DEFAULT_DAYS = 7;
const DEFAULT_VARIETY_PENALTY = 0.15;

const ALLERGY_KEYS = [
  "gluten",
  "dairy",
  "nuts",
  "peanut",
  "seafood",
  "egg",
  "soy",
  "celery",
] as const;

const MACRO_KEYS = ["calories", "protein_g", "fat_g", "carb_g"] as const;

type AllergyKey = (typeof ALLERGY_KEYS)[number];
type MacroKey = (typeof MACRO_KEYS)[number];

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

export function buildTargetMacros(
  profile: Pick<UserProfile, "targetCalories">,
) {
  const calories = Math.round(profile.targetCalories ?? 1800);

  return {
    calories,
    protein_g: Math.round((calories * 0.25) / 4),
    fat_g: Math.round((calories * 0.3) / 9),
    carb_g: Math.round((calories * 0.45) / 4),
  };
}

function getTodayIsoDate() {
  return new Date().toISOString().split("T")[0];
}

function clonePrefs() {
  return {
    food_category: [] as string[],
    main_ingredients: [] as string[],
  };
}

function cloneRequest(request: RecommendRequest): RecommendRequest {
  return {
    target_macros: { ...request.target_macros },
    allergies: { ...request.allergies },
    breakfast_prefs: {
      food_category: [...request.breakfast_prefs.food_category],
      main_ingredients: [...request.breakfast_prefs.main_ingredients],
    },
    lunch_prefs: {
      food_category: [...request.lunch_prefs.food_category],
      main_ingredients: [...request.lunch_prefs.main_ingredients],
    },
    dinner_prefs: {
      food_category: [...request.dinner_prefs.food_category],
      main_ingredients: [...request.dinner_prefs.main_ingredients],
    },
    user_text: request.user_text,
    start_date: request.start_date,
    days: request.days,
    variety_penalty: request.variety_penalty,
    halal_only: request.halal_only,
  };
}

export function buildAllergyFlags(
  allergies: ProfileWithAllergies["allergies"],
) {
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

export function buildUserText(
  profile: Pick<UserProfile, "activityLevel" | "healthGoal">,
) {
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

function buildDefaultRecommendRequest(
  profile: ProfileWithAllergies,
): RecommendRequest {
  return {
    target_macros: buildTargetMacros(profile),
    allergies: buildAllergyFlags(profile.allergies),
    breakfast_prefs: clonePrefs(),
    lunch_prefs: clonePrefs(),
    dinner_prefs: clonePrefs(),
    user_text: buildUserText(profile),
    start_date: getTodayIsoDate(),
    days: DEFAULT_DAYS,
    variety_penalty: DEFAULT_VARIETY_PENALTY,
    halal_only: false,
  };
}

function isNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

function toNumber(value: unknown) {
  if (typeof value === "number") return value;
  if (typeof value === "string" && value.trim() !== "") return Number(value);
  return Number.NaN;
}

function normalizeNumberField({
  value,
  fallback,
  field,
  min,
  max,
  errors,
}: {
  value: unknown;
  fallback: number;
  field: string;
  min: number;
  max?: number;
  errors: string[];
}) {
  if (value == null || value === "") return fallback;

  const parsed = toNumber(value);
  if (
    !Number.isFinite(parsed) ||
    parsed < min ||
    (max != null && parsed > max)
  ) {
    errors.push(
      max == null
        ? `${field} harus berupa angka minimal ${min}.`
        : `${field} harus berupa angka antara ${min} dan ${max}.`,
    );
    return fallback;
  }

  return parsed;
}

function normalizeFlag(value: unknown): 0 | 1 {
  if (value === true || value === 1 || value === "1") return 1;
  return 0;
}

function normalizeBoolean(value: unknown, fallback: boolean) {
  if (value == null || value === "") return fallback;
  if (typeof value === "boolean") return value;
  if (value === 1 || value === "1" || value === "true") return true;
  if (value === 0 || value === "0" || value === "false") return false;
  return fallback;
}

function normalizeStringList(value: unknown) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }

  if (typeof value === "string") {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

function normalizeMealPrefs(
  value: unknown,
  fallback: RecommendRequest["breakfast_prefs"],
) {
  if (!value || typeof value !== "object") {
    return {
      food_category: [...fallback.food_category],
      main_ingredients: [...fallback.main_ingredients],
    };
  }

  const prefs = value as Partial<RecommendRequest["breakfast_prefs"]>;

  return {
    food_category:
      prefs.food_category == null
        ? [...fallback.food_category]
        : normalizeStringList(prefs.food_category),
    main_ingredients:
      prefs.main_ingredients == null
        ? [...fallback.main_ingredients]
        : normalizeStringList(prefs.main_ingredients),
  };
}

function normalizeIsoDate(value: unknown, fallback: string, errors: string[]) {
  if (value == null || value === "") return fallback;

  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    errors.push("start_date harus memakai format YYYY-MM-DD.");
    return fallback;
  }

  const date = new Date(`${value}T00:00:00.000Z`);
  if (Number.isNaN(date.getTime())) {
    errors.push("start_date tidak valid.");
    return fallback;
  }

  return value;
}

export function normalizeRecommendRequestInput(
  input: unknown,
  defaults?: RecommendRequest,
) {
  const errors: string[] = [];
  const base =
    defaults ??
    ({
      target_macros: buildTargetMacros({ targetCalories: 1800 } as UserProfile),
      allergies: {
        gluten: 0,
        dairy: 0,
        nuts: 0,
        peanut: 0,
        seafood: 0,
        egg: 0,
        soy: 0,
        celery: 0,
      },
      breakfast_prefs: clonePrefs(),
      lunch_prefs: clonePrefs(),
      dinner_prefs: clonePrefs(),
      user_text: "",
      start_date: getTodayIsoDate(),
      days: DEFAULT_DAYS,
      variety_penalty: DEFAULT_VARIETY_PENALTY,
      halal_only: false,
    } satisfies RecommendRequest);

  if (!input || typeof input !== "object") {
    return { requestBody: cloneRequest(base), errors };
  }

  const body = input as Partial<RecommendRequest>;
  const macros = { ...base.target_macros };
  const inputMacros =
    body.target_macros && typeof body.target_macros === "object"
      ? body.target_macros
      : {};

  for (const key of MACRO_KEYS) {
    macros[key] = Math.round(
      normalizeNumberField({
        value: (inputMacros as Partial<Record<MacroKey, unknown>>)[key],
        fallback: base.target_macros[key],
        field: `target_macros.${key}`,
        min: 1,
        errors,
      }),
    );
  }

  const allergies = { ...base.allergies };
  const inputAllergies =
    body.allergies && typeof body.allergies === "object" ? body.allergies : {};
  for (const key of ALLERGY_KEYS) {
    const rawValue = (inputAllergies as Partial<Record<AllergyKey, unknown>>)[
      key
    ];
    allergies[key] =
      rawValue == null ? base.allergies[key] : normalizeFlag(rawValue);
  }

  const userText =
    typeof body.user_text === "string" && body.user_text.trim()
      ? body.user_text.trim()
      : base.user_text;

  const requestBody: RecommendRequest = {
    target_macros: macros,
    allergies,
    breakfast_prefs: normalizeMealPrefs(
      body.breakfast_prefs,
      base.breakfast_prefs,
    ),
    lunch_prefs: normalizeMealPrefs(body.lunch_prefs, base.lunch_prefs),
    dinner_prefs: normalizeMealPrefs(body.dinner_prefs, base.dinner_prefs),
    user_text: userText,
    start_date: normalizeIsoDate(body.start_date, base.start_date, errors),
    days: Math.round(
      normalizeNumberField({
        value: body.days,
        fallback: base.days,
        field: "days",
        min: 1,
        max: 31,
        errors,
      }),
    ),
    variety_penalty: normalizeNumberField({
      value: body.variety_penalty,
      fallback: base.variety_penalty,
      field: "variety_penalty",
      min: 0,
      max: 1,
      errors,
    }),
    halal_only: normalizeBoolean(body.halal_only, base.halal_only),
  };

  return { requestBody, errors };
}

export function buildRecommendRequest(
  profile: ProfileWithAllergies,
  input?: unknown,
) {
  const normalized = normalizeRecommendRequestInput(
    input,
    buildDefaultRecommendRequest(profile),
  );

  return {
    ...normalized,
    requestBody: {
      ...normalized.requestBody,
      target_macros: buildTargetMacros(profile),
    },
  };
}

function validateRecommendResponse(
  value: unknown,
): asserts value is RecommendResponse {
  if (!value || typeof value !== "object") {
    throw new AiRecommendationError("AI response is not a valid object.");
  }

  const response = value as Partial<RecommendResponse>;
  if (!Array.isArray(response.daily_plan)) {
    throw new AiRecommendationError("AI response is missing daily_plan.");
  }
  if (response.daily_plan.length === 0) {
    throw new AiRecommendationError(
      "AI response returned an empty daily_plan.",
    );
  }
  if (typeof response.narrative_summary !== "string") {
    throw new AiRecommendationError(
      "AI response is missing narrative_summary.",
    );
  }

  let totalRecommendations = 0;

  for (const meal of response.daily_plan) {
    if (
      !meal ||
      typeof meal.meal_name !== "string" ||
      !isNumber(meal.target_calories) ||
      !Array.isArray(meal.recommendations)
    ) {
      throw new AiRecommendationError(
        "AI response contains an invalid meal plan.",
      );
    }
    totalRecommendations += meal.recommendations.length;

    for (const recommendation of meal.recommendations) {
      if (
        !recommendation ||
        typeof recommendation.food_name !== "string" ||
        !isNumber(recommendation.calories_100g) ||
        !isNumber(recommendation.ideal_grams) ||
        !isNumber(recommendation.ideal_calories)
      ) {
        console.error(
          "[AI] Invalid recommendation item:",
          JSON.stringify(recommendation),
        );
        throw new AiRecommendationError(
          "AI response contains an invalid recommendation.",
        );
      }
    }
  }

  if (totalRecommendations === 0) {
    throw new AiRecommendationError("AI response returned no recommendations.");
  }
}

export function isEmptyRecommendationError(error: unknown) {
  return (
    error instanceof AiRecommendationError &&
    (error.message.includes("empty daily_plan") ||
      error.message.includes("no recommendations"))
  );
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
        imageUrl: recommendation.image_url,
        calories100g: recommendation.calories_100g,
        idealGrams: recommendation.ideal_grams,
        idealCalories: recommendation.ideal_calories,
        idealProtein: recommendation.ideal_protein,
        idealFat: recommendation.ideal_fat,
        idealCarb: recommendation.ideal_carb,
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

function getFetchErrorDetail(error: unknown) {
  if (!(error instanceof Error)) return "";

  const details = [error.message].filter(Boolean);
  const cause = (error as Error & { cause?: unknown }).cause;

  if (cause instanceof Error && cause.message) {
    details.push(cause.message);
  } else if (cause && typeof cause === "object") {
    const code = (cause as { code?: unknown }).code;
    if (typeof code === "string") details.push(code);
  }

  return Array.from(new Set(details)).join(" ");
}

async function postJsonWithFetch({
  endpoint,
  headers,
  requestBody,
  timeoutMs,
}: {
  endpoint: string;
  headers: Record<string, string>;
  requestBody: RecommendRequest;
  timeoutMs: number;
}) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody),
      signal: controller.signal,
    });

    const text = await response.text();
    let body: unknown = null;

    if (text) {
      try {
        body = JSON.parse(text);
      } catch {
        body = { raw: text };
      }
    }

    return {
      status: response.status,
      ok: response.ok,
      body,
    };
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function requestAiMealRecommendation(
  requestBody: RecommendRequest,
): Promise<NormalizedMealRecommendationResult> {
  const endpoint = process.env.NUTRIMATCH_AI_API_URL ?? DEFAULT_AI_API_URL;
  const timeoutMs = getRequestTimeoutMs();

  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (process.env.NUTRIMATCH_AI_API_TOKEN) {
      headers.Authorization = `Bearer ${process.env.NUTRIMATCH_AI_API_TOKEN}`;
    }

    const response = await postJsonWithFetch({
      endpoint,
      headers,
      requestBody,
      timeoutMs,
    });
    const { body } = response;

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
      console.error(
        `[AI] Non-OK response (${response.status}):`,
        JSON.stringify(body),
      );
      throw new AiRecommendationError(
        "AI recommendation service returned an error.",
        response.status,
      );
    }

    console.log(
      "[AI] Raw response sample:",
      JSON.stringify(body).slice(0, 500),
    );
    validateRecommendResponse(body);
    return normalizeRecommendResponse(body);
  } catch (error) {
    if (error instanceof AiRecommendationError) {
      throw error;
    }

    console.error("[AI] Unexpected error type:", typeof error);
    console.error("[AI] Is Error instance:", error instanceof Error);
    if (error instanceof Error) {
      console.error("[AI] error.name:", error.name);
      console.error("[AI] error.message:", error.message);
      console.error(
        "[AI] error.cause:",
        (error as NodeJS.ErrnoException).cause,
      );
      console.error("[AI] error.code:", (error as NodeJS.ErrnoException).code);
      console.error("[AI] error.stack:", error.stack);
    } else {
      console.error("[AI] Raw error value:", JSON.stringify(error));
    }

    if (
      error instanceof Error &&
      (error.name === "AbortError" || error.message.includes("timed out"))
    ) {
      throw new AiRecommendationError(
        `AI recommendation service timed out after ${Math.round(timeoutMs / 1000)} seconds.`,
      );
    }

    const detail = getFetchErrorDetail(error);
    const causeMessage = detail ? ` ${detail}` : "";
    throw new AiRecommendationError(
      `AI recommendation service is unavailable.${causeMessage}`,
    );
  }
}
