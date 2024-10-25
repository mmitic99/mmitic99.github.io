import { Box } from "@mui/material";
import React from "react";

const CenteredBox = (props) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    sx={{
      mx: "12vw",
      mb: "10vh",
      mt: `calc(${props.navbarHeight}px + 10vh)`,
      minHeight: "70vh",
    }}
    {...props}
  />
);
export default CenteredBox;
