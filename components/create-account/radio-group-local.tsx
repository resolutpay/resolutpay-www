"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { CustomRadioGroupFieldProps } from "@/lib/interface";

export const CustomRadioGroupField = React.forwardRef<
  HTMLDivElement,
  CustomRadioGroupFieldProps
>(({ options, className, value, onChange, name, ...props }, ref) => {
  const handleChange = (optionValue: string) => {
    if (onChange) {
      onChange(optionValue);
    }
  };

  return (
    <div ref={ref} className={cn("w-full space-y-3", className)} {...props}>
      {options.map((option) => (
        <div
          key={option.value}
          className="flex items-start gap-3 w-full max-w-full"
        >
          <input
            type="radio"
            id={`${name}-${option.value}`}
            name={name || "radio-group"}
            value={option.value}
            checked={value === option.value}
            onChange={() => handleChange(option.value)}
            className="mt-1 size-3 border flex-shrink-0 text-primary-color border-primary-color"
          />
          <div className="flex-1 min-w-0">
            <label
              htmlFor={`${name}-${option.value}`}
              className="font-semibold text-sm cursor-pointer block break-words"
            >
              {option.label}
            </label>
            {option.description && (
              <p className="text-sm text-gray-600 mt-1 break-words overflow-wrap-anywhere leading-relaxed">
                {option.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
});

CustomRadioGroupField.displayName = "CustomRadioGroupField";
