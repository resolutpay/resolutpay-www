"use client";

import * as React from "react";
import { Check, ChevronsUpDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { CountryComboBoxProps } from "@/lib/interface";
import { countries } from "@/lib/countries";

export default function CountryComboBox({
  value,
  onChange,
  onBlur,
  name,
  ref,
}: CountryComboBoxProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          ref={ref}
          name={name}
          onBlur={onBlur}
          variant="outline"
          role="combobox"
          className={cn(
            "w-full h-10 border border-[#E7E7E7] rounded-sm justify-between font-inter text-[#57584E] leading-5 px-2 mb-3.5",
            !value && "text-muted-foreground"
          )}
        >
          {value
            ? countries.find((c) => c.code === value)?.label
            : "Select country..."}
          <ChevronsUpDown color="#57584E" className="opacity-100" />
          {/* <Globe /> */}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-[270px]:w-4/5 max-[270px]:ml-2 max-w-[250px] p-0 text-[#57584E]">
        <Command className="font-inter text-[#57584E]">
          <CommandInput
            placeholder="Search country..."
            className="h-9 font-inter placeholder:text-[#57584E]"
          />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup className="font-inter text-[#57584E]">
              {countries.map((c) => (
                <CommandItem
                  key={c.code}
                  value={c.code}
                  onSelect={(val) => {
                    onChange(val);
                    setOpen(false);
                  }}
                >
                  {c.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === c.code ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
