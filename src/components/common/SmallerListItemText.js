import { ListItemText } from "@mui/material";
import React from "react";

const SmallerListItemText = (props) => (
  <ListItemText
    primaryTypographyProps={{ fontSize: "14px" }}
    secondaryTypographyProps={{ fontSize: "12px" }}
    {...props}
  />
);
export default SmallerListItemText;
