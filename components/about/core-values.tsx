"use client";
import { useState, useRef, useEffect } from "react";
import { Check } from "lucide-react";
import { coreValues } from "../../lib/constants";
import { Button } from "../ui/button";

export default function Rithm() {
  // state to track clicked item
  const [activeIndex, setActiveIndex] = useState<number>();
  const [heights, setHeights] = useState<{ [key: number]: number }>({});
  const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  // Calculate heights when component mounts
  useEffect(() => {
    const newHeights: { [key: number]: number } = {};
    coreValues.forEach((value) => {
      const element = contentRefs.current[value.id];
      if (element) {
        newHeights[value.id] = element.scrollHeight;
      }
    });
    setHeights(newHeights);
  }, []);

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
          className={`relative rounded-[12px] transition-all duration-500 ease-in-out ${
            activeIndex === value.id ? "bg-gray-100" : "bg-transparent"
          } `}
        >
          {/* FlexIndicator Button */}
          <Button
            onClick={() => toggleValue(value.id)}
            className={`w-full font-extrabold text-xl leading-[30px] justify-start items-center pl-6 py-6 rounded-[12px] shadow-none transition-all duration-500 ease-in-out ${
              activeIndex === value.id
                ? "bg-primary-100 text-primary-900 hover:bg-primary-100"
                : "bg-transparent text-primary-100 hover:scale-103  hover:bg-transparent"
            }`}
          >
            {/* Flex Item 1 (check mark in a circle) */}
            <div
              className={`size-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ease-in-out ${
                activeIndex === value.id ? "bg-primary-color" : "bg-primary-100"
              }`}
            >
              <Check
                size={14}
                className={`transition-all duration-500 ease-in-out ${
                  activeIndex === value.id ? "text-white" : "text-primary-color"
                }`}
              />
            </div>
            {/* Flex Item 2 (Name of Core Value) */}
            <span className="ml-3 text-2xl">{value.title}</span>
          </Button>

          {/* Accordion Content */}
          <div
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{
              height:
                activeIndex === value.id
                  ? `${heights[value.id] || 0}px`
                  : "0px",
              opacity: activeIndex === value.id ? 1 : 0,
            }}
          >
            <div
              ref={(el) => {
                contentRefs.current[value.id] = el;
              }}
              className="max-w-[634px] text-black px-7 text-xl pb-4 pt-1"
            >
              {value.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
