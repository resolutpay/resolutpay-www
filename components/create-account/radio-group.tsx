"use client";

import * as React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { RadioGroupFieldProps } from "@/lib/interface";

export const RadioGroupField = React.forwardRef<
  React.ComponentRef<typeof RadioGroup>,
  RadioGroupFieldProps & {
    value?: string;
    onChange?: (value: string) => void;
  }
>(({ options, className, value, onChange, ...props }, ref) => {
  return (
    <RadioGroup
      ref={ref}
      value={value}
      onValueChange={onChange}
      className={cn("space-y-4 font-inter text-[#57584E]", className)}
      {...props}
    >
      {options.map((opt) => (
        <div key={opt.value} className="flex items-start space-x-3">
          <RadioGroupItem
            value={opt.value}
            id={opt.value}
            className=" border-primary-color size-3 data-[state=checked]:text-primary-color "
          ></RadioGroupItem>
          <div className="grid gap-1 leading-none">
            <Label htmlFor={opt.value} className="font-semibold">
              {opt.label}
            </Label>
            {opt.description && (
              <p className="text-sm text-muted-foreground">{opt.description}</p>
            )}
          </div>
        </div>
      ))}
    </RadioGroup>
  );
});

RadioGroupField.displayName = "RadioGroupField";
