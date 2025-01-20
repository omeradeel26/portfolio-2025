import React from "react";
import { Typography, Box } from "@mui/material";

const SectionSubtitle = ({ text }) => {
  return (
    <Box sx={{ my: 0.8}}> {/* Adds spacing above and below */}
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          textAlign: "center", // Center-aligns the text
          fontSize: "1rem", // Adjusts the font size to be smaller

        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default SectionSubtitle;