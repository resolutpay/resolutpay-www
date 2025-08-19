"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { OTPFormSchema } from "@/lib/schemas";

export default function OTPVerificationForm() {
  const formOTP = useForm<z.infer<typeof OTPFormSchema>>({
    resolver: zodResolver(OTPFormSchema),
    defaultValues: {
      pin: "",
    },
  });

  function onSubmit(data: z.infer<typeof OTPFormSchema>) {
    console.log(data);
  }

  return (
    <section className="min-h-screen w-full sm:max-w-[362px] mx-auto md:mt-72 mt-20 sm:mt-40 px-3 sm:px-0">
      <div>
        <h1 className="text-[#0C222F] font-bold text-4xl">Two Steps Verification</h1>
        <p className="text-[#0C222F] mt-2 text-lg">
          We sent a verification code to your email. Enter the code from the inbox in the
          field below.
        </p>
        <p className="font-bold">email@gmail.com</p>
      </div>

      {/* OTP Form */}
      <Form {...formOTP}>
        <form
          onSubmit={formOTP.handleSubmit(onSubmit)}
          className="space-y-6 mt-8
        "
        >
          <FormField
            control={formOTP.control}
            name="pin"
            render={({ field }) => (
              <FormItem>
                <p className="font-bold text-lg">Type your 6 digits security code</p>
                <FormControl>
                  <InputOTP maxLength={6} {...field} className="justify-center gap-2">
                    <InputOTPGroup>
                      {Array.from({ length: 6 }).map((_, i) => (
                        <InputOTPSlot
                          key={i}
                          index={i}
                          className="w-[54px] h-[42px] rounded-[8px] border border-gray-300 text-lg"
                        />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={!formOTP.formState.isValid || formOTP.formState.isSubmitting}
          >
            Verify My Account
          </Button>
        </form>
      </Form>

      {/* Resend link */}
      <p className="text-base font-bold">
        Didn&apos;t get the code?{" "}
        <Button variant="link" type="button" className="text-sky-500">
          Resend
        </Button>
      </p>
    </section>
  );
}
