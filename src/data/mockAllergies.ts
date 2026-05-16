import type { Allergy } from "@/types";

export const mockAllergies: Allergy[] = [
  {
    id: "seafood",
    label: "Seafood",
    description: "Avoid fish-based meals and seafood sauces.",
  },
  {
    id: "nuts",
    label: "Nuts",
    description: "Filters peanuts, tree nuts, and nut toppings.",
  },
  {
    id: "gluten",
    label: "Gluten",
    description: "Prioritizes gluten-free grains and sauces.",
  },
  {
    id: "dairy",
    label: "Dairy",
    description: "Avoids milk, cheese, butter, and cream.",
  },
  {
    id: "egg",
    label: "Egg",
    description: "Removes egg-based meals and binders.",
  },
  {
    id: "soy",
    label: "Soy",
    description: "Checks tofu, soy sauce, tempeh, and edamame.",
  },
  {
    id: "shellfish",
    label: "Shellfish",
    description: "Excludes shrimp, crab, lobster, and mollusks.",
  },
  {
    id: "wheat",
    label: "Wheat",
    description: "Avoids wheat noodles, breads, and coatings.",
  },
];
