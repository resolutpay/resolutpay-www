import React from "react";
import Hero from "@/components/home/hero";
import Solutions from "@/components/home/unique-challenges";
import ChooseResolut from "@/components/home/choose-resolut";
import Ipap from "@/components/home/ipap";
import BrandMarquee from "@/components/home/brands-latest-updates";

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <ChooseResolut />
      <Ipap />
      <BrandMarquee />
    </>
  );
}
