import React from "react";
import { Box, Typography, Grid, TextField, Button, Container } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import FadeInSection from "./FadeInSection";
import VerticalSpacer from "./VerticalSpacer";
import SectionSubtitle from "./SectionSubtitle";

const ContactSection = () => {
  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 8 },
        bgcolor: "background.default",
      }}
    >
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
            Contact Me
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

          <SectionSubtitle text={"Let’s Get In Touch."}></SectionSubtitle>
          <Box sx={{mb: { xs: 4, md: 12 }}}></Box>
        </FadeInSection>

        <Grid container spacing={6}>
          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <FadeInSection delay={0.4}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  {/* Message */}
                  <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    fontStyle: "italic",
                    mt: 3,
                    maxWidth: "80%",
                  }}
                >
                  I'd be happy to connect! Feel free to reach out for project inquiries, collaboration opportunities, or any other questions you may have.
                </Typography>
                {/* Email */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, md:8}}>
                  <EmailOutlinedIcon sx={{ color: "primary.main", fontSize: "32px" }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Email
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      oadeel@uwaterloo.ca
                    </Typography>
                  </Box>
                </Box>

                {/* Location */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <LocationOnOutlinedIcon sx={{ color: "primary.main", fontSize: "32px" }} />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Location
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      Toronto, ON, Canada
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </FadeInSection>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <FadeInSection delay={0.8}>
              <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {/* Two Columns for Name and Email */}
                <Box sx={{ display: "flex", gap: 2 }}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: "1rem" } }}
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: "1rem" } }}
                  />
                </Box>

                {/* Subject Field */}
                <TextField
                  label="Subject"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: "1rem" } }}
                />

                {/* Message Field */}
                <TextField
                  label="Write Message"
                  variant="outlined"
                  multiline
                  rows={5}
                  fullWidth
                  InputLabelProps={{ style: { fontSize: "1rem" } }}
                />

                {/* Submit Button */}
                <Button
                  variant="outlined"
                  endIcon={<SendRoundedIcon />}
                  sx={{
                    alignSelf: "flex-start",
                    px: 1.75,
                    py: 1,
                    fontSize: "0.9rem",
                    textTransform: "none",
                    borderColor: "primary.main",
                    color: "primary.main",
                    "&:hover": {
                      backgroundColor: "rgba(33,150,243,0.1)",
                      borderColor: "primary.main",
                    },
                    gap: 0.24,
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </FadeInSection>
          </Grid>
        </Grid>
        <VerticalSpacer/> 

        {/* Footer */}
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: "text.secondary",
            mt: { xs: 6, md:10 }, // Add spacing at the bottom
          }}
        >
          Created and maintained by Omer Adeel (January 2025).&nbsp; <a target="_blank" href="https://www.omeradeel.com">View Portfolio v1.</a>
        </Typography>
      </Container>
    </Box>
  );
};

export default ContactSection;
