import type { MealPlanDay } from "@/types";

const images = {
  oats:
    "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=900&q=80",
  bowl:
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
  chicken:
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
  snack:
    "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
  rice:
    "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80",
  wrap:
    "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?auto=format&fit=crop&w=900&q=80",
  soup:
    "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
  toast:
    "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
};

export const mockMealPlan: MealPlanDay[] = Array.from({ length: 7 }).map(
  (_, index) => {
    const day = index + 1;
    return {
      day,
      label: `Day ${day}`,
      calories: 1980 + index * 18,
      meals: [
        {
          id: `day-${day}-breakfast`,
          type: "Breakfast",
          name:
            day % 2 === 0
              ? "Banana chia oat bowl"
              : "Cinnamon apple overnight oats",
          calories: 430 + index * 4,
          protein: 24,
          carbs: 62,
          fat: 12,
          image: images.oats,
          ingredients: ["Rolled oats", "Chia seeds", "Oat milk", "Apple", "Cinnamon"],
          allergySafe: true,
          allergyAnalysis:
            "Prepared with oat milk and no nuts, seafood, shellfish, egg, or dairy ingredients.",
          fitReason:
            "Slow-digesting oats and chia fiber help keep morning energy stable while matching your maintenance calorie target.",
        },
        {
          id: `day-${day}-lunch`,
          type: "Lunch",
          name:
            day % 2 === 0
              ? "Herbed chicken quinoa bowl"
              : "Lemon tofu-free garden bowl",
          calories: 610 + index * 6,
          protein: 42,
          carbs: 71,
          fat: 18,
          image: day % 2 === 0 ? images.chicken : images.bowl,
          ingredients: [
            "Quinoa",
            "Grilled chicken",
            "Cucumber",
            "Avocado",
            "Lemon herb dressing",
          ],
          allergySafe: true,
          allergyAnalysis:
            "The recipe excludes dairy dressing, nuts, seafood, shellfish, and soy-based sauces.",
          fitReason:
            "This meal delivers a protein-forward lunch with complex carbs and unsaturated fats for afternoon satiety.",
        },
        {
          id: `day-${day}-dinner`,
          type: "Dinner",
          name:
            day % 2 === 0
              ? "Ginger chicken rice plate"
              : "Roasted vegetable rice bowl",
          calories: 680 + index * 7,
          protein: 44,
          carbs: 78,
          fat: 20,
          image: day % 2 === 0 ? images.rice : images.soup,
          ingredients: [
            "Brown rice",
            "Chicken breast",
            "Broccoli",
            "Carrot",
            "Ginger glaze",
          ],
          allergySafe: true,
          allergyAnalysis:
            "Uses a coconut-aminos style glaze instead of soy sauce and avoids dairy or nut toppings.",
          fitReason:
            "A warm, high-protein dinner keeps macros balanced without triggering your selected allergy filters.",
        },
        {
          id: `day-${day}-snack`,
          type: "Snack",
          name: day % 2 === 0 ? "Berry coconut yogurt cup" : "Avocado rice cakes",
          calories: 250 + index * 3,
          protein: 12,
          carbs: 32,
          fat: 8,
          image: day % 2 === 0 ? images.snack : images.toast,
          ingredients:
            day % 2 === 0
              ? ["Coconut yogurt", "Blueberries", "Pumpkin seeds", "Mint"]
              : ["Rice cakes", "Avocado", "Tomato", "Lime"],
          allergySafe: true,
          allergyAnalysis:
            "Snack ingredients stay dairy-free and nut-free while avoiding seafood and shellfish contact.",
          fitReason:
            "A compact snack closes the calorie gap and adds fiber without making the day feel heavy.",
        },
      ],
    };
  },
);
