"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { emailFormSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { Input } from "../components/ui/input";
import { Button } from "./ui/button";
import WidthConstraint from "./width-constraint";

const EmailUpdates = () => {
  const emailForm = useForm<z.infer<typeof emailFormSchema>>({
    resolver: zodResolver(emailFormSchema),
    mode: "all",
    defaultValues: {
      email: "",
    },
  });

  // Form Submit Handler
  function onSubmit(values: z.infer<typeof emailFormSchema>) {
    console.log(values);
  }
  return (
    <WidthConstraint>
      {/* LATEST UPDATE SECTION */}
      <section className="px-5 py-20 lg:py-32 flex flex-col justify-center items-center">
        <div className="text-center space-y-4">
          <h1 className="font-black sm:text-5xl text-3xl lg:text-7xl -tracking-[0.58px]">
            Get Our Latest Updates
          </h1>
          <p className="text-xl md:text-2xl xl:text-3xl mx-auto max-w-2xl">
            We are working on some awesome product. Be the first to know when they are
            ready
          </p>
        </div>

        {/* Email Submission Form */}
        <Form {...emailForm}>
          <form onSubmit={emailForm.handleSubmit(onSubmit)}>
            <FormField
              control={emailForm.control}
              name="email"
              render={({ field }) => (
                <FormItem className="place-items-center">
                  <div className="flex items-center gap-x-2 sm:gap-13 mt-5 sm:mt-12 md:mt-16 border border-gray-400 rounded-[32px] max-w-80 sm:max-w-[440px] max-[309px]:flex-col max-[309px]:rounded-2xl">
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="enter your email"
                        className="ml-1 py-[24px] border-0 max-w-60 text-base md:text-xl tracking-[0.2px] text-primary-black caret-primary-color focus-within:outline-0 focus-within:ring-0 focus:outline-0 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 placeholder:text-primary-black placeholder:text-base md:placeholder:text-xl max-[309px]:max-w-full max-[309px]:text-center shadow-none"
                      />
                    </FormControl>
                    <Button
                      type="submit"
                      disabled={
                        !emailForm.formState.isValid || emailForm.formState.isSubmitting
                      }
                    >
                      <p>Subscribe</p>
                      <ArrowRight color="#F2F2F2" className="mt-1" />
                    </Button>
                  </div>
                  <FormMessage className="sm:text-lg md:text-xl" />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </section>
    </WidthConstraint>
  );
};

export default EmailUpdates;
