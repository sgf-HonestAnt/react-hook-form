import { Box, Container } from "@mui/material";
import { defaultValuesProps, Form } from "./components/Form";

// const selectChildren = (
//   <>
//     <MenuItem value='A'>Option A</MenuItem>
//     <MenuItem value='B'>Option B</MenuItem>
//   </>
// );

function App() {
  const fields = [
    {
      name: "firstName",
      defaultValue: "Sarah",
      rules: {
        required: "First name is required",
        //true,
        minLength: 4,
      },
      as: "Input",
    },
    // {
    //   name: "category",
    //   defaultValue: "",
    //   rules: {
    //     required: "Category is required",
    //   },
    //   as: <Select />,
    //   // children: { selectChildren },
    // },
    {
      name: "aboutYou",
      defaultValue: "Developer, 40, Has Dog",
      rules: {
        required: "About you is required",
        //true,
        minLength: 10,
      },
      as: "TextField",
    },
  ];

  function getDefaultValues() {
    let defaultValues: defaultValuesProps = {};
    fields.forEach((field) => (defaultValues[field.name] = field.defaultValue));
    return defaultValues;
  }

  return (
    <Container sx={{ paddingTop: "10vh", height: "100vh", bgcolor: "pink" }}>
      <Box sx={{ maxWidth: "500px", margin: "auto" }}>
        <Form fields={fields} defaultValues={getDefaultValues()} />
      </Box>
    </Container>
  );
}

export default App;
