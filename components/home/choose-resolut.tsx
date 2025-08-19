import React from "react";
import Image from "next/image";
import WidthConstraint from "../width-constraint";
import { chooseResolutCards } from "../../lib/constants";

const ChooseResolut = () => {
  return (
    <WidthConstraint>
      <section className="mt-20 sm:mt-48">
        <h3 className="font-bold text-3xl sm:text-[40px] text-primary-900 mb-10 text-center md:mb-16">
          Why choose ReSolut
        </h3>
        <div className="grid min-[557px]:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 px-5">
          {chooseResolutCards.map((card, index) => {
            return (
              <div
                key={index}
                className="mx-auto max-w-[392px] flex flex-col sm:block justify-center items-center text-center sm:text-left group"
              >
                <div className="flex w-full justify-center md:max-w-4/5 bg-amber-30">
                  {" "}
                  <Image
                    src={card.imgSrc}
                    alt={card.imgAlt}
                    className="group-hover:animate-[spin_1s_linear_1] transform transition-all duration-700 ease-initial"
                  />
                </div>
                <p className="font-medium text-2xl text-primary-900 mt-2 md:text-center md:max-w-4/5">
                  {card.title}
                </p>
                <p className="text-base text-feminine-gray mt-2 md:max-w-4/5 text-center">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </WidthConstraint>
  );
};

export default ChooseResolut;
