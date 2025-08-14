"use client";
import Image from "next/image";
import { JSX, useEffect } from "react";
import WidthConstraint from "../ui/width-constraint";
import { Brand } from "@/lib/interfaces";
import { urlFor } from "@/lib/image-builder";

export default function Brands({ brands }: { brands: Brand[] }): JSX.Element {
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
      <WidthConstraint className="max-w-[1400px]">
        <div className="scroller" data-animated="true" data-speed="slow">
          <ul className="flex scroller__inner flex-wrap py-4 gap-[20px]">
            {[...brands, ...brands].map((store, index) => (
              <Image
                key={store.title + index}
                alt={store.title}
                width={120}
                height={70}
                className="h-[70px] object-contain"
                src={urlFor(store.image).url()}
              />
            ))}
          </ul>
        </div>
      </WidthConstraint>
    </section>
  );
}
