import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import EmailUpdates from "@/components/email-updates";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[url('/landing-page.svg')] bg-no-repeat bg-center min-h-screen bg-cover flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <EmailUpdates />
      <Footer />
    </div>
  );
}
