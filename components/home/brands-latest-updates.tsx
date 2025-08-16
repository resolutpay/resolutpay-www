"use client";
import React, { useState } from "react";
import WidthConstraint from "../width-constraint";
import Image from "next/image";
import { brands } from "../../lib/constants";

const BrandMarquee = () => {
  const [failedImages, setFailedImages] = useState(new Set());
  const handleImageError = (brandName: string) => {
    setFailedImages((prev) => new Set([...prev, brandName]));
  };

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
    </WidthConstraint>
  );
};

export default BrandMarquee;
