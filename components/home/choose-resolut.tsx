import Image from "next/image";
import { chooseResolutCards } from "../../lib/constants";
import WidthConstraint from "../width-constraint";

const ChooseResolut = () => {
  return (
    <section className="py-20 lg:py-32">
      <WidthConstraint className="space-y-10">
        <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-primary-900">
          Why choose ReSolut
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-10 lg:gap-16">
          {chooseResolutCards.map((card, index) => {
            return (
              <div
                key={index}
                className="mx-auto space-y-2 max-w-[392px] flex flex-col items-center justify-center text-center"
              >
                <Image src={card.imgSrc} alt={card.imgAlt} width={100} height={100} />
                <p className="font-medium text-2xl text-primary-900">{card.title}</p>
                <p className="text-feminine-gray">{card.description}</p>
              </div>
            );
          })}
        </div>
      </WidthConstraint>
    </section>
  );
};

export default ChooseResolut;
