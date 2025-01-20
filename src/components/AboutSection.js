import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import headshot from "../assets/headshot.png";
import FadeInSection from "./FadeInSection";
import SectionSubtitle from "./SectionSubtitle";

const AboutSection = () => {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="lg"> {/* ✅ Constrain the width */}
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {/* Title Centered */}
            <Grid item xs={12} display="flex" justifyContent="center" sx={{ mb: { xs: 4, md: 15}}}>
                <FadeInSection>
                    <Typography
                    variant="h3"
                    sx={{
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                    }}
                    >
                    About Me
                    <Box
                        component="span"
                        sx={{
                        color: "primary.main",
                        fontSize: "50px",
                        ml: 1, // Space between text and dot
                        }}
                    >
                        .
                    </Box>
                    </Typography>              
                    <SectionSubtitle text={"Who I am and what drives me."}></SectionSubtitle>
                </FadeInSection>
            </Grid>

          {/* Left Side - Image */}

            <Grid item xs={10} md={5} display="flex" justifyContent="center">
                <FadeInSection delay={0.4}>
                    <Box
                    component="img"
                    src={headshot} // Replace with your actual image
                    alt="About Me"
                    sx={{
                        width: { xs: "80%", md: "100%" },
                        maxWidth: "390px",
                        borderRadius: "12px",
                        boxShadow: 3,
                        mr: { xs: 0, md: 6 }
                    }}
                    />
                </FadeInSection>
            </Grid>


          {/* Right Side - Text Content */}
          <Grid item xs={12} md={7}>
            <FadeInSection delay={0.8}>
                <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
                <b>Hi, I’m Omer!</b><br></br><br></br>
                Raised in Toronto, Canada, I’ve had a knack for building things ever since I was a kid. Whether it was tinkering with electronics, coding simple games, or deconstructing gadgets to understand how they worked, I’ve always been drawn to problem-solving and innovation.            </Typography>


                <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
                I’m now a <b>third-year Computer Engineering student</b> at the <b>University of Waterloo</b>, with a deep passion for technology, backend development, and infrastructure. Over the past few years, I’ve gained hands-on experience through multiple software engineering internships, working on scalable systems, cloud infrastructure, and backend architectures. Currently, I’m interning at BitGo, where I help build secure, high-performance systems for managing digital assets.            </Typography>

                <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
                This website serves as a hub for showcasing my projects and documenting my journey in software development. Beyond coding, I’m a huge basketball fan and an avid runner. I also enjoy connecting with new people, so feel free to reach out—I'd love to chat. <br></br> <br></br>
                Cheers! 🚀
                </Typography>
            </FadeInSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
