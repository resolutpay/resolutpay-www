import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

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
      <body>
        {/* Page Grid */}
        <div className="grid min-[600px]:grid-cols-[35%_auto] min-[800px]:grid-cols-[45%_auto] min-[1015px]:grid-cols-[55%_auto] w-full">
          {/* Left Section(Welcome to Resolut) */}
          <section className="bg-primary-color relative bg-[url('/circle-top.svg')] bg-no-repeat [background-size:min(67%,552px)_auto] max-[600px]:py-20 max-[600px]:bg-contain min-[600px]:max-[800px]:bg-size-[100%_85%] min-[600px]:max-[800px]:bg-top">
            <div className="md:max-w-[362.43px] md:mt-64 md:ml-40 max-[600px]:flex flex-col items-center text-center sm:text-left min-[600px]:max-[800px]:mt-[70%] min-[600px]:max-[800px]:px-2 min-[600px]:max-[800px]:text-justify">
              <h3 className="font-semibold text-2xl sm:text-[40px] leading-12 text-white mb-4 min-[600px]:max-[800px]:text-base ">
                Welcome to Resolut
              </h3>
              <p className="text-sm sm:text-base opacity-75 text-white md:mb-5 pr-7">
                MaterialM helps developers to build organized and well coded
                dashboards full of beautiful and rich modules.
              </p>
              <Button className=" border-0 rounded-[30px] bg-[#00a1ff] px-[17px] py-3 flex justify-center gap-1 hover:scale-110 hover:bg-emerald-600 hover:font-extrabold transition-all duration-500 ease-in-out group max-[600px]:mt-10 min-[600px]:max-[800px]:mt-5">
                <Link
                  href={""}
                  className="font-medium text-sm text-center leading-5 group-hover:font-extrabold"
                >
                  Learn More
                </Link>
                <ArrowRight
                  size={24}
                  color="white"
                  className="hidden animate-bounce group-hover:block"
                />
              </Button>
            </div>
          </section>
          {/* Right Section(Create Account | Authentication) */}
          <section>{children}</section>
        </div>
      </body>
    </html>
  );
}
