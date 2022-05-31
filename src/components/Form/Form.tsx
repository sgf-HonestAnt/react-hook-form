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

export const Form: React.FC<FormFieldsComponentProps> = (props) => {
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
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
    </StyledForm>
  );
};

// {/* <Controller
//   name='aboutYou'
//   control={control}
//   rules={{ required: "About you is required", minLength: 4 }}
//   render={({ field }) => (
//     <>
//       <TextField {...field} />
//       {errors.aboutYou?.message ?? null}
//     </>
//   )}
// /> */}
// {/* {JSON.stringify(formData)} */}

// {/* {errors[name]?.message ?? null} */}
// <br />
// <Controller
//   name='category'
//   control={control}
//   rules={{ required: "Category is required" }}
//   render={({ field }) => (
//     <>
//       <Select {...field}>
//         <MenuItem value='A'>Option A</MenuItem>
//         <MenuItem value='B'>Option B</MenuItem>
//       </Select>
//       {errors.category?.message ?? null}
//     </>
//   )}
// />
// <br />
// <Controller
//   name='aboutYou'
//   control={control}
//   rules={{ required: "About you is required", minLength: 4 }}
//   render={({ field }) => (
//     <>
//       <TextField {...field} />
//       {errors.aboutYou?.message ?? null}
//     </>
//   )}
// />
// <br />

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
