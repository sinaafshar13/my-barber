import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import "./globals.css";
import React from "react";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Barber",
  description:
    "پلتفرم جامع جستجوی آرایشگر، خدمات آرایشی و بهداشتی و نوبت دهی آنلاین",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>{children}</body>
    </html>
  );
}
