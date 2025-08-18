import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import landingPage from "@/assets/landing-page.svg?url";
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
        <Image
          src={landingPage}
          alt=""
          className="absolute -top-5 -z-50 w-full"
        />
        <Header />
        <main className="flex-1">{children}</main>
        <EmailUpdates />
        <Footer />
      </body>
    </html>
  );
}
