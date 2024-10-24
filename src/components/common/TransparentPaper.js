import { Paper } from "@mui/material";
import React from "react";

const TransparentPaper = (props) => (
  <Paper
    elevation={1}
    sx={{ backgroundColor: "transparent", p: "20px", minWidth: "70vw" }}
    {...props}
  />
);

export default TransparentPaper;
