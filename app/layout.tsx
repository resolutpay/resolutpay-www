import type { Metadata } from "next";

import "./globals.css";

import {
  canaro,
  canaroBook,
  darkerGrotesque,
  instrumentSans,
  mPlus1,
  sora,
} from "../lib/font";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${canaro.variable} ${canaroBook.variable} ${darkerGrotesque.variable} ${sora.variable} ${mPlus1.variable} ${instrumentSans.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
