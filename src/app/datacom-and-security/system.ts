import type { CategorySystem } from "@/lib/products";
import { datacomCategories } from "./datacomProducts";

export const datacomSystem: CategorySystem = {
  basePath: "/datacom-and-security",
  displayName: "Conduit & Fittings",
  rootLabel: "CONDUIT & FITTINGS",
  backToAllLabel: "Back to All Conduit & Fittings",
  categories: datacomCategories,
};
