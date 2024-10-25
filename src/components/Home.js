import { Grid2, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import SocialMediaBar from "./SocialMediaBar";
import TransparentPaper from "./common/TransparentPaper";
import CenteredBox from "./common/CenteredBox";
import { smallScreen } from "./common/const";

function Home({ navbarHeight }) {
  const small = useMediaQuery(smallScreen);
  return (
    <CenteredBox navbarHeight={navbarHeight}>
      <TransparentPaper>
        <Grid2
          container
          spacing={small ? 0 : 2}
          columns={16}
          direction={small ? "column" : "row"}
          sx={{
            alignItems: "center",
            justify: "flex-end",
          }}
        >
          <Grid2
            size={small ? 16 : 8}
            alignItems="center"
            justify="flex-end"
            order={small ? 2 : 1}
          >
            <img
              src={process.env.PUBLIC_URL + "/img/home.png"}
              style={{ width: "100%", height: "100%" }}
            />
          </Grid2>
          <Grid2
            size={small ? 16 : 8}
            alignItems="center"
            justify="center"
            order={small ? 1 : 2}
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
