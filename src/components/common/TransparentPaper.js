import { Paper } from "@mui/material";
import React from "react";

const TransparentPaper = (props) => (
  <Paper sx={{ backgroundColor: "transparent" }} {...props} />
);

export default TransparentPaper;
