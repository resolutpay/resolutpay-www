import React from "react";
import WidthConstraint from "../width-constraint";
import Image from "next/image";
import { solution } from "../../lib/constants";

const Solutions = () => {
  return (
    <WidthConstraint>
      <section className=" mt-10 sm:mt-44 md:mt-0">
        <div className="lg:w-4/5 lg:mx-auto mb-10 sm:mb-20 px-5 ">
          <h3 className="font-bold text-2xl sm:text-3xl  md:text-4xl lg:text-5xl leading-[38.3px] sm:text-center text-black mb-5">
            We understand that African face unique challenges
          </h3>
          <p className="sm:text-center text-lg sm:text-2xl lg:text-3xl leading-[38.3px] text-black lg:px-10">
            From managing employee benefits to accessing fast, affordable
            financing. Our mission is simple: deliver technology-driven
            solutions that help businesses run smarter, pay faster, and retain
            their best people.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols- lg:grid-cols-3 px-5 gap-x-6 md:mx-7 gap-y-10">
          {solution.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-primary-800 text-primary-100 flex flex-col justify-between rounded-[20px] pt-10 sm:pt-16 max-w-lg overflow-hidden mx-auto hover:scale-90 transform transition-all duration-700 ease-in-out hover:shadow-lg hover:shadow-black"
              >
                <p className="font-secondary leading-[36px] text-lg sm:text-xl lg:text-2xl text-white px-6 mb-2">
                  {item.title}
                </p>
                <p className="font-secondary sm:text-xl leading-[30px] text-primary-100 px-6">
                  {item.description}
                </p>
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="size-2/4 ml-auto md:mt-10 min-[350px]:max-[1024px]:size-2/3"
                />
              </div>
            );
          })}
        </div>
      </section>
    </WidthConstraint>
  );
};

export default Solutions;
