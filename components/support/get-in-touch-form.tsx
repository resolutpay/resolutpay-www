"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  //   FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { formFields } from "@/lib/constants";

const getInTouchFormSchema = z
  .object({
    fullname: z
      .string()
      .trim()
      .min(6, { message: "Full name must be at least 6 characters long." })
      .max(50, { message: "Full name must be at most 50 characters long." }),

    companyname: z
      .string()
      .trim()
      .min(2, { message: "Company name must be at least 2 characters long." }),

    email: z
      .email({ message: "Please enter a valid email address." })
      .toLowerCase()
      .trim(),

    message: z
      .string()
      .trim()
      .min(5, { message: "Message must be at least 5 characters long." })
      .max(500, { message: "Message must not exceed 500 characters." }),
  })
  .required();

const GetInTouch = () => {
  // Form Definition
  const getInTouchForm = useForm<z.infer<typeof getInTouchFormSchema>>({
    resolver: zodResolver(getInTouchFormSchema),
    mode: "onChange",
    defaultValues: {
      fullname: "",
      companyname: "",
      email: "",
      message: "",
    },
  });
  const { isValid, isSubmitting } = getInTouchForm.formState;
  // Submit Handler
  function onSubmit(values: z.infer<typeof getInTouchFormSchema>) {}
  return (
    <Form {...getInTouchForm}>
      <form
        onSubmit={getInTouchForm.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        {formFields.map((domain, index) => {
          return (
            <FormField
              key={index}
              control={getInTouchForm.control}
              name={domain.id}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <p className="font-auxilary sm:text-xl sm:leading-[31.1px] text-form-grey">
                      {domain.label}
                      <span className="text-asterik-red sm:text-2xl sm:leading-[40px] sm:mb-7 pl-1 sm:pl-0">
                        *
                      </span>
                    </p>
                  </FormLabel>
                  <FormControl>
                    {domain.input ? (
                      <Input
                        {...field}
                        className="border-0 rounded-none border-b-[1.5px] border-b-form-grey shadow-none font-auxilary md:text-xl md:leading-[31.1px] text-sm sm:text-base"
                      />
                    ) : (
                      <Textarea
                        {...field}
                        className="border-0 rounded-none border-b-[1.5px] border-b-form-grey shadow-none"
                      />
                    )}
                  </FormControl>
                  {/* <FormDescription/> */}
                  <FormMessage className="font-auxilary font-medium" />
                </FormItem>
              )}
            />
          );
        })}
        <Button
          type="submit"
          className="w-full rounded-md text-base sm:rounded-none max-w-52 enabled:bg-gradient-to-r from-[#2A7B9B] via-[#57C75D] to-[#18DEC7] disabled:bg-black disabled:text-white py-3 sm:px-6 sm:py-[18px] font-auxilary font-bold text-cyan-900 sm:text-2xl disabled:font-medium lg:mt-10 hover:scale-90 transition-transform transform duration-500 ease-in-out"
          disabled={!isValid || isSubmitting}
        >
          Send message
        </Button>
      </form>
    </Form>
  );
};

export default GetInTouch;
