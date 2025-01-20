import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import portrait from "../assets/portrait.jpg";
import { ReactTyped } from "react-typed";
import ScrollDownButton from "./ScrollDownButton";
import FadeInSection from "./FadeInSection";

const LandingSection = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      id="landing"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        px: 2,
        pt: { xs: 4, md: 4 }, // Reduced padding to move content up
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* Left Side - Text */}
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
          <FadeInSection>
            <Typography variant="h2" sx={{ fontWeight: "bold", lineHeight: 1.2 }}>
              Hi, I'm Omer Adeel
              <Typography sx={{ fontSize: 80 }} component="span" color="primary">
                .
              </Typography>
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: "primary.main", fontWeight: "bold", mt: -1 }}
            >
              <ReactTyped
                strings={["Software Engineer.", "Problem Solver.", "Innovator."]}
                typeSpeed={120}
                backSpeed={80}
                loop
              />
            </Typography>
          </FadeInSection>
          <FadeInSection delay={0.4}>
            <Typography
              variant="body1"
              sx={{ mt: 3, color: "text.secondary", maxWidth: "600px" }}
            >
              Currently a Computer Engineering student at the University of
              Waterloo, I’m passionate about solving complex problems, optimizing
              performance, and driving innovation in tech.
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 4, px: 2.5, py: 1.5, fontSize: "1rem", gap: 1.5, textTransform: "none"}}
              onClick={handleScrollToContact}
            >
              Get in Touch! <RocketLaunchRoundedIcon />
            </Button>
          </FadeInSection>
        </Box>

        {/* Right Side - Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            mt: { xs: 2, md: -4 },
          }}
        >
          <FadeInSection delay={0.8}>
            <Box
              component="img"
              src={portrait}
              alt="Omer Adeel"
              sx={{
                width: { xs: "70%", md: "100%" },
                maxWidth: "400px",
                maxHeight: "450px",
                borderRadius: "12px",
                boxShadow: 3,
              }}
            />
          </FadeInSection>
          </Box>
      </Container>

      {/* Hide Scroll Button on Mobile */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          cursor: "pointer",
        }}
      >
        <FadeInSection delay={1.2}>
          <ScrollDownButton />
        </FadeInSection>
      </Box>
    </Box>
  );
};

export default LandingSection;
