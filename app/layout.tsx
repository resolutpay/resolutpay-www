import type { Metadata } from "next";
import "./globals.css";

import { canaro, grotesque } from "../lib/font";

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
      <body className={`${grotesque.className} ${canaro.variable}`}>
        {children}
      </body>
    </html>
  );
}
