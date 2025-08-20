import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import PageHeader from "../ui/page-header";
import WidthConstraint from "../width-constraint";

const Hero = () => {
  return (
    <section
      role="banner"
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <WidthConstraint className="flex flex-col gap-10 justify-center py-20 items-center text-center">
        <div className="relative">
          <PageHeader
            title="Empowering Africa with Smart Finance Solutions"
            description="Provide innovative payment, payroll, and lending tools that help companies
            streamline operations, empower employees, and grow sustainably."
            showCertification={false}
            usePadding={false}
          />
        </div>
        <div className="flex gap-5 flex-col sm:flex-row">
          <Button className="w-[250px]">
            <Link href={""}> Explore Our Solutions</Link>
          </Button>
          <Button className="w-[250px]" variant="outline">
            <Link href="/sign-in">Get Started</Link>
          </Button>
        </div>
        <div className="mt-12">
          <Image
            src="/assets/pci-insight.svg"
            alt="Security standards"
            width={200}
            height={100}
          />
        </div>
      </WidthConstraint>
    </section>
  );
};
export default Hero;
