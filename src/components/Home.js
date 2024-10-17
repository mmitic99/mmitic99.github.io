import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import SocialMediaBar from "./SocialMediaBar";

function Home() {
  return (
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
    >
      <Paper elevation={1} sx={{ backgroundColor: "transparent" }}>
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
      </Paper>
      <SocialMediaBar></SocialMediaBar>
    </Box>
  );
}

export default Home;
