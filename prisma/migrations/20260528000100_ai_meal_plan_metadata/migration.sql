ALTER TABLE "meal_plans"
ADD COLUMN "source" TEXT NOT NULL DEFAULT 'ai',
ADD COLUMN "narrative_summary" TEXT;

ALTER TABLE "meal_plan_items"
ADD COLUMN "calories_per_100g" DOUBLE PRECISION,
ADD COLUMN "match_score" DOUBLE PRECISION;
