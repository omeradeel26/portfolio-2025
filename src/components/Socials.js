import React from "react";
import { Box, IconButton, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Socials = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        left: 15,
        bottom: 20,
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        gap: 0.5,
        alignItems: "center",
      }}
    >
      <IconButton
        component={Link}
        href="https://github.com/omeradeel26"
        target="_blank"
        sx={{ color: "text.primary", transition: "color 0.3s", "&:hover": { color: "primary.main" } }}
      >
        <GitHubIcon fontSize="medium" />
      </IconButton>

      <IconButton
        component={Link}
        href="https://linkedin.com/in/omer-adeel"
        target="_blank"
        sx={{ color: "text.primary", transition: "color 0.3s", "&:hover": { color: "primary.main" } }}
      >
        <LinkedInIcon fontSize="medium" />
      </IconButton>

      <Box sx={{ width: "2px", height: "80px", bgcolor: "grey.500", mt: 1 }} />
    </Box>
  );
};

export default Socials;