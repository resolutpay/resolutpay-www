import Image from "next/image";
import { solution } from "../../lib/constants";
import WidthConstraint from "../width-constraint";

const Solutions = () => {
  return (
    <section className="">
      <WidthConstraint className="space-y-20">
        <div className="space-y-10">
          <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-black mb-5">
            We understand that African face unique challenges
          </h3>
          <p className="text-xl md:text-2xl xl:text-3xl text-center">
            From managing employee benefits to accessing fast, affordable
            financing. Our mission is simple: deliver technology-driven
            solutions that help businesses run smarter, pay faster, and retain
            their best people.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {solution.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-primary-800 space-y-2 text-primary-100 flex flex-col justify-between rounded-3xl pt-10 sm:pt-16 overflow-hidden hover:scale-108 transition-all duration-600 ease-in-out hover:shadow-[4px_4px_7px_0px_rgba(0,0,0,0.49)] max-w-104 mx-auto last:md:col-span-2 last:lg:col-span-1"
              >
                <p className="text-lg sm:text-xl lg:text-2xl text-white px-6">
                  {item.title}
                </p>
                <p className="sm:text-xl text-primary-100 px-6">
                  {item.description}
                </p>
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={300}
                  height={300}
                  className="size-2/4 ml-auto md:mt-10 min-[350px]:max-[1024px]:size-2/3 lg:h-full"
                />
              </div>
            );
          })}
        </div>
      </WidthConstraint>
    </section>
  );
};

export default Solutions;
