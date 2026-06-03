import express, { type Request, type Response } from "express";
import {
  AiRecommendationError,
  normalizeRecommendRequestInput,
  requestAiMealRecommendation,
} from "../lib/ai/recommendationClient";

const app = express();
const port = Number(process.env.EXPRESS_API_PORT ?? 4000);

app.use(express.json());

app.get("/api/health", (_request: Request, response: Response) => {
  response.json({
    status: "ok",
    service: "nutrimatch-express-api",
  });
});

app.post("/api/recommendations", async (request: Request, response: Response) => {
  const { requestBody, errors } = normalizeRecommendRequestInput(request.body);

  if (errors.length > 0) {
    response.status(400).json({
      error: "Payload rekomendasi tidak valid.",
      details: errors,
    });
    return;
  }

  try {
    const recommendation = await requestAiMealRecommendation(requestBody);

    response.status(201).json({
      message: "Rekomendasi meal plan berhasil dibuat.",
      requestPayload: requestBody,
      recommendation,
    });
  } catch (error) {
    if (error instanceof AiRecommendationError) {
      response.status(error.status === 422 ? 422 : 503).json({
        error: error.message,
        validationMessages: error.validationMessages,
      });
      return;
    }

    response.status(500).json({
      error: "Terjadi kesalahan server.",
    });
  }
});

app.listen(port, () => {
  console.log(`NutriMatch Express API is running on http://localhost:${port}`);
});
