"use client";
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
import { Textarea } from "@/components/ui/textarea";
import { formFields } from "@/lib/constants";
import { getInTouchFormSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const GetInTouch = () => {
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
  function onSubmit(values: z.infer<typeof getInTouchFormSchema>) {
    console.log(values);
  }
  return (
    <Form {...getInTouchForm}>
      <form onSubmit={getInTouchForm.handleSubmit(onSubmit)} className="space-y-8">
        {formFields.map((domain, index) => {
          return (
            <FormField
              key={index}
              control={getInTouchForm.control}
              name={domain.id}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <p className="sm:text-xl  text-form-grey">
                      {domain.label}
                      <span className="text-asterik-red sm:text-2xl sm:mb-7 pl-1 sm:pl-0">
                        *
                      </span>
                    </p>
                  </FormLabel>
                  <FormControl>
                    {domain.input ? (
                      <Input
                        {...field}
                        className="border-0 rounded-none border-b-[1.5px] border-b-form-grey shadow-none md:text-xl text-sm sm:text-base"
                      />
                    ) : (
                      <Textarea
                        {...field}
                        className="border-0 rounded-none border-b-[1.5px] border-b-form-grey shadow-none"
                      />
                    )}
                  </FormControl>
                  {/* <FormDescription/> */}
                  <FormMessage className="font-medium" />
                </FormItem>
              )}
            />
          );
        })}
        <Button type="submit" disabled={!isValid || isSubmitting}>
          Send message
        </Button>
      </form>
    </Form>
  );
};

export default GetInTouch;
