import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryProductDetail from "@/components/catalog/CategoryProductDetail";
import { canonicalUrl } from "@/lib/site";
import { industrialSystem } from "../../system";

export function generateStaticParams() {
  return industrialSystem.categories.flatMap((cat) =>
    cat.products.map((p) => ({
      category: cat.slug,
      slug: p.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const cat = industrialSystem.categories.find((c) => c.slug === category);
  const product = cat?.products.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };

  const url = canonicalUrl(`${industrialSystem.basePath}/${category}/${slug}`);
  return {
    title: `${product.name} | ${cat!.name}`,
    description: product.spec,
    alternates: { canonical: url },
    openGraph: {
      title: `${product.name} | ${cat!.name}`,
      description: product.spec,
      url,
      type: "website",
      images: [{ url: product.img, alt: product.name }],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const cat = industrialSystem.categories.find((c) => c.slug === category);
  const product = cat?.products.find((p) => p.slug === slug);

  if (!cat || !product) {
    notFound();
  }

  return <CategoryProductDetail system={industrialSystem} category={cat} product={product} />;
}
