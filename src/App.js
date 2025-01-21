import React, {useState} from 'react'
import { ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from './styles/theme';
import { CssBaseline, Box } from "@mui/material"
import Navbar from './components/NavBar';
import Socials from './components/Socials';
import Email from './components/Email';
import LandingSection from './components/LandingSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import VerticalSpacer from './components/VerticalSpacer';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import ProjectSection from './components/ProjectSection';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider  theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline/>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <Navbar toggleTheme={()=> setDarkMode(!darkMode)} darkMode={darkMode} />


        <LandingSection />
        <VerticalSpacer/>
        <AboutSection />
        <SkillsSection />
        <VerticalSpacer/>
        <ExperienceSection />
        <ProjectSection />
        <ContactSection />
        <Socials /> 
        <Email />

        <div id="about"></div>
        
      </Box>
    </ThemeProvider>
  );
}

export default App;
