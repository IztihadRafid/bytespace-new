import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi-local",
  weight: "300 900",
  style: "normal",
});

const clashDisplay = localFont({
  src: "./fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash-local",
  weight: "200 700",
  style: "normal",
});

const poppins = localFont({
  src: "./fonts/Poppins-Variable.woff2",
  variable: "--font-poppins-local",
  weight: "100 900",
  style: "normal",
});

export const metadata: Metadata = {
  title: "ByteSpace — Learn & Master Modern Skills",
  description:
    "Join ByteSpace to access high-quality courses, connect with expert instructors, and accelerate your learning journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${clashDisplay.variable} ${poppins.variable}`}
    >
      <body className="min-h-full flex flex-col ">{children}</body>
    </html>
  );
}
