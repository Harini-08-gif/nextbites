export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  description: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    description: "Blistered crust, melty mozzarella, and fresh basil.",
    ingredients: ["Pizza dough", "San Marzano tomatoes", "Fresh mozzarella", "Fresh basil", "Olive oil"],
    steps: ["Preheat oven to 250°C.", "Stretch dough and spread crushed tomatoes.", "Top with mozzarella and bake for 10–12 minutes.", "Garnish with fresh basil and olive oil."],
  },
  {
    id: "paneer-tikka",
    title: "Paneer Tikka",
    emoji: "🧆",
    minutes: 40,
    difficulty: "Medium",
    cuisine: "Indian",
    description: "Smoky yogurt-marinated paneer cubes charred with peppers and onions.",
    ingredients: ["250g paneer cubes", "Thick yogurt", "Garam masala", "Turmeric", "Bell peppers & onions"],
    steps: ["Whisk yogurt and spices into a marinade.", "Coat paneer and veggies; rest 20 minutes.", "Skewer and grill or roast at 220°C for 15 minutes."],
  },
  {
    id: "cold-brew-coffee",
    title: "Cold Brew Coffee",
    emoji: "☕",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "Beverage",
    description: "Smooth, low-acidity iced coffee steeped slowly overnight.",
    ingredients: ["1 cup coarse ground coffee", "4 cups cold filtered water", "Ice cubes"],
    steps: ["Combine coffee grounds and water in a jar.", "Steep in the fridge for 12–16 hours.", "Strain through a fine filter and serve over ice."],
  },
  {
    id: "avocado-toast",
    title: "Avocado Toast",
    emoji: "🥑",
    minutes: 15,
    difficulty: "Easy",
    cuisine: "Cafe",
    description: "Crisp sourdough topped with creamy smashed avocado and chili flakes.",
    ingredients: ["2 slices sourdough bread", "1 ripe avocado", "Lemon juice", "Sea salt", "Red chili flakes"],
    steps: ["Toast the sourdough slices until golden.", "Mash avocado with lemon juice and salt.", "Spread onto toast and top with chili flakes."],
  },
];
export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}