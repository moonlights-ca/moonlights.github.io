import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Moonlights.ca — Industrial Electrical Supplier | Wires, Cables, Transformers",
    template: "%s | Moonlights.ca",
  },
  description: "The premier North American distributor for wires, cables, transformers, industrial electrical parts, and LED lighting solutions. Engineered for reliability and scale.",
  keywords: [
    "electrical supplier",
    "wires and cables",
    "industrial transformers",
    "LED lighting",
    "electrical connectors",
    "cable accessories",
    "terminals and lugs",
    "control components",
    "North America",
    "moonlights.ca",
  ],
  openGraph: {
    title: "Moonlights.ca — Industrial Electrical Supplier",
    description: "Full-scale North American electrical supplier. Wires, cables, transformers, industrial parts, and LED lighting.",
    url: "https://www.moonlights.ca",
    siteName: "Moonlights.ca",
    type: "website",
    locale: "en_CA",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://www.moonlights.ca"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#141218" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
