"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown } from "lucide-react";
import { PhoneInputProps } from "@/lib/interface";
import { countries } from "@/lib/countries";

export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ value = {}, onChange, onBlur, name, className }, ref) => {
    const selected = countries.find((c) => c.dialCode === value.countryCode);

    return (
      <div className={cn("flex items-center gap-2", className)}>
        {/* Country code dropdown */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              className="gap-0 px-1 h-10 rounded-[5px] text-[#57584E]"
            >
              {selected ? selected.dialCode : "+1"}
              <ChevronDown className="size-5 shrink-0 opacity-70" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0 transform  max-[605px]:translate-x-5 max-[300px]:max-w-[60%] sm:translate-x-[57%] w-3/4 text-[#57584E]">
            <Command>
              <CommandInput placeholder="Search country..." />
              <CommandList>
                <CommandGroup>
                  {countries.map((c) => (
                    <CommandItem
                      key={c.code}
                      value={c.code}
                      onSelect={() =>
                        onChange({
                          countryCode: c.dialCode,
                          number: value.number,
                        })
                      }
                    >
                      <span>{c.label}</span>{" "}
                      <span className="opacity-50">|</span>
                      <span className="ml-2">{c.dialCode}</span>
                      {selected?.code === c.code && (
                        <Check className="ml-2 size-5" />
                      )}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        {/* Phone number input */}
        <Input
          ref={ref}
          name={name}
          className="flex-1 h-10 px-2 text-[#57584E] rounded-[5px]"
          value={value.number}
          onChange={(e) =>
            onChange({
              countryCode: value.countryCode,
              number: e.target.value,
            })
          }
          onBlur={onBlur}
          inputMode="tel"
        />
      </div>
    );
  }
);

PhoneInput.displayName = "PhoneInput";
