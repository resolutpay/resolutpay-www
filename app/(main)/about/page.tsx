import Rithm from "@/components/about/core-values";
import WidthConstraint from "@/components/width-constraint";
import { teams } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      <WidthConstraint className="overflow-hidden">
        {/* About US */}
        <section className=" mt-35 sm:mt-48 px-5 flex flex-col items-center">
          <div className="relative flex flex-col items-center">
            <h1 className="font-canaro-local font-medium sm:leading-[117%] text-4xl sm:text-6xl md:text-7xl text-primary-900 text-center sm:mb-10">
              About US
            </h1>
            <Image
              src="/assets/pci-insight.svg"
              alt="Security Standards"
              className="mt-5"
              width={200}
              height={100}
            />
            <Image
              src="/assets/head-ring.svg"
              alt="ring"
              className="absolute scale-140"
              width={300}
              height={300}
            />
          </div>
          {/* Mission-Vison Grid */}
          <div className="grid sm:grid-cols-2 mt-20 sm:mt-40 gap-x-12 md:gap-y-10 items-center">
            <Image
              src="/assets/illustrations/rocket.svg"
              alt="Rocket"
              className="max-[639px]:max-w-3/4 mx-auto"
              width={400}
              height={300}
            />
            <div className="lg:ml-15">
              <h1 className="font-bold text-4xl text-center sm:text-left  sm:text-5xl md:text-7xl lg:text-8xl sm:leading-[97.2px]">
                Our Vision
              </h1>
              <p className=" text-xl sm:leading-[38.3px] text-center sm:text-left">
                To become a global leader in digital financial innovation, seamlessly
                integrating financial solutions across industries and geographies, while
                empowering individuals and businesses to achieve financial health and
                prosperity.
              </p>
            </div>
            <div className="lg:ml-15">
              <h1 className="font-bold text-4xl text-center sm:text-left  sm:text-5xl md:text-7xl lg:text-8xl sm:leading-[97.2px]">
                Our Mission
              </h1>
              <p className=" text-xl sm:leading-[38.3px] text-center sm:text-left">
                To revolutionize the global financial ecosystem by delivering accessible,
                innovative, and customer-centric digital solutions that simplify financial
                management, enhance liquidity, and unlock the full potential of financial
                well-being for all.
              </p>
            </div>
            <Image
              src="/assets/illustrations/bulb-mission.svg"
              alt="Light Bulb"
              className="max-[639px]:row-start-3 max-[639px]:max-w-3/4 mx-auto"
              width={400}
              height={300}
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
                  <h5 className="mt-6 font-medium text-2xl text-center text-primary-900">
                    {person.name}
                  </h5>
                  <div className="mx-auto w-fit mt-2.5 ">
                    <Link
                      href={person.portfolio}
                      className="text-xl text-center text-feminine-gray"
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
          src="/assets/core-values-bg.svg"
          alt="plant"
          className="absolute right-0  bottom-0 w-[45vw]"
          width={800}
          height={600}
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
