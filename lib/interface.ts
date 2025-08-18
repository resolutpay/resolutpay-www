import { RadioGroup } from "@/components/ui/radio-group";

export interface CountryComboBoxProps {
  value?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  name?: string;
  ref?: React.Ref<HTMLButtonElement>;
}

export type PhoneValue = { countryCode?: string; number?: string };

export interface PhoneInputProps {
  value?: PhoneValue;
  onChange: (value: PhoneValue) => void;
  onBlur?: () => void;
  name?: string;
  className?: string;
}

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
}

export interface RadioGroupFieldProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroup> {
  options: RadioOption[];
  className?: string;
}

export type FormInputType =
  | "input"
  | "password"
  | "country"
  | "phone"
  | "business"
  | "developer";

export type FormDataType = {
  id:
    | "country"
    | "businessName"
    | "firstName"
    | "lastName"
    | "email"
    | "phone"
    | "password"
    | "businessType"
    | "isDeveloper";
  label: string;
  type: FormInputType;
};
