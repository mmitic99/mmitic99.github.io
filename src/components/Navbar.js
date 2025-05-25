import {
  AppBar,
  Button,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Contrast } from "@mui/icons-material";
import { smallScreen } from "./common/const";

const NavbarButton = styled(Button)({
  textTransform: "none",
  fontSize: 16,
});

const navElements = [
  "Home",
  "Education",
  "Experience",
  "Projects",
  "Skills",
  "About me",
  "Contact",
];

function Navbar({ handleThemeClick, onHeightChange }) {
  const small = useMediaQuery(smallScreen);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const newHeight = entry.contentRect.height;
        onHeightChange(newHeight);
      }
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [onHeightChange]);

  return (
    <AppBar position="fixed" ref={ref}>
      <Toolbar>
        {small ? (
          <>
            <List
              sx={{
                width: "100%",
                maxHeight: "200px",
                overflow: "auto",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              <ListItem disableGutters disablePadding>
                <Typography
                  variant="h5"
                  sx={{
                    flexGrow: 1,
                    textDecoration: "none",
                    boxShadow: "none",
                    color: "inherit",
                  }}
                  component={Link}
                  to="/"
                >
                  Mihajlo Mitić
                </Typography>
                <ListItemButton
                  disableGutters
                  edge="end"
                  onClick={handleClick}
                  color="inherit"
                  sx={{ maxWidth: "25px", pr: "50px" }}
                >
                  <MenuIcon fontSize="medium" />
                </ListItemButton>
                <ListItemButton
                  disableGutters
                  edge="end"
                  color="inherit"
                  onClick={handleThemeClick}
                  sx={{ maxWidth: "25px" }}
                >
                  <Contrast fontSize="small"></Contrast>
                </ListItemButton>
              </ListItem>
              <ListItem disableGutters disablePadding>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List>
                    {navElements.map((el) => (
                      <ListItem key={el} disablePadding>
                        {el === "Home" ? (
                          <ListItemButton
                            sx={{ maxHeight: "2em" }}
                            color="inherit"
                            component={Link}
                            to="/"
                            onClick={handleClick}
                          >
                            {el}
                          </ListItemButton>
                        ) : (
                          <ListItemButton
                            sx={{ maxHeight: "2em" }}
                            color="inherit"
                            component={Link}
                            to={"/" + el.replace(/\s+/g, "-").toLowerCase()}
                            onClick={handleClick}
                          >
                            {el}
                          </ListItemButton>
                        )}
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </ListItem>
            </List>
          </>
        ) : (
          <>
            <Typography
              variant="h5"
              sx={{
                flexGrow: 1,
                textDecoration: "none",
                boxShadow: "none",
                color: "inherit",
              }}
              component={Link}
              to="/"
            >
              Mihajlo Mitić
            </Typography>

            {navElements.map((el) =>
              el === "Home" ? (
                <NavbarButton color="inherit" component={Link} to="/">
                  {el}
                </NavbarButton>
              ) : (
                <NavbarButton
                  color="inherit"
                  component={Link}
                  to={"/" + el.replace(/\s+/g, "-").toLowerCase()}
                >
                  {el}
                </NavbarButton>
              )
            )}
            <IconButton color="inherit" onClick={handleThemeClick}>
              <Contrast fontSize="small"></Contrast>
            </IconButton>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
