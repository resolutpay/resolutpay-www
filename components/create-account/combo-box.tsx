"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { countries } from "@/lib/countries";
import { CountryComboBoxProps } from "@/lib/interface";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

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
            "w-full h-10 border border-[#E7E7E7] rounded-sm justify-between text-[#57584E] px-2 mb-3.5",
            !value && "text-muted-foreground"
          )}
        >
          {value ? countries.find((c) => c.code === value)?.label : "Select country..."}
          <ChevronsUpDown color="#57584E" className="opacity-100" />
          {/* <Globe /> */}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-[270px]:w-4/5 max-[270px]:ml-2 max-w-[250px] p-0 text-[#57584E]">
        <Command className="text-[#57584E]">
          <CommandInput
            placeholder="Search country..."
            className="h-9 placeholder:text-[#57584E]"
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
