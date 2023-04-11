import { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./nav/NavBar";
import HomePage from "./pages/Home/HomePage";
import RegistrationForm from "./pages/Register/RegistrationForm";
import LoginForm from "./pages/Login/LoginForm";
import GroceryStore from "./pages/GroceryStore/GroceryStore";
import "./App.css";

export const AppContext = createContext(null);

function App() {
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [modalTitle,setModalTitle] = useState("");
  const [count,setCount] = useState("");

  useEffect(() => {
    setErrorMsg("");
    setModalTitle("");
  }, []);

  return (
    <AppContext.Provider
      value={{
        errorMsg,
        setErrorMsg,
        isLoggedIn,
        setIsLoggedIn,
        modalTitle,
        setModalTitle,
        count,
        setCount
      }}
    >
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/groceryStore" element={<GroceryStore />} />
        </Routes>
      </main>
    </AppContext.Provider>
  );
}

export default App;
