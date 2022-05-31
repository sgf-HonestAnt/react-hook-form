import {
  styled,
  TextField as MuiTextField,
  Input as MuiInput,
  Select as MuiSelect,
  MenuItem as MuiMenuItem,
  FormControl as MuiFormControl,
  InputLabel as MuiInputLabel,
} from "@mui/material";

// Note. Styled Mui Components should be the only part of the form library that needs to be customized. Even then it would be better to style our components inside the Mui theme.

export const FormControl = styled(MuiFormControl)`
  width: 100%;
`;

export const InputLabel = styled(MuiInputLabel)``;

export const Input = styled(MuiInput)``;

export const TextField = styled(MuiTextField)`
  width: 100%;
`;

export const Select = styled(MuiSelect)``;

export const MenuItem = styled(MuiMenuItem)``;
