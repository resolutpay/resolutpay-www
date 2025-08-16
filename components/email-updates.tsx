"use client";
import React, { useState } from "react";
import WidthConstraint from "./width-constraint";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Input } from "../components/ui/input";

const EmailUpdates = () => {
  const [email, setEmail] = useState<string>();

  return (
    <WidthConstraint>
      {/* LATEST UPDATE SECTION */}
      <section className="px-5 mt-24 sm:mt-32 md:mt-36 lg:mt-40 flex flex-col justify-center items-center mb-40">
        <div className="text-center">
          <h1 className="font-black sm:text-5xl text-3xl md:text-7xl lg:text-[80px] md:leading-[67.2px] -tracking-[0.58px]">
            Get Our Latest Updates
          </h1>
          <p className="text-xl sm:text-2xl md:text-[32px] md:leading-[32px] -tracing-[0.2px] mt-4 sm:mt-6">
            We are working on some awesome product. Be the first to know when
            they are ready
          </p>
        </div>
        {/* Email Submission Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex w-full items-center gap-x-2 sm:gap-13 mt-5 sm:mt-12 md:mt-16 border border-gray-400 rounded-[32px] max-w-80 sm:max-w-[440px] max-[309px]:flex-col max-[309px]:rounded-2xl"
        >
          <Input
            type="email"
            placeholder="enter your email"
            className="ml-1 py-[24px] border-0 max-w-60 font-primary text-base md:text-xl leading-[160%] tracking-[0.2px] text-primary-black caret-primary-color focus-within:outline-0 focus-within:ring-0 focus:outline-0 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 placeholder:text-primary-black placeholder:text-base md:placeholder:text-xl placeholder:font-primary placeholder:leading-[160%] placeholder:tracking-[0.2px] max-[309px]:max-w-full max-[309px]:text-center shadow-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            className="flex justify-center items-center max-w-[154px] py-[14.5px] px-4 sm:px-7 bg-primary-color text-white rounded-[30px] border-0 text-base font-extrabold leading-[20.3px] max-[309px]:max-w-full max-[309px]:w-full max-[309px]:rounded-xl"
          >
            <p>Subscribe</p>
            <ArrowRight color="#F2F2F2" className="mt-1" />
          </Button>
        </form>
      </section>
    </WidthConstraint>
  );
};

export default EmailUpdates;
