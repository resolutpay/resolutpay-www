import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import WidthConstraint from "../width-constraint";
import standardImage from "@/assets/pci-insight.svg?url";
import ring from "@/assets/head-ring.svg?url";

const Hero = () => {
  return (
    <WidthConstraint>
      <section
        role="banner"
        className="flex flex-col justify-center items-center px-3 mx-auto max-[554px]:mt-28 sm:text-center min-[555px]:mt-32 md:mt-5 lg:w-5/6 md:h-screen"
      >
        <div className="relative">
          <h1 className="font-canaro-local font-medium leading-[117%] text-primary-900 text-5xl max-[554px]:text-3xl sm:text-6xl md:text-7xl">
            Empowering Africa with Smart Finance Solutions
          </h1>
          <p className="text-primary-black font-medium text-[32px] max-[554px]:mt-3 max-[554px]:text-xl md:leading-[120%] lg:w-11/12 ">
            Provide innovative payment, payroll, and lending tools that help
            companies streamline operations, empower employees, and grow
            sustainably.
          </p>
          <Image
            src={ring}
            alt="ring"
            className="absolute inset-y-0 min-[885]:-inset-y-6 min-[885]:inset-x-86 max-[884]:w-1/2"
          />
        </div>
        <div className="flex mt-12 justify-center gap-x-5 max-[305px]:flex-col max-[554px]:w-full max-[305px]:gap-y-5 sm:gap-10 md:mt-15">
          <Button className="text-white font-extrabold leading-[26.7px] text-xl bg-primary-color hover:bg-primary-color/60 max-[637px]:rounded-md max-[640px]:p-2.5 max-[554px]:text-lg sm:rounded-[39.42px] sm:px-11 sm:h-16">
            <Link href={""}> Explore Our Solutions</Link>
          </Button>
          <Button className="hover:bg-black-100 hover:border-0 group text-primary-color font-extrabold leading-[26.7px] text-xl border-[2.63px] border-primary-color max-[640px]:p-2 max-[554px]:text-lg max-[637px]:rounded-md min-[554px]:w-64 sm:rounded-[39.42px] sm:px-11 sm:h-16">
            <Link href="/sign-in">Get Started</Link>
          </Button>
        </div>
        <Link href={""} className="max-[554px]:mt-10 mt-7 md:mt-25">
          <Image src={standardImage} alt="Security standards" />
        </Link>
      </section>
      ;
    </WidthConstraint>
  );
};
export default Hero;
