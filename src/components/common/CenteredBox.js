import { Box } from "@mui/material";
import React from "react";

const CenteredBox = (props) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    sx={{
      mx: "12vw",
      my: "10vh",
      mt: 10.5,
      minHeight: "70vh",
    }}
    {...props}
  />
);
export default CenteredBox;
