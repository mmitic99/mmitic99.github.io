import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import SocialMediaBar from "./SocialMediaBar";
import TransparentPaper from "./common/TransparentPaper";
import CenteredBox from "./common/CenteredBox";

function Home() {
  return (
    <CenteredBox>
      <TransparentPaper elevation={1}>
        <Typography
          variant="h4"
          gutterBottom
          color="inherit"
          align="center"
          sx={{ pb: "2vh" }}
        >
          Hey, I'm Mihajlo Mitić
        </Typography>
        <Typography variant="body2" align="center" sx={{ p: 0 }}>
          I am a motivated and detail-oriented software developer with a
          Bachelor's degree in Electrical and Computer Engineering. Passionate
          about technology and problem-solving, I am eager to begin a rewarding
          career in the tech industry by applying my skills and continuously
          learning.
        </Typography>
      </TransparentPaper>
      <SocialMediaBar></SocialMediaBar>
    </CenteredBox>
  );
}

export default Home;
