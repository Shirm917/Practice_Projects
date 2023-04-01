import Box from "@mui/material/Box";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";

const LoginForm = () => {
    return (
      <Box
        sx={{ display: "flex", flexDirection: "column", width: "50%", margin: "0 auto"}}
        component="form"
        autoComplete="off"
        noValidate
      >
        <FormInput label="Username/Email" />
        <FormInput label="Password" />
        <FormButton buttonText="Login"/>
      </Box>
    );
  };

  export default LoginForm;