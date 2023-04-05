import { useState, useEffect,useContext } from "react";
import axios from "axios";
import { redirect } from "react-router-dom";
import { AppContext } from "../../App";
import Box from "@mui/material/Box";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";

const RegistrationForm = () => {
  const {setErrorMsg} = useContext(AppContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setErrorMsg("");
  }, []);

  useEffect(() => {
    const registerUser = async() => {
      try {
        await axios.post("/register", {
          firstName,
          lastName,
          email,
          username,
          password
        });

        redirect("/login")
      } catch (err) {
        setErrorMsg(err.response.data.errorMsg);
      }
    };

    registerUser();
  }, []);

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
      <FormInput label="First Name" value={firstName} setValue={setFirstName} />
      <FormInput label="Last Name" value={lastName} setValue={setLastName} />
      <FormInput label="Email" value={email} setValue={setEmail} />
      <FormInput label="Username" value={username} setValue={setUsername} />
      <FormInput label="Password" value={password} setValue={setPassword} />
      <FormButton buttonText="Register" />
    </Box>
  );
};

export default RegistrationForm;
