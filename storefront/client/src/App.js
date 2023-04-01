import {Routes,Route} from "react-router-dom";
import NavBar from "./nav/NavBar";
import RegistrationForm from './pages/Register/RegistrationForm';
import LoginForm from "./pages/Login/LoginForm";
import './App.css';

function App() {
  return (
    <div>
      <NavBar/>
        <main>
          <Routes>
            <Route path="/register" element={<RegistrationForm/>}/>
            <Route path="/login" element={<LoginForm/>}/>
          </Routes>
        </main>
    </div>

  );
}

export default App;

