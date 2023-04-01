import Box from "@mui/material/Box";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";

const RegistrationForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        margin: "0 auto",
      }}
      component="form"
      autoComplete="off"
      noValidate
    >
      <FormInput label="First Name" />
      <FormInput label="Last Name" />
      <FormInput label="Email" />
      <FormInput label="Username" />
      <FormInput label="Password" />
      <FormButton buttonText="Register" />
    </Box>
  );
};

export default RegistrationForm;
