import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <NavLink className="link" to="/">
            Home
          </NavLink>
          <NavLink className="link" to="/register">
            Register
          </NavLink>
          <NavLink className="link" to="/login">
            Login
          </NavLink>
          <NavLink className="link" to="/groceryStore">
            Grocery Store
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
