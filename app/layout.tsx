import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/content/site";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
