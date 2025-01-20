import React from "react";
import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ScrollDownButton = () => {
  const scrollToSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <Box
      onClick={scrollToSection}
      sx={{
        position: "absolute",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        color: "primary.main",
      }}
    >
      {/* Mouse Icon */}
      <Box
        sx={{
          width: 24,
          height: 40,
          border: "2px solid",
          borderColor: "primary.main",
          borderRadius: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: 6,
            height: 6,
            bgcolor: "primary.main",
            borderRadius: "50%",
            animation: "scrollDown 1.5s infinite",
          }}
        />
      </Box>

      {/* Scroll Down Text */}
      <Typography variant="body2" sx={{ mt: 1, fontWeight: "bold" }}>
        scroll down
      </Typography>

      {/* Down Arrow Icon */}
      <KeyboardArrowDownIcon sx={{ fontSize: 24, mt: -0.5 }} />

      {/* Animation */}
      <style>
        {`
          @keyframes scrollDown {
            0% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(10px); opacity: 0.5; }
            100% { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
    </Box>
  );
};

export default ScrollDownButton;
