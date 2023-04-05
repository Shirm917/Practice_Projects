import { useState,createContext } from "react";
import {Routes,Route} from "react-router-dom";
import NavBar from "./nav/NavBar";
import RegistrationForm from './pages/Register/RegistrationForm';
import LoginForm from "./pages/Login/LoginForm";
import './App.css';

export const AppContext = createContext(null);

function App() {
  const [errorMsg,setErrorMsg] = useState("");

  return (
    <AppContext.Provider value={{
      errorMsg,
      setErrorMsg
    }}>
      <NavBar/>
        <main>
          <Routes>
            <Route path="/register" element={<RegistrationForm/>}/>
            <Route path="/login" element={<LoginForm/>}/>
          </Routes>
        </main>
    </AppContext.Provider>

  );
}

export default App;

