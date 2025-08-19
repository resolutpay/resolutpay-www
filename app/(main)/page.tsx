import BrandMarquee from "@/components/home/brands-latest-updates";
import ChooseResolut from "@/components/home/choose-resolut";
import Hero from "@/components/home/hero";
import Ipap from "@/components/home/ipap";
import Solutions from "@/components/home/unique-challenges";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Solutions />
      <ChooseResolut />
      <Ipap />
      <BrandMarquee />
    </main>
  );
}
