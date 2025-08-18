import React from "react";
import WidthConstraint from "../width-constraint";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import groupMobile from "@/assets/group-mobile.svg?url";
import group from "@/assets/group.svg?url";
import wave from "@/assets/wave.svg?url";

const Ipap = () => {
  return (
    <section className=" pt-10 sm:pt-20 md:pt-30 lg:pt-40 mt-16 bg-[linear-gradient(270deg,#21bbec_0%,#0068c9_39%,#130d3a_100%)] w-full relative overflow-hidden">
      <WidthConstraint className="max-[1266px]:px-10 flex flex-col items-center text-center sm:text-left sm:block">
        <Button className="max-w-40 rounded-[30px] bg-black-100 px-10 py-3.5 font-extrabold text-base leading-[20.3px] text-primary-900 hover:scale-125 hover:bg-white hover:text-black hover:text-lg hover:-rotate-12 transition-all transform duration-700 ease-initial ">
          <Link href={""}> Introducing</Link>
        </Button>
        <h4 className="md:mt-10 mt-5 font-canaro-local font-medium text-xl sm:text-4xl md:text-4xl lg:text-6xl leading-normal sm:leading-[65px] -tracking-[2px] text-white sm:max-w-3/5">
          Insurance Product Aggregator Platform
        </h4>
        <p className="mt-6 font-sans text-black-100 md:max-w-2/4 opacity-60">
          You have the freedom to personalize the design of your credit card,
          ensuring a truly unique experience that makes you feel extraordinary
        </p>
        <Image
          src={groupMobile}
          alt="credit-card"
          className="sm:hidden ml-6 mt-3 w-[50vw]"
        />
        <div className="mt-5 sm:mt-15 pb-15 sm:pb-[30vw]">
          <Link
            href={""}
            className="text-white font-extrabold text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-[20.3px] animate-pulse hover:underline"
          >
            www.ipap.resolutfinance.com
          </Link>
        </div>
      </WidthConstraint>
      <Image
        src={group}
        alt="credit-card"
        className=" hidden sm:block absolute right-0 top-2/5 w-[35vw] -translate-y-1/2 sm:translate-y-0 sm:w-[40vw] sm:-top-20 md:w-[50vw] lg:w-[50vw] lg:bottom-0 xl:w-[51vw] xl:-top-40 min-[100rem]:-top-64"
      />
      <Image src={wave} alt="" className="absolute bottom-0 w-screen " />
    </section>
  );
};

export default Ipap;
