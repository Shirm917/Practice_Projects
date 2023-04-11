import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import axios from "axios";
import Box from "@mui/material/Box";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import Modal from "../../components/Modal";

const LoginForm = () => {
  const { setErrorMsg, setIsLoggedIn, setModalTitle, count, setCount } =
    useContext(AppContext);
  const [usernameEmail, setUsernameEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setModalTitle("login");

    return () => setModalTitle("");
  }, []);

  const login = async (event) => {
    event.preventDefault();
    setErrorMsg("");

    try {
      await axios.post("/login", {
        usernameEmail,
        password,
      });

      // For now navigate to homePage to see that it worked
      setIsLoggedIn(true);
      navigate("/");
    } catch (err) {
      setErrorMsg(err.response.data.errorMsg);
      setCount(count + 1);
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
      <FormInput
        id="login-username/email"
        label="Username/Email"
        type="text"
        value={usernameEmail}
        setValue={setUsernameEmail}
      />
      <FormInput
        id="login-password"
        label="Password"
        type="password"
        value={password}
        setValue={setPassword}
      />
      <FormButton buttonText="Login" onClick={login} />
      <Modal title="login" />
    </Box>
  );
};

export default LoginForm;
