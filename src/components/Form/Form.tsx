import { Button } from "@mui/material";
import * as React from "react";
import { useForm, Controller, UseControllerProps } from "react-hook-form";

type defaultValuesProps = {
  [key: string]: string;
};

type FieldProps = UseControllerProps & {
  as: JSX.Element;
  children?: React.ReactNode;
};

type FormProps = {
  fields: FieldProps[];
};

export function Form(props: FormProps) {
  let defaultValues: defaultValuesProps = {};
  props.fields.forEach(
    (field) => (defaultValues[field.name] = field.defaultValue)
  );
  const {
    control,
    //register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues,
  });
  console.log(defaultValues);
  const [formData, setFormData] = React.useState(defaultValues);
  function onSubmit(data: any) {
    setFormData(data);
    console.log(formData);
  }

  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column" }}>
      {props.fields.map((field, index) => {
        const { name, rules, as, children } = field;

        const MyComponent = as;

        return (
          <Controller
            key={index}
            name={name}
            control={control}
            rules={rules}
            render={({ field }) => (
              <MyComponent {...field}>{children ?? null}</MyComponent>
            )}
          />
        );
      })}
      <Button variant='contained' type='submit'>
        Submit
      </Button>
    </form>
  );
}

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
