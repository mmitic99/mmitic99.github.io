import { AppBar, Box, Typography } from "@mui/material";
import React from "react";

function Footbar() {
  const year = new Date().getFullYear();
  return (
    <AppBar
      sx={{
        backgroundColor: "primary",
        position: "static",
        width: "100%",
        mt: "auto",
        bottom: 0,
        textAlign: "center",
      }}
    >
      <Typography variant="caption" fontSize={10} align="center">
        © Copyright {year}. Made by <strong>Mihajlo Mitić</strong>
      </Typography>
    </AppBar>
  );
}
export default Footbar;
