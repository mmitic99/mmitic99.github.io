import { ListItemText } from "@mui/material";
import React from "react";

const SmallerListItemText = (props) => (
  <ListItemText
    primaryTypographyProps={{ fontSize: "12px" }}
    secondaryTypographyProps={{ fontSize: "10px" }}
    {...props}
  />
);
export default SmallerListItemText;
