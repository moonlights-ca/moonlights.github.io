import type { CategorySystem } from "@/lib/products";
import { toolsCategories } from "./toolsProducts";

export const toolsSystem: CategorySystem = {
  basePath: "/tools-and-equipment",
  displayName: "Tools & Equipment",
  rootLabel: "TOOLS & EQUIPMENT",
  backToAllLabel: "Back to All Tools & Equipment",
  categories: toolsCategories,
};
