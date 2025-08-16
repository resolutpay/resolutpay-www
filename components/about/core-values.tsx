"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import { coreValues } from "../../lib/constants";
import { Button } from "../ui/button";

export default function Rithm() {
  // state to track clicked item
  const [activeIndex, setActiveIndex] = useState<number>();

  // function to control item when clicked
  const toggleValue = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    //   Accordion Container
    <div className="w-fit pb-10">
      {coreValues.map((value) => (
        //  Each Value Container
        <div
          key={value.id}
          className={`relative rounded-[12px] ${
            activeIndex === value.id ? "bg-gray-100" : "bg-transparent"
          } `}
        >
          {/* FlexIndicator Button */}
          <Button
            onClick={() => toggleValue(value.id)}
            className={`w-full font-secondary font-extrabold text-xl leading-[30px] justify-start items-center pl-6 py-6 rounded-[12px] shadow-none transition-all duration-1000 ease-initial ${
              activeIndex === value.id
                ? "bg-primary-100 text-primary-900  hover:bg-primary-100"
                : "bg-transparent text-primary-100 hover:rotate-3 hover:bg-transparent"
            }`}
          >
            {/* Flex Item 1 (check mark in a circle) */}
            <div
              className={`size-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-1000 ease-initial ${
                activeIndex === value.id ? "bg-primary-color" : "bg-primary-100"
              }`}
            >
              <Check
                size={14}
                className={`transition-all duration-500 ${
                  activeIndex === value.id ? "text-white" : "text-primary-color"
                }`}
              />
            </div>
            {/* Flex Item 2 (Name of Core Value) */}
            <span>{value.title}</span>
          </Button>

          {/* Accordion Content */}
          <div
            className={`overflow-hidden transition-all duration-1000 ease-initial max-w-[634px] text-black px-7 text-xl pb-4 pt-1  ${
              activeIndex === value.id ? "h-auto opacity-100" : "h-0 opacity-0"
            }`}
          >
            {value.content}
          </div>
        </div>
      ))}
    </div>
  );
}
