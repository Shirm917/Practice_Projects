import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import Box from "@mui/material/Box";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import Modal from "../../components/Modal";

const RegistrationForm = () => {
  const { errorMsg,setErrorMsg } = useContext(AppContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const register = async (event) => {
    event.preventDefault();

    setErrorMsg("");

    const isFormValid = validateForm();

    if (!isFormValid) return;

    try {
      if (firstName && lastName && email && username && password) {
        await axios.post("/register", {
          firstName,
          lastName,
          email,
          username,
          password,
        });
        navigate("/login");
      }
    } catch (err) {
      setErrorMsg(err.response.data.errorMsg);
    }
  };

  const validateForm = () => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9$&+,:;?@#<>.^*()%!-]{8,}$/;

    if (!firstName || !lastName || !email || !username || !password) {
      setErrorMsg("Please fill everything out");
      return false;
    } else if (!emailRegex.test(email)) {
      setErrorMsg(
        "Email must contain an @ symbol and can only contain english characters, numbers and special characters."
      );
      return false;
    } else if (!passwordRegex.test(password)) {
      setErrorMsg(
        "Password must be at least 8 characters, must contain at least one letter and one number. Password can only contain english letters, numbers and special characters."
      );
      return false;
    }
    return true;
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
      <p>{errorMsg}</p>
      <FormInput
        id="register-firstName"
        label="First Name"
        value={firstName}
        setValue={setFirstName}
        type="text"
      />
      <FormInput
        id="register-lastName"
        label="Last Name"
        value={lastName}
        setValue={setLastName}
        type="text"
      />
      <FormInput
        id="register-email"
        label="Email"
        value={email}
        setValue={setEmail}
        type="email"
        pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
      />
      <FormInput
        id="register-username"
        label="Username"
        value={username}
        setValue={setUsername}
        type="text"
      />
      <FormInput
        id="register-password"
        label="Password"
        value={password}
        setValue={setPassword}
        pattern="^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9$&+,:;?@#<>.^*()%!-]{8,}$"
        type="password"
      />
      <FormButton buttonText="Register" onClick={register} />
      <Modal />
    </Box>
  );
};

export default RegistrationForm;
