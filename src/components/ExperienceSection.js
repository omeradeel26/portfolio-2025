import React from "react";
import { Box, Typography, Grid, Chip, Container } from "@mui/material";

import experienceData from "../data/experience.json"; // Ensure JSON includes a "skills" array for each experience.
import FadeInSection from "./FadeInSection";
import SectionSubtitle from "./SectionSubtitle";

const ExperienceSection = () => {
  return (
    <Box id="experience" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
    <Container maxWidth="lg">
      {/* Title */}
      <FadeInSection>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Experience
          <Box component="span" sx={{ color: "primary.main", fontSize: "50px", ml: 1 }}>
            .
          </Box>
        </Typography>
        <SectionSubtitle text={"Where I've been so far."}></SectionSubtitle>
        <Box  sx={{mb: { xs: 4, md: 15 }}}></Box>
      </FadeInSection>

      {experienceData.map((group, index) => (
        <Box key={index} sx={{ mb: 6 }}>
          {/* Year */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2,
              textAlign: "left",
              color: "text.primary",
            }}
          >
            {group.year}
          </Typography>

          {/* Experiences */}
          {group.experiences.map((exp, i) => (
            <FadeInSection delay={0.4}>
                <Box
                key={i}
                sx={{
                    mb: 3,
                    p: 3,
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                    },
                    bgcolor: "background.paper",
                }}
                >
                <Grid container spacing={2} alignItems="center">
                    {/* Role and Organization */}
                    <Grid item xs={12} md={10}>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {exp.organization}&nbsp; {exp.emoji} 
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: "text.secondary", fontStyle: "italic" }}>
                        {exp.role} 
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
                        {exp.summary}
                    </Typography>
                    </Grid>
                    {/* Duration */}
                    <Grid item xs={12} md={2} sx={{ textAlign: "right", color: "text.secondary" }}>
                    <Typography variant="body2">{exp.duration}</Typography>
                    </Grid>
                </Grid>

                {/* Tags */}
                <Box sx={{ mt: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
                    {exp.skills.map((skill, idx) => (
                    <Chip
                        key={idx}
                        label={skill}
                        variant="outlined"
                        sx={{
                        fontSize: "0.8rem",
                        color: "text.primary",
                        borderColor: "primary.main",
                        }}
                    />
                    ))}
                </Box>
                </Box>
            </FadeInSection>
          ))}
        </Box>
      ))}
    </Container>
  </Box>
  );
};

export default ExperienceSection;
