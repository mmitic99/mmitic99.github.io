import { GitHub, Google, Instagram, LinkedIn } from "@mui/icons-material";
import { ButtonGroup, IconButton, Link } from "@mui/material";
import React from "react";

const githubLink = "https://github.com/mmitic99";
const linkedInLink = "https://www.linkedin.com/in/mihajlomitic/";
const instagramLink = "https://www.instagram.com/mmitic_99/";
const googleLink = "mailto:mihajlomiticmiki@gmail.com";

function SocialMediaBar(props) {
  return (
    <div
      style={{
        position: "absolute",
        top: "40vh",
        left: 0,
      }}
      {...props}
    >
      <ButtonGroup orientation={props.horizontal ? "horizontal" : "vertical"}>
        <IconButton component={Link} href={githubLink} target="_blank">
          <GitHub fontSize="medium"></GitHub>
        </IconButton>
        <IconButton component={Link} href={linkedInLink} target="_blank">
          <LinkedIn fontSize="medium"></LinkedIn>
        </IconButton>
        <IconButton component={Link} href={instagramLink} target="_blank">
          <Instagram fontSize="medium"></Instagram>
        </IconButton>
        <IconButton component={Link} href={googleLink} target="_blank">
          <Google fontSize="medium"></Google>
        </IconButton>
      </ButtonGroup>
    </div>
  );
}
export default SocialMediaBar;
