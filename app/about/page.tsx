import WidthConstraint from "@/components/width-constraint";
import Image from "next/image";
import React from "react";
import pci from "../../public/assets/pci-insight.svg";
import rocket from "../../public/assets/illustrations/rocket.svg";
import bulb from "../../public/assets/illustrations/bulb-mission.svg";
import { teams } from "../../lib/constants";
import Link from "next/link";
import Rithm from "@/components/about/core-values";
import corebg from "../../public/assets/core-values-bg.svg";
import ring from "../../public/assets/head-ring.svg";

const About = () => {
  return (
    <>
      <WidthConstraint className="overflow-hidden">
        {/* About US */}
        <section className=" mt-35 sm:mt-48 px-5 flex flex-col items-center">
          <div className="relative flex flex-col items-center">
            <h1 className="font-canaro-local font-medium leading-[117%] text-4xl sm:text-6xl md:text-7xl text-primary-900 text-center">
              About US
            </h1>
            <Image src={pci} alt="Security Standards" className="mt-5" />
            <Image src={ring} alt="ring" className="absolute scale-140" />
          </div>
          {/* Mission-Vison Grid */}
          <div className="grid sm:grid-cols-2 mt-20 sm:mt-40 gap-x-12 md:gap-y-10 items-center">
            <Image
              src={rocket}
              alt="Rocket"
              className="max-[639px]:max-w-3/4 mx-auto"
            />
            <div className="lg:ml-15">
              <h1 className="font-bold text-4xl text-center sm:text-left  sm:text-5xl md:text-7xl lg:text-8xl sm:leading-[97.2px]">
                Our Vision
              </h1>
              <p className=" text-xl md:text-[32px] sm:leading-[38.3px] text-center sm:text-left">
                To become a global leader in digital financial innovation,
                seamlessly integrating financial solutions across industries and
                geographies, while empowering individuals and businesses to
                achieve financial health and prosperity.
              </p>
            </div>
            <div className="lg:ml-15">
              <h1 className="font-bold text-4xl text-center sm:text-left  sm:text-5xl md:text-7xl lg:text-8xl sm:leading-[97.2px]">
                Our Mission
              </h1>
              <p className=" text-xl md:text-[32px] sm:leading-[38.3px] text-center sm:text-left">
                To revolutionize the global financial ecosystem by delivering
                accessible, innovative, and customer-centric digital solutions
                that simplify financial management, enhance liquidity, and
                unlock the full potential of financial well-being for all.
              </p>
            </div>
            <Image
              src={bulb}
              alt="Light Bulb"
              className="max-[639px]:row-start-3 max-[639px]:max-w-3/4 mx-auto"
            />
          </div>
        </section>

        {/* Team */}
        <section className=" mt-15 md:mt-8">
          <h1 className="font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl sm:leading-[97.2px] text-center">
            Team
          </h1>
          {/* Teams Grid Container */}
          <div className="grid min-[500px]:grid-cols-2 md:grid-cols-3 md:gap-x-[152px] gap-y-14 mt-8 md:mt-10 lg:mt-[89px] px-5">
            {/* Cards */}
            {teams.map((person, index) => {
              return (
                <div key={index}>
                  <div className="rounded-full bg-primary-700 md:w-full size-30 sm:size-40 min-[770px]:size-55 min-[854px]:size-64 md:size-55 lg:h-80 mx-auto">
                    {/* <Image
                      src={person.image}
                      alt={person.name}
                      className="rounded-full w-full object-cover"
                    /> */}
                  </div>
                  <h5 className="mt-6 font-tertiary font-medium text-2xl text-center text-primary-900">
                    {person.name}
                  </h5>
                  <div className="mx-auto w-fit mt-2.5 ">
                    <Link
                      href={person.portfolio}
                      className="font-tertiary text-xl text-center text-feminine-gray"
                    >
                      Portfolio
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </WidthConstraint>

      {/* Core Values(RITHM) */}
      <section className="bg-[linear-gradient(270deg,#21bbec_0%,#0068c9_39%,#130d3a_100%)] w-full relative overflow-hidden mt-36 px-5 py-20 ">
        <Image
          src={corebg}
          alt="plant"
          className="absolute right-0  bottom-0 w-[45vw]"
        />
        <WidthConstraint className="px-5">
          <h1 className="font-bold text-3xl sm:text-5xl md:text-7xl lg:text-8xl md:leading-[97.2px] text-primary-100 text-center mb-10 md:mb-36">
            Core Values (RITHM)
          </h1>
          <Rithm />
        </WidthConstraint>
      </section>
    </>
  );
};

export default About;
