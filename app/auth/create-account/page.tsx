"use client";
import CountryComboBox from "@/components/create-account/combo-box";
import { PasswordInput } from "@/components/create-account/password-input";
import { PhoneInput } from "@/components/create-account/phone-input";
import { RadioGroupField } from "@/components/create-account/radio-group";
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
import { businessTypeOptions, developerOptions, formData } from "@/lib/constants";
import { createAccountSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";

const CreateAccount = () => {
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
  const { isValid, isSubmitting } = createAccountForm.formState;
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
                <FormLabel className="font-semibold text-sm text-[#57584E] mb-1 flex justify-between">
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
                      value={field.value as { countryCode: string; number: string }}
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

        <Button type="submit" disabled={!isValid || isSubmitting} className="w-full">
          Create my account
        </Button>
        <div className="w-full mt-3.5 text-xs text-[#57584E] px-2 font-inter">
          <p>
            By clicking the “Create your account” button, you agree to Resolut&apos;s{" "}
            <Link href={""} className="text-[#4576C2]">
              terms of acceptable use and Data Processing Agreement{" "}
            </Link>
          </p>
          <p className="mt-5">
            To learn more about how Resolut collects, uses and discloses your personal
            data, please read our{" "}
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
