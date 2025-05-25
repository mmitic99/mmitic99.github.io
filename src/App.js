import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Footbar from "./components/Footbar.js";
import Home from "./components/Home.js";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { indigo } from "@mui/material/colors";
import { useState } from "react";
import React from "react";
import Education from "./components/Education.js";
import Experience from "./components/Experience.js";
import Contact from "./components/Contact.js";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Projects from "./components/Projects.js";
import Skills from "./components/Skills.js";
import About from "./components/About.js";

const lightBackground = "/img/lightBackground.png";
const darkBackground = "/img/darkBackground.png";

const font = {
  allVariants: {
    fontFamily: "'Montserrat', sans-serif",
  },
};
//TODO: https://mui.com/material-ui/customization/color/
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: font,
});

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#d1e0ff",
    },
    secondary: indigo,
    background: { default: "#d1e0ff", paper: "#d1e0ff" },
  },
  typography: font,
});

function App() {
  const isDarkThemeKey = "darkTheme";
  const isDarkThemeDefault = localStorage.getItem(isDarkThemeKey) === "true";
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeDefault);
  React.useEffect(() => {
    localStorage.setItem(isDarkThemeKey, isDarkTheme);
  }, [isDarkTheme]);

  function handleThemeClick() {
    setIsDarkTheme(!isDarkTheme);
  }

  const currentTheme = isDarkTheme ? darkTheme : lightTheme;
  const backgroundImage = isDarkTheme ? darkBackground : lightBackground;

  const [navbarHeight, setNavbarHeight] = useState(0);
  function handleNavbarHeightChange(newHeight) {
    setNavbarHeight(newHeight);
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <ToastContainer autoClose={3000} theme={isDarkTheme ? "dark" : "light"} />
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundImage: `url(${process.env.PUBLIC_URL + backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Router>
          <Navbar
            handleThemeClick={handleThemeClick}
            onHeightChange={handleNavbarHeightChange}
          />
          <Routes>
            <Route path="/" element={<Home navbarHeight={navbarHeight} />} />
            <Route
              path="/education"
              element={<Education navbarHeight={navbarHeight} />}
            />
            <Route
              path="/experience"
              element={<Experience navbarHeight={navbarHeight} />}
            />
            <Route
              path="/projects"
              element={<Projects navbarHeight={navbarHeight} />}
            />
            <Route
              path="/skills"
              element={<Skills navbarHeight={navbarHeight} />}
            />
            <Route
              path="/about-me"
              element={<About navbarHeight={navbarHeight} />}
            />
            <Route
              path="/contact"
              element={<Contact navbarHeight={navbarHeight} />}
            />
          </Routes>
          <Footbar />
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
