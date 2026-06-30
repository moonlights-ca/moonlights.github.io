import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CatalogProductDetail from "@/components/catalog/CatalogProductDetail";
import { canonicalUrl } from "@/lib/site";
import { wireProducts } from "../wireProducts";

export function generateStaticParams() {
  return wireProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = wireProducts.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };

  const url = canonicalUrl(`/wires-and-cables/${slug}`);
  return {
    title: `${product.name} | Wires & Cables`,
    description: product.desc,
    alternates: { canonical: url },
    openGraph: {
      title: `${product.name} | Wires & Cables`,
      description: product.desc,
      url,
      type: "website",
      images: [{ url: product.img, alt: product.name }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = wireProducts.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <CatalogProductDetail
      product={product}
      basePath="/wires-and-cables"
      sectionLabel="WIRES & CABLES"
      backLabel="Back to All Wires & Cables"
      quickSpecLabels={["Voltage", "Rating"]}
    />
  );
}
