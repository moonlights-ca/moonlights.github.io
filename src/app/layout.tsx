import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`light ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <meta name="theme-color" content="#ededf0" />
        <link rel="preload" href="/moonlights.github.io/assets/hero_bg.webp" as="image" type="image/webp" fetchPriority="high" />
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
          media="print"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
            rel="stylesheet"
          />
        </noscript>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            // Flip media for browsers that don't fire onLoad on link[media=print]
            var l = document.querySelector('link[media="print"][href*="Material+Symbols"]');
            if (l) { l.onload = function() { this.media='all'; }; }
            // Add icons-loaded class once all fonts (including Material Symbols) are ready
            if (document.fonts && document.fonts.ready) {
              document.fonts.ready.then(function() {
                document.documentElement.classList.add('icons-loaded');
              });
            }
            setTimeout(function() {
              document.documentElement.classList.add('icons-loaded');
            }, 2000);
          })();
        ` }} />
      </head>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

