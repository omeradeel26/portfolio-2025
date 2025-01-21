import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  Avatar,
  Container,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { Link as ScrollLink } from "react-scroll";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import Brightness7RoundedIcon from "@mui/icons-material/Brightness7Rounded";

// Import images
import logo from "../assets/logo.png";
import logov2 from "../assets/logov2.png";

const Navbar = ({ toggleTheme, darkMode }) => {
  const [scrolling, setScrolling] = useState(false);
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  // ✅ Detect Scroll Position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getBackgroundColour = () => {
    let color = "";
    if (darkMode) {
      if (scrolling) {
        color = "#181818";
      } else {
        color = "#000";
      }
    } else {
      color = "background.default";
    }
    return color;
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: getBackgroundColour(), // Dynamically set background color
          transition: "background-color 0.6s ease boxShadow 0.3s ease borderBottom 0.3s ease", // Smooth transition for background color
          boxShadow: scrolling ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none", // Adds shadow on scroll
          borderBottom: scrolling ? "1px solid rgba(0, 0, 0, 0.1)" : "transparent", // Subtle border
        }}
      >
        {/* ✅ Constrain width */}
        <Container maxWidth="lg" sx={{bgcolor: "transparent"}}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              minHeight: 70,
              px: 3,
              bgcolor: 'transparent'
            }}
          >
            {/* Left Side - Logo */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ScrollLink
                to="landing"
                smooth={true}
                duration={800}
                offset={-70} // Adjust based on navbar height
                style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
              >
                <Avatar
                  src={darkMode ? logov2 : logo}
                  alt="Logo"
                  sx={{ width: 90, height: 80, cursor: "pointer", marginLeft: -5 }}
                />
              </ScrollLink>
            </Box>

            {/* Desktop Navigation */}
            <Box
              sx={{
                display: { xs: "none", md: "flex", alignItems: "center" },
                gap: 4,
              }}
            >
              {[
                { name: "About", id: "about" },
                { name: "Skills", id: "skills" },
                { name: "Experience", id: "experience" },
                { name: "Projects", id: "projects" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.id}
                  smooth={true}
                  duration={800}
                  offset={-70}
                  style={{
                    cursor: "pointer",
                    color: "text.primary",
                    textDecoration: "none",
                    fontWeight: "bold",
                    transition: "color 0.3s, transform 0.2s",
                    "&:hover": { color: "primary.main" },
                  }}
                  activeStyle={{ color: theme.palette.primary.main }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      cursor: "pointer",
                      color: theme.palette.text.primary,
                      textDecoration: "none",
                      transition: "color 0.3s, transform 0.2s",
                    }}
                  >
                    {item.name}
                  </Typography>
                </ScrollLink>
              ))}
              {/* Light/Dark Mode Toggle */}
              <IconButton
                onClick={toggleTheme}
                color="primary.main"
                sx={{
                  transition: "color 0.3s",
                  "&:hover": { color: "primary.main" },
                }}
              >
                {darkMode ? <Brightness7RoundedIcon /> : <BedtimeIcon />}
              </IconButton>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              edge="end"
              color={theme.palette.primary.main}
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 200 }}>
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Contact", id: "contact" },
          ].map((item) => (
            <ScrollLink
              key={item.name}
              to={item.id}
              smooth={true}
              duration={800}
              offset={-70}
              onClick={() => setOpen(false)}
              style={{
                cursor: "pointer",
                display: "block",
                padding: "10px 20px",
              }}
            >
              {item.name}
            </ScrollLink>
          ))}
          <ListItem button onClick={toggleTheme} sx={{ padding: "10px 20px", cursor: "pointer" }}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
