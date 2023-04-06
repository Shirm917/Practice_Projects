import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import Box from "@mui/material/Box";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import Modal from "../../components/Modal";

const RegistrationForm = () => {
  const { setErrorMsg } = useContext(AppContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const register = async (event) => {
    event.preventDefault();
    setErrorMsg("");
    try {
      await axios.post("/register", {
        firstName,
        lastName,
        email,
        username,
        password,
      });

      navigate("/login");
    } catch (err) {
      setErrorMsg(err.response.data.errorMsg);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "50%",
        height: "80vh",
        margin: "0 auto",
      }}
      component="form"
      autoComplete="off"
      noValidate
    >
      <FormInput id="register-firstName" label="First Name" value={firstName} setValue={setFirstName} type="text"/>
      <FormInput id="register-lastName" label="Last Name" value={lastName} setValue={setLastName} type="text"/>
      <FormInput id="register-email" label="Email" value={email} setValue={setEmail} type="email"/>
      <FormInput id="register-username" label="Username" value={username} setValue={setUsername} type="text"/>
      <FormInput id="register-password" label="Password" value={password} setValue={setPassword} type="password"/>
      <FormButton buttonText="Register" onClick={register}/>
      <Modal />
    </Box>
  );
};

export default RegistrationForm;
