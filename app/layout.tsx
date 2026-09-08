import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} · ${siteConfig.title}`,
  description: `${siteConfig.name} — ${siteConfig.title}. ${siteConfig.yearsOfExperience} building scalable React / Next.js platforms with a focus on architecture, mentoring, and performance.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body className="font-display antialiased">{children}</body>
    </html>
  );
}
