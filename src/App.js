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
          </Routes>
          <Footbar />
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
