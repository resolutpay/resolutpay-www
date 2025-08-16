import React from "react";
import cloud from "../../public/assets/illustrations/cloud.svg";
import lightBulb2 from "../../public/assets/illustrations/light-bulb-2.svg";
import bolt from "../../public/assets/illustrations/lightning.svg";
import envelope from "../../public/assets/illustrations/mail.svg";
import shield from "../../public/assets/illustrations/shield.svg";
import user from "../../public/assets/illustrations/user.svg";
import Image from "next/image";
import WidthConstraint from "../width-constraint";
import doraLeft from "../../public/assets/dora-why-resolut-left.svg";
import doraRight from "../../public/assets/dora-why-resolut-right.svg";
import { div } from "framer-motion/client";

const ChooseResolut = () => {
  const chooseResolutCards = [
    {
      imgSrc: shield,
      imgAlt: "Shield icon",
      title: "Hourly settlements",
      description:
        "Don't wait for days before you get settled. Get your money into your account every hour.",
    },
    {
      imgSrc: bolt,
      imgAlt: "Lightning bolt icon",
      title: "Hourly settlements",
      description:
        "Don't wait for days before you get settled. Get your money into your account every hour.",
    },
    {
      imgSrc: user,
      imgAlt: "User icon",
      title: "Hourly settlements",
      description:
        "Don't wait for days before you get settled. Get your money into your account every hour.",
    },
    {
      imgSrc: envelope,
      imgAlt: "Envelope icon",
      title: "Hourly settlements",
      description:
        "Don't wait for days before you get settled. Get your money into your account every hour.",
    },
    {
      imgSrc: lightBulb2,
      imgAlt: "Light bulb icon",
      title: "Hourly settlements",
      description:
        "Don't wait for days before you get settled. Get your money into your account every hour.",
    },
    {
      imgSrc: cloud,
      imgAlt: "Cloud icon",
      title: "Hourly settlements",
      description:
        "Don't wait for days before you get settled. Get your money into your account every hour.",
    },
  ];

  return (
    <div className="w-full relative">
      <Image
        src={doraLeft}
        alt="Dora Vector Left"
        className=" absolute left-0 -top-2/3 drop-shadow-2xl drop-shadow-violet-300 -z-50"
      />
      <Image
        src={doraRight}
        alt="Dora Vector Right"
        className="absolute right-0 -top-2/3 drop-shadow-2xl drop-shadow-violet-400 -z-50"
      />

      <WidthConstraint>
        <section className="mt-20 sm:mt-48">
          <h3 className="font-tertiary font-bold text-3xl sm:text-[40px] text-primary-900 mb-10 text-center md:mb-16">
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
                  <p className="font-tertiary font-medium text-2xl text-primary-900 mt-2 md:text-center md:max-w-4/5">
                    {card.title}
                  </p>
                  <p className="font-tertiary text-base text-feminine-gray mt-2 md:max-w-4/5 text-center">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </WidthConstraint>
    </div>
  );
};

export default ChooseResolut;
