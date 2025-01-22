import React from "react";
import { Box, Typography, Grid, Chip, Container } from "@mui/material";
import experienceData from "../data/experience.json"; // Updated JSON with "logo"
import FadeInSection from "./FadeInSection";
import SectionSubtitle from "./SectionSubtitle";


const images = {
  BG: require("../assets/bitgo.png"),
  PW: require("../assets/purolator.png"),
  UW: require("../assets/uwaterloo.png"),
  OMBSD: require("../assets/ontario.png"),
  UWBP: require("../assets/uwblueprint.png"),
  MS: require("../assets/microart.png"),
  YZS: require("../assets/yearzero.png"),
};

const ExperienceSection = () => {
  return (
    <Box id="experience" sx={{ py: { xs: 8, md: 12 }, px:3, bgcolor: "background.default" }}>
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
          <SectionSubtitle text={"Where I've Been So Far."}></SectionSubtitle>
          <Box sx={{ mb: { xs: 4, md: 12 } }}></Box>
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
              <FadeInSection key={i} delay={0.4 * i}>
                <Box
                  sx={{
                    mb: 3,
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                    },
                    bgcolor: "background.paper",
                    display: "flex",
                    flexDirection: {xs: "column", md: "row"},
                    alignItems: "center",
                    padding: "16px", // Adjust padding,
                  }}
                >
                  {/* Logo */}
                  <Box
                    sx={{
                      width: "115px", // Square size for the logo
                      height: "105px",
                      display: "flex",
                      justifyContent:  {sx: "flex-start", md: "center"},
                      alignItems:  {sx: "flex-start", md: "center"},
                      borderRadius: "12px",
                      marginRight: "30px", // Space between logo and content
                      bgcolor: "#fff", // Match card background
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Optional for better visual appeal
                      borderRadius: "17px",
                      padding: '14px',
                      marginBottom: {xs: "15px", md:"0px"}
                    }}
                  >
                  
                    <img
                      src={images[exp.logo]}
                      alt={`${exp.organization} logo`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "15px"
                      }}
                    />
                  </Box>

                  {/* Content */}
                  <Box
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={9}>
                        {/* Role and Organization */}
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                          {exp.organization}&nbsp; {exp.emoji}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{ color: "text.secondary", fontStyle: "italic" }}
                        >
                          {exp.role}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
                          {exp.summary}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={3}
                        sx={{
                          textAlign: "right", // Align the date to the right
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary", whiteSpace: "nowrap" }}
                        >
                          {exp.duration}
                        </Typography>
                      </Grid>
                    </Grid>

                    {/* Tags */}
                    <Box
                      sx={{
                        mt: 2,
                        display: "flex",
                        gap: 1,
                        flexWrap: "wrap",
                        alignItems: "center",
                      }}
                    >
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
