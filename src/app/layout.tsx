import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import { siteConfig, canonicalUrl } from "@/lib/site";
import { organizationSchema, websiteSchema } from "@/lib/structuredData";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Moonlights.ca — Canadian Electrical Supplier | Wires, Cables, Transformers",
    template: "%s | Moonlights.ca",
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  alternates: {
    canonical: canonicalUrl("/"),
  },
  openGraph: {
    title: "Moonlights.ca — Canadian Electrical Supplier",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: siteConfig.ogImage,
        alt: "Moonlights — Canadian electrical supplier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moonlights.ca — Canadian Electrical Supplier",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Electrical Supply",
};

// Inline script to prevent flash of wrong theme (runs before React hydrates)
const themeScript = `
(function() {
  try {
    var t = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(t);
  } catch(e) {}
})();
`;

const materialSymbolsHref =
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap";

// Loads the Material Symbols icon font without blocking render, then reveals icons.
// The <link> is created from script (rather than server-rendered) so that mutating
// its `media` attribute on load can't cause a hydration mismatch.
const iconFontScript = `
(function() {
  var l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = '${materialSymbolsHref}';
  l.media = 'print';
  l.onload = function() { this.media = 'all'; };
  document.head.appendChild(l);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function() {
      document.documentElement.classList.add('icons-loaded');
    });
  }
  setTimeout(function() {
    document.documentElement.classList.add('icons-loaded');
  }, 2000);
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`light ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <meta name="theme-color" content="#ededf0" />
        <link rel="preload" href="/assets/hero_bg.webp" as="image" type="image/webp" fetchPriority="high" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href={materialSymbolsHref} as="style" />
        <noscript>
          <link href={materialSymbolsHref} rel="stylesheet" />
        </noscript>
        <script dangerouslySetInnerHTML={{ __html: iconFontScript }} />
      </head>
      <body className="flex flex-col min-h-screen">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <ThemeProvider>
          <Navbar />
          <ScrollReveal />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

