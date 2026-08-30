// app/layout.tsx

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Suphanat Chanlek - Software Engineer",
    template: "%s | Suphanat Chanlek",
  },
  description:
    "Portfolio of Suphanat Chanlek (ศุภณัฐ จันทร์เลข / Arm) — Computer Science student specializing in full-stack development, AI/MLOps, and DevOps. Building scalable, production-ready systems.",
  keywords: [
    "Suphanat Chanlek",
    "suphanatchanlek",
    "suphanatchanlek30",
    "ศุภณัฐ จันทร์เลข",
    "Arm",
    "อาร์ม",
    "Software Engineer",
    "Full-Stack Developer",
    "AI Engineer",
    "MLOps",
    "DevOps",
    "Portfolio",
    "Computer Science",
    "suphanatchanlek@gmail.com",
  ],
  authors: [{ name: "Suphanat Chanlek" }],
  creator: "Suphanat Chanlek",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Suphanat Chanlek Portfolio",
    title: "Suphanat Chanlek (ศุภณัฐ จันทร์เลข) — Software Engineer",
    description:
      "Portfolio of Arm (Suphanat Chanlek / ศุภณัฐ จันทร์เลข) — Full-stack developer, AI/MLOps, and DevOps engineer.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
