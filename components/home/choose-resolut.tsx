import Image from "next/image";
import { chooseResolutCards } from "../../lib/constants";
import WidthConstraint from "../width-constraint";

const ChooseResolut = () => {
  return (
    <WidthConstraint>
      <section className="py-20 lg:py-32">
        <h3 className="font-bold text-3xl sm:text-[40px] text-primary-900 mb-10 text-center md:mb-16">
          Why choose ReSolut
        </h3>
        <div className="grid min-[557px]:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 px-5">
          {chooseResolutCards.map((card, index) => {
            return (
              <div
                key={index}
                className="mx-auto space-y-2 max-w-[392px] flex flex-col sm:block justify-center items-center text-center sm:text-left"
              >
                <div className="flex w-full justify-center md:max-w-4/5">
                  <Image src={card.imgSrc} alt={card.imgAlt} width={100} height={100} />
                </div>
                <p className="font-medium text-2xl text-primary-900 md:text-center md:max-w-4/5">
                  {card.title}
                </p>
                <p className="text-feminine-gray md:max-w-4/5 text-center">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </WidthConstraint>
  );
};

export default ChooseResolut;
