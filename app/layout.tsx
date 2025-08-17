import type { Metadata } from "next";

import "./globals.css";

import {
  canaro,
  canaroBook,
  darkerGrotesque,
  instrumentSans,
  mPlus1,
  sora,
  lexend,
} from "../lib/font";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
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
        className={`${canaro.variable} ${canaroBook.variable} ${darkerGrotesque.variable} ${sora.variable} ${mPlus1.variable} ${instrumentSans.variable} ${lexend.variable} antialiased flex flex-col min-h-dvh`}
      >
        {/* Background Image */}
        <Image src={groupbg} alt="" className="absolute top-0 -z-50 w-full" />
        <Header />
        <main className="flex-1">{children}</main>
        <EmailUpdates />
        <Footer />
      </body>
    </html>
  );
}
