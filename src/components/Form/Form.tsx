import { Box, Button } from "@mui/material";
import styled from "styled-components";
import * as React from "react";
import { useForm } from "react-hook-form";
import GenericController from "./Controller";
import { FormField, FormFieldsComponentProps } from "./types";

function getDefaultValues(fields: FormField[]) {
  let defaultValues: { [key: string]: string } = {};
  fields.forEach((field) => (defaultValues[field.id] = field.defaultValue));
  return defaultValues;
}

const FormComponent: React.FC<FormFieldsComponentProps> = (props) => {
  const defaultValues = getDefaultValues(props.fields);

  // initialize form
  const {
    control,
    // formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    defaultValues,
  });

  // onSubmit
  function onSubmit(data: any) {
    alert(JSON.stringify(data));
  }

  React.useEffect(() => {
    // watch values
    const subscription = watch();
    console.log(new Date(), subscription);
  }, [watch]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {props.fields.map((field, idx) => {
        return <GenericController key={idx} field={field} control={control} />;
      })}

      {/* buttons */}
      <Box sx={{ padding: "5px 0" }}>
        {["reset", "submit"].map((type, idx) => (
          <Button
            key={idx}
            variant='contained'
            type={type === "reset" ? "reset" : "submit"}
            sx={{ margin: "2px" }}>
            {type}
          </Button>
        ))}
      </Box>
    </Form>
  );
};

export default FormComponent;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
