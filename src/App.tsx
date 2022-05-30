import { Box, Container, Input, Select, TextField } from "@mui/material";
import { Form } from "./components/Form";

function App() {
  const fields = [
    {
      name: "firstName",
      defaultValue: "",
      rules: {
        required: "First name is required",
        //true,
        minLength: 4,
      },
      as: <Input />,
    },
    {
      name: "category",
      defaultValue: "",
      rules: {
        required: "Category is required",
      },
      as: <Select />,
    },
    {
      name: "aboutYou",
      defaultValue: "",
      rules: {
        required: "About you is required",
        //true,
        minLength: 10,
      },
      as: <TextField />,
    },
  ];

  return (
    <Container sx={{ paddingTop: "10vh", height: "100vh", bgcolor: "pink" }}>
      <Box sx={{ maxWidth: "500px", margin: "auto" }}>
        <Form fields={fields} />
      </Box>
    </Container>
  );
}

export default App;
