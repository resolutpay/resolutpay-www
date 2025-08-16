"use client";
import React, { useState } from "react";
import WidthConstraint from "../width-constraint";
import Image from "next/image";
import glo from "../../public/assets/brands/glo.svg";
import globafin from "../../public/assets/brands/globafin.svg";
import kalahari from "../../public/assets/brands/kalahari-resorts.svg";
import loyalty from "../../public/assets/brands/loyalty-insurance.svg";
import marcel from "../../public/assets/brands/marcel.svg";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const BrandMarquee = () => {
  const [failedImages, setFailedImages] = useState(new Set());
  const [email, setEmail] = useState<string>();

  const handleImageError = (brandName: string) => {
    setFailedImages((prev) => new Set([...prev, brandName]));
  };

  // BRAND LOGOS
  const brands = [
    {
      name: "Glo",
      logo: glo,
    },
    {
      name: "Globafin",
      logo: globafin,
    },
    {
      name: "Kalahari-Resorts",
      logo: kalahari,
    },
    {
      name: "Loyalty-Insurance",
      logo: loyalty,
    },
    {
      name: "Marcel",
      logo: marcel,
    },
  ];

  // Duplicated the brands array to create seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <WidthConstraint className="overflow-hidden mb-40">
      <h3 className="text-3xl md:text-5xl md:leading-[38.3px] font-bold mb-5 md:mb-11 text-center">
        Trusted by
      </h3>
      {/* Marquee Container */}
      <div className="relative">
        {/* Intro and Exit Gradient overlays*/}
        {/* <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-primary-900 to-transparent z-50"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-primary-900 to-transparent z-50"></div> */}

        {/* Scrolling container */}
        <div className="flex overflow-hidden">
          <div
            className="flex animate-marquee hover:animate-pause"
            style={{
              animationDuration: "40s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-200"
              >
                {!failedImages.has(brand.name) ? (
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    onError={() => handleImageError(brand.name)}
                  />
                ) : (
                  <span className="font-semibold text-gray-400 text-sm">
                    {brand.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LATEST UPDATE SECTION */}
      <section className="px-5 mt-24 sm:mt-32 md:mt-36 lg:mt-40 flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="font-black sm:text-5xl text-3xl md:text-7xl lg:text-[80px] md:leading-[67.2px] -tracking-[0.58px]">
            Get Our Latest Updates
          </h1>
          <p className="text-xl sm:text-2xl md:text-[32px] md:leading-[32px] -tracing-[0.2px] mt-4 sm:mt-6">
            We are working on some awesome product. Be the first to know when
            they are ready
          </p>
        </div>
        <div className="flex w-full items-center gap-x-2 sm:gap-13 mt-5 sm:mt-12  md:mt-16 border border-gray-400 rounded-[32px] max-w-80 sm:max-w-[440px] max-[309px]:flex-col max-[309px]:rounded-2xl">
          <Input
            type="email"
            placeholder="enter your email"
            className="ml-1 py-[24px] border-0 max-w-60 font-primary text-base md:text-xl leading-[160%] tracking-[0.2px] text-primary-black caret-primary-color focus-within:outline-0 focus-within:ring-0 focus:outline-0 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 placeholder:text-primary-black placeholder:text-base md:placeholder:text-xl placeholder:font-primary placeholder:leading-[160%] placeholder:tracking-[0.2px] max-[309px]:max-w-full max-[309px]:text-center"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Button
            type="submit"
            className="flex justify-center items-center max-w-[154px] py-[14.5px] px-4 sm:px-7 bg-primary-color text-white rounded-[30px] border-0 text-base font-extrabold leading-[20.3px] max-[309px]:max-w-full max-[309px]:w-full max-[309px]:rounded-xl"
          >
            <span>Subscribe</span>{" "}
            <ArrowRight color="#F2F2F2" className="mt-1" />
            <Link href={""}></Link>
          </Button>
        </div>
      </section>
    </WidthConstraint>
  );
};

export default BrandMarquee;
