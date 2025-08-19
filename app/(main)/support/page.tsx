import FAQ from "@/components/support/faq";
import GetInTouch from "@/components/support/get-in-touch-form";
import WidthConstraint from "@/components/width-constraint";
import Image from "next/image";
import Link from "next/link";

const Support = () => {
  return (
    <>
      <WidthConstraint className="overflow-hidden px-5 sm:px-10 lg:px-0">
        {/* Support */}
        <section className=" mt-35 sm:mt-48 px-5 flex flex-col items-center">
          <div className="relative flex flex-col items-center">
            <h1 className="font-canaro-local font-medium md:leading-[117%] text-4xl sm:text-6xl md:text-7xl text-primary-900 text-center mb-8 md:mb-10">
              Support
            </h1>
            <Link href={""}>
              <Image
                src="/assets/pci-insight.svg"
                alt="Security Standards"
                className="mt-5"
                width={200}
                height={100}
              />
            </Link>
            <Image
              src="/assets/head-ring.svg"
              alt="ring"
              className="absolute scale-140"
              width={300}
              height={300}
            />
          </div>
        </section>

        {/* Get In Touch Form */}
        <section className=" mt-10 sm:mt-32 md:mt-40 lg:mt-[168px] max-w-[907px] mx-auto">
          <div className=" mb-8 sm:mb-14">
            <h1 className="text-center font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl md:-tracking-[2%]">
              Get in Touch
            </h1>
            <p className="text-lg mt-2  sm:mt-6 sm:text-[32px] md:leading-[40px] text-black-400 max-w-[632px] sm:text-center">
              Got Questions? Our team is happy to answer all your technical questions.
              Please call us any time.
            </p>
          </div>
          <GetInTouch />
        </section>
      </WidthConstraint>

      {/* FAQ */}
      <section className="pt-10 md:pt-16 mt-16 pb-48 bg-[linear-gradient(270deg,#21bbec_0%,#0068c9_39%,#130d3a_100%)] w-full relative overflow-hidden">
        <Image
          src="/assets/circles.svg"
          alt="circles"
          className="absolute inset-x-3/5 -inset-y-1"
          width={600}
          height={600}
        />
        <WidthConstraint className="px-5 sm:px-10 lg:px-0">
          <h1 className="font-bold text-2xl sm:leading-[150%] text-primary-100 text-center md:text-7xl sm:text-5xl lg:text-8xl">
            Frequently Asked Questions
          </h1>
          <p className="text-sm mt-4 md:mt-0 sm:text-lg sm:leading-[150%] text-center text-black-100 font-light">
            Still you have any questions? Contact our Team via support@resolutfinance.com
          </p>
          <FAQ />
        </WidthConstraint>
      </section>
    </>
  );
};

export default Support;
