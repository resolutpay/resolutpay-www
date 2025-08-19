import { cn } from "@/lib/utils";
import Image from "next/image";

const PageHeader = ({
  title,
  description,
  showRing = true,
  showCertification = true,
  usePadding = true,
}: {
  title: string;
  description?: string;
  showRing?: boolean;
  showCertification?: boolean;
  usePadding?: boolean;
}) => {
  return (
    <div className={cn(usePadding && "py-20 lg:py-32")}>
      <div className="relative flex flex-col items-center">
        <div className="space-y-3">
          <h1 className="font-canaro-local font-medium text-4xl sm:text-6xl md:text-7xl text-primary-900 text-center">
            {title}
          </h1>
          {description && (
            <p className="text-xl lg:text-2xl xl:text-3xl text-center max-w-4xl mx-auto font-medium">
              {description}
            </p>
          )}
        </div>
        {showCertification && (
          <Image
            src="/assets/pci-insight.svg"
            alt="Security Standards"
            className="mt-5"
            width={200}
            height={100}
          />
        )}
        {showRing && (
          <Image
            src="/assets/head-ring.svg"
            alt="ring"
            className="absolute scale-110 sm:scale-140 top-0 left-[50%] -translate-x-1/2"
            width={300}
            height={300}
          />
        )}
      </div>
    </div>
  );
};

export default PageHeader;
