import Image from "next/image";

const PageHeader = ({
  title,
  description,
  showRing = true,
}: {
  title: string;
  description?: string;
  showRing?: boolean;
}) => {
  return (
    <div className="py-20 lg:py-32">
      <div className="relative flex flex-col items-center">
        <h1 className="font-canaro-local font-medium sm:leading-[117%] text-4xl sm:text-6xl md:text-7xl text-primary-900 text-center sm:mb-10">
          {title}
        </h1>
        {description && (
          <p className="text-xl xl:text-2xl text-center sm:text-left">{description}</p>
        )}
        <Image
          src="/assets/pci-insight.svg"
          alt="Security Standards"
          className="mt-5"
          width={200}
          height={100}
        />
        {showRing && (
          <Image
            src="/assets/head-ring.svg"
            alt="ring"
            className="absolute scale-140 top-0 left-[50%] -translate-x-1/2"
            width={300}
            height={300}
          />
        )}
      </div>
    </div>
  );
};

export default PageHeader;
