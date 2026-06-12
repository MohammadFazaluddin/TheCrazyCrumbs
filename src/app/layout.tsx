import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Crazy Crumbs - Boutique Patisserie",
  description:
    "World-Class Tres Leches and Boutique Confections. Hand-crafted from scratch. 100% Natural. Request your bespoke commission today.",
  keywords: [
    "tres leches",
    "artisanal cake",
    "boutique patisserie",
    "premium bakery",
    "handcrafted desserts",
    "natural ingredients",
  ],
  openGraph: {
    title: "The Crazy Crumbs — Artisanal Commissions for the Refined Palate",
    description:
      "World-Class Tres Leches and Boutique Confections. Hand-crafted from scratch. 100% Natural.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
