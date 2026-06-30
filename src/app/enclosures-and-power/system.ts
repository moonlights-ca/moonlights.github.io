import type { CategorySystem } from "@/lib/products";
import { enclosuresCategories } from "./enclosuresProducts";

export const enclosuresSystem: CategorySystem = {
  basePath: "/enclosures-and-power",
  displayName: "Distribution & Protection",
  rootLabel: "DISTRIBUTION & PROTECTION",
  backToAllLabel: "Back to All Distribution & Protection",
  categories: enclosuresCategories,
};
