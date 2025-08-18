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
  inter,
} from "../lib/font";

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
        className={`${canaro.variable} ${canaroBook.variable} ${darkerGrotesque.variable} ${sora.variable} ${mPlus1.variable} ${instrumentSans.variable} ${lexend.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
