import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Crazy Crumbs — Boutique Patisserie",
  description:
    "World-class tres leches and boutique confections, baked from scratch with natural ingredients. Order your cake with 24 hours' notice.",
  keywords: [
    "tres leches",
    "artisanal cake",
    "boutique patisserie",
    "premium bakery",
    "handcrafted desserts",
    "natural ingredients",
  ],
  openGraph: {
    title: "The Crazy Crumbs — Boutique Patisserie",
    description:
      "World-class tres leches and boutique confections, baked from scratch with natural ingredients.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodoni.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}
