import FAQ from "@/components/support/faq";
import GetInTouch from "@/components/support/get-in-touch-form";
import PageHeader from "@/components/ui/page-header";
import WidthConstraint from "@/components/width-constraint";
import Image from "next/image";

const Support = () => {
  return (
    <section className="py-20 lg:py-32">
      <WidthConstraint className="pb-20">
        <PageHeader title="Support" />
        <section className="max-w-3xl space-y-10 mx-auto">
          <div className="space-y-4">
            <h1 className="text-center font-bold text-5xl md:text-6xl lg:text-8xl ">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl xl:text-3xl text-black-400 max-w-2xl mx-auto text-center">
              Got Questions? Our team is happy to answer all your technical questions.
              Please call us any time.
            </p>
          </div>
          <GetInTouch />
        </section>
      </WidthConstraint>

      <section className="bg-[linear-gradient(270deg,#21bbec_0%,#0068c9_39%,#130d3a_100%)] w-full relative overflow-hidden py-20 lg:py-32">
        <Image
          src="/assets/circles.svg"
          alt="circles"
          className="absolute top-0 right-0"
          width={600}
          height={600}
        />
        <WidthConstraint className="space-y-2">
          <h1 className="font-bold text-3xl md:text-6xl lg:text-7xl text-primary-100 text-center ">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-center text-black-100 font-light">
            Still you have any questions? Contact our Team via support@resolutfinance.com
          </p>
          <FAQ />
        </WidthConstraint>
      </section>
    </section>
  );
};

export default Support;
