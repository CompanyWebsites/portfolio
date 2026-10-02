import type { Metadata } from "next";
import { Fraunces, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700", "900"],
  display: "swap",
});

const sans = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prashant Thapak — Engineer · Industrialist · Researcher · Inventor",
  description:
    "Three decades from paper & pulp plants to patents: air purification without electricity, wind systems, solar thermal, carbon capture. Engineering that scales.",
  keywords: [
    "Prashant Thapak",
    "Mechanical Engineer",
    "Inventor",
    "Air Purification",
    "Wind Energy",
    "Carbon Capture",
    "Industrial Consultancy",
  ],
  openGraph: {
    title: "Prashant Thapak — Engineer · Industrialist · Researcher · Inventor",
    description:
      "From Industry to Innovation: 30+ years translating engineering research into practical industrial systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} min-h-full flex flex-col bg-ink text-cream antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
