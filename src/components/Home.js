import { Grid2, Typography } from "@mui/material";
import React from "react";
import SocialMediaBar from "./SocialMediaBar";
import TransparentPaper from "./common/TransparentPaper";
import CenteredBox from "./common/CenteredBox";

function Home({ navbarHeight }) {
  return (
    <CenteredBox navbarHeight={navbarHeight}>
      <TransparentPaper>
        <Grid2
          container
          spacing={{ xs: 0, md: 2 }}
          direction={{ xs: "column", md: "row" }}
          sx={{
            alignItems: "center",
            justify: "flex-end",
          }}
        >
          <Grid2
            size={{ xs: 12, md: 6 }}
            alignItems="center"
            justify="flex-end"
            order={{ xs: 2, md: 1 }}
          >
            <img
              src={process.env.PUBLIC_URL + "/img/home.png"}
              style={{ width: "100%", height: "100%" }}
            />
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 6 }}
            alignItems="center"
            justify="center"
            order={{ xs: 1, md: 2 }}
          >
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
              Bachelor's degree in Electrical and Computer Engineering.
              Passionate about technology and problem-solving, I am eager to
              begin a rewarding career in the tech industry by applying my
              skills and continuously learning.
            </Typography>
          </Grid2>
        </Grid2>
      </TransparentPaper>
      <SocialMediaBar></SocialMediaBar>
    </CenteredBox>
  );
}

export default Home;
