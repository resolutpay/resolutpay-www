"use client";
import React from "react";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { businessTypeOptions, developerOptions } from "@/lib/constants";
import CountryComboBox from "@/components/create-account/combo-box";
import { PhoneInput } from "@/components/create-account/phone-input";
import { PasswordInput } from "@/components/create-account/password-input";
import { RadioGroupField } from "@/components/create-account/radio-group";
import { formData } from "@/lib/constants";
import Link from "next/link";

const createAccountSchema = z
  .object({
    country: z.string().trim().min(2, "Country is required"),

    businessName: z
      .string()
      .trim()
      .min(2, "Business name must be at least 2 characters")
      .max(100, "Business name is too long"),

    firstName: z
      .string()
      .trim()
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name is too long"),

    lastName: z
      .string()
      .trim()
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name is too long"),

    email: z.email("Invalid email address").trim().toLowerCase(),

    phone: z.object({
      countryCode: z.string().regex(/^\+\d{1,4}$/, "Invalid country code"),
      number: z
        .string()
        .regex(/^\d{6,15}$/, "Phone number must be 6–15 digits"),
    }),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password is too long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[@$!%*?&#]/,
        "Password must contain at least one special character"
      ),

    businessType: z.enum(["starter", "registered"], {
      error: "Select a business type",
    }),

    isDeveloper: z.enum(["yes", "no"], {
      error: "Please indicate if you are a software developer",
    }),
  })
  .required();

const CreateAccount = () => {
  // Form Definition
  const createAccountForm = useForm<z.infer<typeof createAccountSchema>>({
    resolver: zodResolver(createAccountSchema),
    mode: "onChange",
    defaultValues: {
      country: "",
      businessName: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: { countryCode: "+1", number: "" },
      password: "",
      businessType: "starter",
      isDeveloper: "yes",
    },
  });
  const { isValid, isSubmitting, isSubmitSuccessful, errors } =
    createAccountForm.formState;
  // Submit Handler
  function onSubmit(values: z.infer<typeof createAccountSchema>) {}
  return (
    <Form {...createAccountForm}>
      <form
        onSubmit={createAccountForm.handleSubmit(onSubmit)}
        className="mx-auto w-11/12 lg:max-w-[400px] my-24 space-y-5"
      >
        {formData.map((domain, index) => (
          <FormField
            key={index}
            control={createAccountForm.control}
            name={domain.id}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold leading-5 text-sm text-[#57584E] mb-1 flex justify-between">
                  {domain.label}{" "}
                  {domain.id === "country" ? (
                    <Link href={""} className="text-[#3676C8]">
                      Other countries
                    </Link>
                  ) : (
                    ""
                  )}
                </FormLabel>
                <FormControl>
                  {domain.type === "input" && (
                    <Input
                      {...field}
                      value={field.value as string}
                      onChange={field.onChange}
                      className="rounded-[5px] h-10 font-inter"
                    />
                  )}
                </FormControl>
                <FormControl>
                  {domain.type === "password" && (
                    <PasswordInput
                      {...field}
                      value={field.value as string}
                      onChange={(e) => field.onChange(e.target.value)}
                      className="rounded-[5px] h-10 font-inter"
                    />
                  )}
                </FormControl>
                <FormControl>
                  {domain.type === "country" && (
                    <CountryComboBox
                      value={field.value as string}
                      onChange={field.onChange}
                    />
                  )}
                </FormControl>
                <FormControl>
                  {domain.type === "phone" && (
                    <PhoneInput
                      {...field}
                      value={
                        field.value as { countryCode: string; number: string }
                      }
                      onChange={field.onChange}
                    />
                  )}
                </FormControl>
                <FormControl>
                  {domain.type === "business" && (
                    <RadioGroupField
                      {...field}
                      value={field.value as string}
                      onChange={(val) => field.onChange(val)}
                      options={businessTypeOptions}
                      className={`text-[#57584E] pt-5 mb-2`}
                    />
                  )}
                </FormControl>
                <FormControl>
                  {domain.type === "developer" && (
                    <RadioGroupField
                      {...field}
                      value={field.value as string}
                      onChange={(val) => field.onChange(val)}
                      options={developerOptions}
                      className="flex space-x-6"
                    />
                  )}
                </FormControl>
                <FormMessage className="font-medium pb-3" />
              </FormItem>
            )}
          />
        ))}

        <Button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="disabled:bg-primary-color/20 w-full text-white bg-primary-color text-center rounded-[40px] border-0 font-inter font-bold leading-5 py-3.5 "
        >
          Create my account
        </Button>
        <div className="w-full mt-3.5 text-xs leading-5 text-[#57584E] px-2 font-inter">
          <p>
            By clicking the “Create your account” button, you agree to
            Resolut&apos;s{" "}
            <Link href={""} className="text-[#4576C2]">
              terms of acceptable use and Data Processing Agreement{" "}
            </Link>
          </p>
          <p className="mt-5">
            To learn more about how Resolut collects, uses and discloses your
            personal data, please read our{" "}
            <Link href={""} className="text-[#3676C8]">
              privacy policy
            </Link>
            .{" "}
          </p>
        </div>
      </form>
    </Form>
  );
};

export default CreateAccount;
