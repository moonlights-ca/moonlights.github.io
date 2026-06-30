import type { CategorySystem } from "@/lib/products";
import { industrialCategories } from "./industrialProducts";

export const industrialSystem: CategorySystem = {
  basePath: "/industrial-parts",
  displayName: "Industrial Parts",
  rootLabel: "INDUSTRIAL PARTS",
  backToAllLabel: "Back to All Industrial Parts",
  categories: industrialCategories,
};
