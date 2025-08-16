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
import groupbg from "../public/assets/group-bg.svg";

import EmailUpdates from "@/components/email-updates";

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
        <Image src={groupbg} alt="" className="absolute  top-0 -z-50 w-full" />
        <Header />
        {children}
        <EmailUpdates />
        <Footer />
      </body>
    </html>
  );
}
