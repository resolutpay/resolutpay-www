import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import groupbg from "@/public/assets/group-bg.svg";
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
      <body className="flex flex-col min-h-dvh">
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
