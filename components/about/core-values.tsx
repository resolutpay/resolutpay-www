"use client";
import { Check } from "lucide-react";
import Image from "next/image";
import { coreValues } from "../../lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function CoreValues() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 w-full">
      <Accordion type="single" collapsible className="space-y-4">
        {coreValues.map((value) => (
          <AccordionItem
            key={value.id}
            value={`value-${value.id}`}
            className="relative rounded-lg transition-all duration-300 ease-in-out border-0 data-[state=open]:bg-white/20 backdrop-blur-sm"
          >
            <AccordionTrigger className="w-full leading-relaxed justify-start items-center px-6 py-4 rounded-lg shadow-none transition-all duration-300 ease-in-out bg-transparent text-primary-100 hover:bg-white/5 data-[state=open]:bg-[#D2FFFC] data-[state=open]:text-[#063972] group hide-accordion-chevron">
              <div className="flex items-center w-full">
                <div className="size-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ease-in-out bg-[#D2FFFC] group-data-[state=open]:bg-primary-color">
                  <Check
                    size={14}
                    className="transition-all duration-300 ease-in-out text-primary-color group-data-[state=open]:text-white"
                  />
                </div>
                <span className="ml-4 text-xl font-semibold">{value.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 pt-2">
              <div className="text-primary-100/90 text-lg leading-relaxed">
                {value.content}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Image src="/assets/plant.svg" alt="plant" width={550} height={550} />
    </div>
  );
}
