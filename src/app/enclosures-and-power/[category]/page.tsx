import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryListing from "@/components/catalog/CategoryListing";
import { canonicalUrl } from "@/lib/site";
import { enclosuresSystem } from "../system";

export function generateStaticParams() {
  return enclosuresSystem.categories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = enclosuresSystem.categories.find((c) => c.slug === category);
  if (!cat) return { title: "Category Not Found" };

  const url = canonicalUrl(`${enclosuresSystem.basePath}/${category}`);
  return {
    title: `${cat.name} | ${enclosuresSystem.displayName}`,
    description: cat.desc,
    alternates: { canonical: url },
    openGraph: {
      title: `${cat.name} | ${enclosuresSystem.displayName}`,
      description: cat.desc,
      url,
      type: "website",
      images: [{ url: cat.img, alt: cat.name }],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = enclosuresSystem.categories.find((c) => c.slug === category);

  if (!cat) {
    notFound();
  }

  return <CategoryListing system={enclosuresSystem} category={cat} />;
}
