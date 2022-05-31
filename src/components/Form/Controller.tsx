import { Control, Controller } from "react-hook-form";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "./styledMuiComponents";
import { FormField, FormFieldTypes, Option } from "./types";

type Props = {
  field: FormField;
  control: Control;
};

function GenericController({ field, control }: Props) {
  const label = `${field.label}`;
  switch (field.type) {
    case FormFieldTypes.INPUT:
      return (
        <Controller
          name={field.id}
          control={control}
          rules={field.rules}
          defaultValue={field.defaultValue ?? ""}
          render={({ field: { ref, ...field } }) => {
            return <TextField inputRef={ref} label={label} {...field} />;
          }}
        />
      );
    case FormFieldTypes.SELECT:
      const options = field.options;
      return (
        <Controller
          name={field.id}
          control={control}
          rules={field.rules}
          defaultValue={field.defaultValue ?? ""}
          render={({ field: { ref, ...field } }) => {
            return (
              <FormControl>
                <InputLabel>{label}</InputLabel>
                <Select inputRef={ref} {...field}>
                  {options?.map((option: Option, idx: number) => {
                    return (
                      <MenuItem
                        key={`form-field-option-${idx + 1}`}
                        value={option.value}>
                        {option.copy}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            );
          }}
        />
      );
  }
}

export default GenericController;
