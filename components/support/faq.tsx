"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/constants";

export default function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full sm:mt-14 mt-5" defaultValue="">
      {faqs.map((faq, index) => {
        return (
          <AccordionItem value={faq.value} key={index}>
            <AccordionTrigger className="text-primary-100 font-bold text-lg sm:text-2xl">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className="text-black-200 text-base">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
