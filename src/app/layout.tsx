import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const materialSymbols = localFont({
  src: "../assets/fonts/material-symbols-outlined.woff2",
  variable: "--font-material-symbols",
  display: "block",
  weight: "100 700",
});

export const metadata: Metadata = {
  title: "SDIT Imam Syafi'i - Membentuk Generasi Qur'ani",
  description: "Membentuk Generasi Qur'ani, Cerdas, dan Berakhlak Mulia. Sekolah Dasar Islam Terpadu di BTN Tirasa, Sudiang, Makassar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${montserrat.variable} ${inter.variable} ${materialSymbols.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

