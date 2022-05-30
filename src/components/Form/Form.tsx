import { Button, Input, TextField } from "@mui/material";
import * as React from "react";
import { useForm, Controller, UseControllerProps } from "react-hook-form";

// type ListOfMuiFormProps = TextFieldProps | InputProps | SelectProps;

// export type MyComponentProps = Omit<ListOfMuiFormProps, "name"> & {
//   as: JSX.Element;
//   children?: React.ReactNode;
//   // validation?: ControllerProps["rules"];
//   // name: string;
//   // parseError?: (error: FieldError) => string;
//   control?: Control<any>;
// };

export type defaultValuesProps = {
  [key: string]: string;
};

type FieldProps = UseControllerProps & {
  as: string; // JSX.Element;
  // children?: JSX.Element;
};

type FormProps = {
  fields: FieldProps[];
  defaultValues: defaultValuesProps;
};

// const MyComponent = ({ as }: MyComponentProps) => as;

export function Form(props: FormProps) {
  const { defaultValues } = props;
  const {
    control,
    //register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues,
  });

  console.log("defaultValues", defaultValues);

  const [formData, setFormData] = React.useState(defaultValues);

  function onSubmit(data: any) {
    setFormData(data);
    console.log(formData);
  }

  console.log("errors", errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column" }}>
      {props.fields.map((field, index) => {
        const { name, rules, as } = field;
        return (
          <Controller
            key={index}
            name={name}
            control={control}
            rules={rules}
            render={({ field }) => {
              return as === "TextField" ? (
                <TextField {...field} />
              ) : (
                // onChange ?
                // {errors.aboutYou?.message ?? null}
                <Input {...field} />
                // onChange ?
                // {errors.aboutYou?.message ?? null}
              );
            }}
          />
        );
      })}
      {/* <Controller
        name='aboutYou'
        control={control}
        rules={{ required: "About you is required", minLength: 4 }}
        render={({ field }) => (
          <>
            <TextField {...field} />
            {errors.aboutYou?.message ?? null}
          </>
        )}
      /> */}
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
