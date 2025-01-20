import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4882FE",
      secondary: "#DAE6FE"
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
  },
  typography: {
    fontSize: 14,
    h1: {
      fontSize: "3rem",
      "@media (max-width:900px)": {
        fontSize: "2.5rem",
      },
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,   
      sm: 600,
      md: 900,  
      lg: 1200,
      xl: 1536,
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2E6CFE",
      secondary: "#0F1D3B"
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
  typography: {
    fontSize: 14,
    h1: {
      fontSize: "3rem",
      "@media (max-width:900px)": {
        fontSize: "2.5rem",
      },
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
  },
  spacing: 8, 
  breakpoints: {
    values: {
      xs: 0,  
      sm: 600, 
      md: 900, 
      lg: 1200, 
      xl: 1536, 
    },
  },
});