import Image from "next/image";

const FlexItem = ({
  image,
  title,
  description,
  reverse = false,
}: {
  image: string;
  title: string;
  description: string;
  reverse?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col items-center lg:gap-x-20 ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="w-full lg:w-[50%]">
        <Image
          src={image}
          alt={title}
          className="max-[639px]:max-w-3/4 mx-auto"
          width={400}
          height={300}
        />
      </div>
      <div className="w-full lg:w-[50%] space-y-5">
        <h1 className="font-bold text-5xl md:text-6xl lg:text-8xl">{title}</h1>
        <p className=" text-xl xl:text-2xl text-center sm:text-left">{description}</p>
      </div>
    </div>
  );
};

export default FlexItem;
