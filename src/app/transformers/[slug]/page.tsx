import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CatalogProductDetail from "@/components/catalog/CatalogProductDetail";
import { canonicalUrl } from "@/lib/site";
import { transformerProducts } from "../transformerProducts";

export function generateStaticParams() {
  return transformerProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = transformerProducts.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };

  const url = canonicalUrl(`/transformers/${slug}`);
  return {
    title: `${product.name} | Transformers`,
    description: product.desc,
    alternates: { canonical: url },
    openGraph: {
      title: `${product.name} | Transformers`,
      description: product.desc,
      url,
      type: "website",
      images: [{ url: product.img, alt: product.name }],
    },
  };
}

export default async function TransformerProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = transformerProducts.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <CatalogProductDetail
      product={product}
      basePath="/transformers"
      sectionLabel="TRANSFORMERS"
      backLabel="Back to All Transformers"
      quickSpecLabels={["Voltage", "Type"]}
    />
  );
}
