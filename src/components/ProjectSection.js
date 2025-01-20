import React, { useState } from "react";
import { Box, Grid, Typography, Button, Container } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import projects from "../data/projects.json"; // Dummy projects data
import FilterMenu from "./FilterMenu"; // Import FilterMenu

const ProjectsSection = () => {
  const [filters, setFilters] = useState({
    year: { 2020: false, 2021: false, 2022: false },
    type: {
      Processing: false,
      PyGame: false,
      "Static Website": false,
      "Web Apps": false,
      "Arduino/STM-32": false,
    },
    context: { Hackathon: false, Education: false, Personal: false },
    languages: { Python: false, "HTML, CSS, JS": false, C: false },
  });
  const [isFilterOpen, setFilterOpen] = useState(false);

  const handleOpenFilter = () => setFilterOpen(true);
  const handleCloseFilter = () => setFilterOpen(false);

  return (
    <Box id="projects" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Projects
            <Box component="span" sx={{ color: "primary.main", fontSize: "50px", ml: 1 }}>
              .
            </Box>
          </Typography>
          <Button
            variant="outlined"
            startIcon={<FilterAltOutlinedIcon />}
            onClick={handleOpenFilter}
            sx={{ textTransform: "none" }}
          >
            Filter
          </Button>
        </Grid>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  boxShadow: 3,
                  bgcolor: "background.paper",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
                  {project.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Filter Modal */}
      <FilterMenu
        open={isFilterOpen}
        handleClose={handleCloseFilter}
        filters={filters}
        setFilters={setFilters}
      />
    </Box>
  );
};

export default ProjectsSection;
