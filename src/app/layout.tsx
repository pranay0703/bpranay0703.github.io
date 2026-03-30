import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";

import { siteConfig } from "@/data/site";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: `${siteConfig.role} in ${siteConfig.location}`,
  openGraph: {
    title: siteConfig.name,
    description: `${siteConfig.role} in ${siteConfig.location}`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteConfig.name,
    description: `${siteConfig.role} in ${siteConfig.location}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="bg-[var(--background)] text-[var(--text-main)] antialiased">
        {children}
      </body>
    </html>
  );
}
