import { SelectProps, TextFieldProps } from "@mui/material";
import {
  //Control,
  RegisterOptions,
} from "react-hook-form";

export type FormFieldsComponentProps = {
  fields: FormField[];
  // control: Control;
}; // @tom (FABRIC)

export type FormField = InputField | SelectField;

export enum FormFieldTypes {
  INPUT = "input",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  RADIO = "radio",
  DIVIDER = "divider",
  SLIDER = "slider",
  LOCATION = "location",
  CHECKBOX = "checkbox",
  CUSTOM = "custom",
} // @tom (FABRIC)

export enum InputTypeVariants {
  FILLED = "filled",
  OUTLINED = "outlined",
  STANDARD = "standard",
}

export type FormFieldBase = {
  id: string;
  defaultValue: string;
  label: string;
  rules: RegisterOptions;
};

export type InputField = FormFieldBase & {
  type: FormFieldTypes.INPUT;
  typeVariant: InputTypeVariants;
  multiline: boolean;
  rows: number;
  maxRows: number;
  config: Omit<TextFieldProps, "error" | "helperText" | "value" | "required">;
};

export type SelectField = FormFieldBase & {
  type: FormFieldTypes.SELECT;
  typeVariant: InputTypeVariants;
  multiline: boolean;
  rows: number;
  maxRows: number;
  options: Option[];
  config: Omit<SelectProps, "value" | "required">;
};

export type Option = {
  value: string | number | readonly string[] | undefined;
  copy: string;
};
