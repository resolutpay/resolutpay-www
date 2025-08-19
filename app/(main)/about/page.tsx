import CoreValues from "@/components/about/core-values";
import FlexItem from "@/components/about/flex-item";
import TeamSection from "@/components/about/team-section";
import PageHeader from "@/components/ui/page-header";
import WidthConstraint from "@/components/width-constraint";
import { ABOUT_US_FLEX_ITEMS, teams } from "@/lib/constants";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-20 lg:py-32">
      <WidthConstraint className="pb-20 space-y-20  ">
        <section className="flex flex-col items-center">
          <PageHeader title="About US" />
          <div>
            {ABOUT_US_FLEX_ITEMS.map((item, index) => {
              return (
                <FlexItem
                  key={index}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  reverse={index % 2 === 1}
                />
              );
            })}
          </div>
        </section>
        <TeamSection teams={teams} />
      </WidthConstraint>

      <section className="bg-[linear-gradient(270deg,#21bbec_0%,#0068c9_39%,#130d3a_100%)] w-full relative overflow-hidden mt-36 px-5 py-20 ">
        <Image
          src="/assets/circles.svg"
          alt="circles"
          className="absolute top-0 right-0"
          width={600}
          height={600}
        />
        <WidthConstraint className="space-y-10">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-8xl text-center text-white">
            Core Values (RITHM)
          </h1>
          <CoreValues />
        </WidthConstraint>
      </section>
    </section>
  );
};

export default About;
