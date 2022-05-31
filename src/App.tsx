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
    id: "howGreatIsThatCocoa",
    label: "How great is that cocoa?",
    defaultValue: "Good",
    options: [
      { value: "Amazing", copy: "Amazing" },
      { value: "Good", copy: "Good" },
      { value: "Meh", copy: "Meh" },
      { value: "Bad", copy: "Bad" },
    ],
    rules: {},
    type: FormFieldTypes.SELECT,
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
  {
    id: "howGreatIsThatTea",
    label: "How great is that tea?",
    defaultValue: "Bad",
    options: [
      { value: "Amazing", copy: "Amazing" },
      { value: "Good", copy: "Good" },
      { value: "Meh", copy: "Meh" },
      { value: "Bad", copy: "Bad" },
    ],
    rules: {},
    type: FormFieldTypes.SELECT,
    typeVariant: InputTypeVariants.FILLED,
    config: {},
  },
  {
    id: "dogsOrCats",
    label: "Dogs or Cats?",
    defaultValue: "Dogs",
    buttons: [
      {
        label: "Dogs",
        value: "DOGS",
      },
      {
        label: "Cats",
        value: "CATS",
      },
      {
        label: "Goldfish",
        value: "GODLFISH",
      },
    ],
    rules: {},
    type: FormFieldTypes.RADIO,
    config: {},
  },
];

function App() {
  return (
    <Container sx={{ padding: "3vh 0", overflow: "scroll" }}>
      <Box sx={{ maxWidth: "500px", margin: "auto" }}>
        <Form fields={FormFields} />
      </Box>
    </Container>
  );
}

export default App;
