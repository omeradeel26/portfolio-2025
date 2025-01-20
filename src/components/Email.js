import React from "react";
import { Box, Typography } from "@mui/material";

const Email = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        right: 20,
        bottom: 20,
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        component="a"
        href="oadeel@uwaterloo.ca"
        sx={{
          writingMode: "vertical-rl",
          textDecoration: "none",
          color: "text.primary",
          letterSpacing: 2,
          transition: "color 0.3s",
          fontSize: '1rem',
          "&:hover": { color: "primary.main",  },
        }}
      >
        oadeel@uwaterloo.ca
      </Typography>
      <Box sx={{ width: "2px", height: "80px", bgcolor: "grey.500", mt: 1 }} />
    </Box>
  );
};

export default Email;