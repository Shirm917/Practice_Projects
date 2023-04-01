import {NavLink} from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
