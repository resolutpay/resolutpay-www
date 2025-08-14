import React from "react";
import Hero from "../components/home/hero";
import Solutions from "../components/home/unique-challenges";
import ChooseResolut from "@/components/home/choose-resolut";

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <ChooseResolut />
    </>
  );
}
