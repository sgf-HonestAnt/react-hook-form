// @tom [FABRIC] https://github.dev/biglemonco/fabric/blob/main/frontend/src/components/FormFieldsComponent/FormFieldsComponent.tsx

import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import * as React from "react";
import { FormControl, InputLabel } from "./styledMuiComponents";
import { Button, RadioButtonComponentProps } from "./types";

const RadioButtonsComponent: React.FC<RadioButtonComponentProps> = (
  props: any
) => {
  const [value, setValue] = React.useState(props.defaultValue);
  const label = `${props.label}`;
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <FormControl>
        <ToggleButtonGroup>
          {props.buttons.map((button: Button) => (
            <ToggleButton {...{ ...button, label: undefined }}>
              {button.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </FormControl>
    </>
  );
};

export default RadioButtonsComponent;
