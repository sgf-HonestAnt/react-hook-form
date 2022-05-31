// @tom (FABRIC) https://github.dev/biglemonco/fabric/blob/main/frontend/src/components/FormFieldsComponent/FormFieldsComponent.tsx

import {
  SelectProps,
  TextFieldProps,
  ToggleButtonGroupProps,
  ToggleButtonProps,
} from "@mui/material";
import { RegisterOptions } from "react-hook-form";

export type Button = ToggleButtonProps & {
  label: string;
};

export type FormFieldsComponentProps = {
  fields: FormField[];
};

export type FormField = InputField | SelectField | RadioField;

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
}

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
  config: Omit<TextFieldProps, "error" | "helperText" | "value" | "required">;
};

export type SelectField = FormFieldBase & {
  type: FormFieldTypes.SELECT;
  typeVariant: InputTypeVariants;
  multiline: boolean;
  rows: number;
  options: Option[];
  config: Omit<SelectProps, "value" | "required">;
};

export type RadioButtonComponentProps = {
  buttons: Button[];
  label: string;
  // validation: RegisterOptions;
  // error?: any;
  // formField?: any;
  config: Omit<ToggleButtonGroupProps, "value" | "required">;
};

export type RadioField = FormFieldBase &
  RadioButtonComponentProps & {
    type: FormFieldTypes.RADIO;
  };

export type Option = {
  value: string | number | readonly string[] | undefined;
  copy: string;
};
