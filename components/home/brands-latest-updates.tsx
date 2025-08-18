"use client";
import { brands } from "@/lib/constants";
import Image from "next/image";
import { JSX, useEffect } from "react";
import WidthConstraint from "../width-constraint";

export default function Brands(): JSX.Element {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");
    function addAnimation(): void {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");
        const scrollerInner = scroller.querySelector(".scroller__inner");
        if (!scrollerInner) return;
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item: Element) => {
          const duplicatedItem = item.cloneNode(true) as Element;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
    addAnimation();
  }, []);

  return (
    <section className="w-full px-5 overflow-x-clip flex flex-col items-center justify-center gap-10 pt-10 pb-5 md:py-10 ">
      <WidthConstraint>
        <h3 className="text-3xl md:text-5xl md:leading-[38.3px] font-bold mb-5 md:mb-11 text-center">
          Trusted by
        </h3>
        <div className="scroller" data-animated="true" data-speed="slow">
          <ul className="flex scroller__inner flex-wrap py-4 gap-[20px]">
            {[...brands, ...brands].map((brand, index) => (
              <Image
                key={brand.name + index}
                alt={brand.name}
                width={120}
                height={70}
                className="h-[70px] object-contain"
                src={brand.logo}
              />
            ))}
          </ul>
        </div>
      </WidthConstraint>
    </section>
  );
}
