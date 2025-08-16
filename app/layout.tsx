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
import Footer from "@/components/footer";
import Image from "next/image";
import bgImage from "../public/assets/layout-background.svg";

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
        {/* Background Image */}
        <Image src={bgImage} alt="" className="absolute w-full top-0 -z-50" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
