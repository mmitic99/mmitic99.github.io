import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { blue, indigo } from '@mui/material/colors';
import { useState } from 'react';


//TODO: https://mui.com/material-ui/customization/color/
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: indigo,
  },
});

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  function handleThemeClick(){
      setIsDarkTheme(!isDarkTheme);
  }
  
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />

      <Router>
        <Navbar  handleThemeClick={handleThemeClick}/>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
    
    </ThemeProvider>
  );
}

export default App;
