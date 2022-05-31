import { Box, Container } from "@mui/material";
import { Form } from "./components/Form";
import { FormFieldTypes, InputTypeVariants } from "./components/Form/types";

const FormFields: any = [
  {
    id: "firstName",
    label: "First Name",
    defaultValue: "Sarah",
    rules: {
      required: "This field is required",
      minLength: 4,
    },
    type: FormFieldTypes.INPUT,
    config: {},
  },
  {
    id: "lastName",
    label: "Last Name",
    defaultValue: "Fisher",
    rules: {
      required: "This field is required",
      minLength: 4,
    },
    type: FormFieldTypes.INPUT,
    typeVariant: InputTypeVariants.FILLED,
    config: {},
  },
  {
    id: "address",
    label: "Address",
    defaultValue: "Cowbridge, UK",
    rules: {
      required: "This field is required",
      minLength: 10,
    },
    type: FormFieldTypes.INPUT,
    typeVariant: InputTypeVariants.OUTLINED,
    multiline: true,
    rows: 1,
    maxRows: 2, // what does maxRows actually do?
    config: {},
  },
  {
    id: "aboutYou",
    label: "About You",
    defaultValue: "Developer, has a dog 🐶",
    rules: {
      required: "This field is required",
      minLength: 10,
    },
    type: FormFieldTypes.INPUT,
    typeVariant: InputTypeVariants.OUTLINED,
    multiline: true,
    rows: 4,
    config: {},
  },
  {
    id: "howGreatIsThatCoffee",
    label: "How great is that coffee?",
    defaultValue: "Amazing",
    options: [
      { value: "Amazing", copy: "Amazing" },
      { value: "Good", copy: "Good" },
      { value: "Meh", copy: "Meh" },
      { value: "Bad", copy: "Bad" },
    ],
    rules: {},
    type: FormFieldTypes.SELECT,
    typeVariant: InputTypeVariants.OUTLINED,
    config: {},
  },
];

function App() {
  return (
    <Container sx={{ paddingTop: "10vh", height: "100vh", bgcolor: "pink" }}>
      <Box sx={{ maxWidth: "500px", margin: "auto" }}>
        <Form fields={FormFields} />
      </Box>
    </Container>
  );
}

export default App;
