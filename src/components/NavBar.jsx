import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import BuildIcon from '@mui/icons-material/Build';
import PeopleIcon from '@mui/icons-material/People';
import { useEffect } from "react";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Disable scrolling on the home page
  useEffect(() => {
    if (location.pathname === "/") {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  }, [location.pathname]);

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1976d2", boxShadow: 3 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold", color: "white" }}>
          DevLogics
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <NavLink 
            to="/" 
            style={({ isActive }) => ({
              display: "flex", 
              alignItems: "center", 
              gap: 8, 
              color: isActive ? "#ffeb3b" : "inherit",
              textDecoration: "none"  // Remove underline
            })}
          >
            <HomeIcon /> Home
          </NavLink>
          <NavLink 
            to="/about" 
            style={({ isActive }) => ({
              display: "flex", 
              alignItems: "center", 
              gap: 8, 
              color: isActive ? "#ffeb3b" : "inherit",
              textDecoration: "none"  // Remove underline
            })}
          >
            <InfoIcon /> About
          </NavLink>
          <NavLink 
            to="/products" 
            style={({ isActive }) => ({
              display: "flex", 
              alignItems: "center", 
              gap: 8, 
              color: isActive ? "#ffeb3b" : "inherit",
              textDecoration: "none"  // Remove underline
            })}
          >
            <ShoppingCartIcon /> Products
          </NavLink>
          <NavLink 
            to="/contact" 
            style={({ isActive }) => ({
              display: "flex", 
              alignItems: "center", 
              gap: 8, 
              color: isActive ? "#ffeb3b" : "inherit",
              textDecoration: "none"  // Remove underline
            })}
          >
            <ContactMailIcon /> Contact
          </NavLink>
          <NavLink 
            to="/services" 
            style={({ isActive }) => ({
              display: "flex", 
              alignItems: "center", 
              gap: 8, 
              color: isActive ? "#ffeb3b" : "inherit",
              textDecoration: "none"  // Remove underline
            })}
          >
            <BuildIcon /> Services
          </NavLink>
          <NavLink 
            to="/users" 
            style={({ isActive }) => ({
              display: "flex", 
              alignItems: "center", 
              gap: 8, 
              color: isActive ? "#ffeb3b" : "inherit",
              textDecoration: "none"  // Remove underline
            })}
          >
            <PeopleIcon /> Users
          </NavLink>
        </Box>
        <Box sx={{ marginLeft: 2 }}>
          <Button 
            color="warning" 
            variant="contained" 
            sx={{ marginRight: 1, '&:hover': { backgroundColor: '#ff9800' } }} 
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button 
            color="secondary" 
            variant="contained" 
            sx={{ '&:hover': { backgroundColor: '#388e3c' } }} 
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
