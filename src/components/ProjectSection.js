import React, { useState } from "react";
import { Box, Grid, Typography, Container, Button } from "@mui/material";
import projects from "../data/projects.json"; // Dummy projects data
import FadeInSection from "./FadeInSection"; // Import the FadeInSection component
import SectionSubtitle from "./SectionSubtitle";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Box id="projects" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} display="flex" justifyContent="center" sx={{ mb: { xs: 4, md: 12 } }}>
            <FadeInSection>
              <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "center" }}>
                Projects
                <Box
                  component="span"
                  sx={{
                    color: "primary.main",
                    fontSize: "50px",
                    ml: 1,
                  }}
                >
                  .
                </Box>
              </Typography>
              <SectionSubtitle text={"What I've Created Along The Way."}></SectionSubtitle>
            </FadeInSection>
          </Grid>
        </Grid>

        {/* Projects Grid */}
        <Grid container spacing={4} justifyContent="center">
          {currentProjects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <FadeInSection delay={(index + 1) * 0.3}> {/* Staggered fade-in */}
                <Box
                  sx={{
                    position: "relative",
                    padding: "32px 24px",
                    textAlign: "center",
                    height: "300px", // Increased height for longer cards
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: (theme) =>
                      theme.palette.mode === "dark"
                        ? "rgba(18, 32, 47, 1)" // Match dark mode cards
                        : "background.default",
                    borderRadius: "12px",
                    boxShadow: 3,
                    border: "1px solid",
                    borderColor: (theme) =>
                      theme.palette.mode === "dark"
                        ? "rgba(255, 255, 255, 0.1)"
                        : "#eee",
                    transition:
                      "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", mt: 2 }}>
                    {project.description}
                  </Typography>
                </Box>
              </FadeInSection>
            </Grid>
          ))}
        </Grid>

        <FadeInSection delay={1.2}>
          {/* Pagination */}
          <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}>
            <Button
              variant="outlined"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Prev.
            </Button>
            <Button
              variant="outlined"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </Button>
          </Box>
        </FadeInSection>
        
        <FadeInSection delay={1.4}>
        {/* Call to Action */}
          <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              href="https://github.com/omeradeel26" // Replace with your GitHub link
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<GitHubIcon />}
              sx={{
                px: 4,
                py: 1.4,
                fontSize: "0.8rem",
                textTransform: "none",
                backgroundColor: "primary.main",
                "&:hover": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              View More
            </Button>
          </Box>
        </FadeInSection>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
