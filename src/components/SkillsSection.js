import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import FadeInSection from "./FadeInSection"; // Import the FadeInSection component
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import SectionSubtitle from "./SectionSubtitle";

// Skills data
const skills = [
  { title: "Frontend", icon: <DesignServicesOutlinedIcon sx={{ fontSize: "80px", color: "primary.main" }} />, details: "React, Angular, Next.js, JavaScript, TypeScript, Tailwind, SCSS" },
  { title: "Backend", icon: <DnsOutlinedIcon sx={{ fontSize: "80px", color: "primary.main" }} />, details: "Node.js, Express, Flask, Spring Boot, PostgreSQL, MongoDB, Redis" },
  { title: "Cloud & Infra.", icon: <CloudOutlinedIcon sx={{ fontSize: "80px", color: "primary.main" }} />, details: "AWS, Docker, Kubernetes, CI/CD, Terraform, Kafka" },
  { title: "Programming", icon: <TerminalOutlinedIcon sx={{ fontSize: "80px", color: "primary.main" }} />, details: "Python, Java, Golang, JavaScript, Rust, Ruby, C++, C, SQL" },
];

const SkillsSection = () => {
  return (
    <Box id="skills" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12} display="flex" justifyContent="center" sx={{mb: { xs: 4, md: 15} }}>
            <FadeInSection>
              <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "center"}}>
                Skills
                <Box component="span" sx={{ color: "primary.main", fontSize: "50px", ml: 1 }}>
                  .
                </Box>
              </Typography>
              <SectionSubtitle text={"What I bring to the table."}></SectionSubtitle>
            </FadeInSection>
          </Grid>

          {/* Skills Grid */}
          <Grid container spacing={4} justifyContent="center">
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={3} key={index} >
                <FadeInSection delay={(index+1) * 0.5}> {/* Add staggered delay */}
                <Box
                  sx={{
                    position: "relative",
                    padding: "32px 24px",
                    textAlign: "center",
                    height: "300px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: (theme) => theme.palette.mode === "dark" ? "rgba(18, 32, 47, 1)"  : "background.default", // Match experience cards
                    borderRadius: "12px",
                    boxShadow: 3,
                    border: "1px solid",
                    borderColor: (theme) => theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "#eee",
                    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                    <Box sx={{ mb: 3 }}>{skill.icon}</Box>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      {skill.title}
                    </Typography>
                    <Box sx={{ position: "absolute", bottom: "16px", left: "16px", right: "16px" }}>
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        {skill.details}
                      </Typography>
                    </Box>
                  </Box>
                </FadeInSection>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillsSection;
