import { Grid2, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import TransparentPaper from "./common/TransparentPaper";
import CenteredBox from "./common/CenteredBox";
import { smallScreen } from "./common/const";
import SocialMediaBar from "./SocialMediaBar";

function Contact({ navbarHeight }) {
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
            <div style={{ width: "100%", height: "100%" }}>
              <img
                src={process.env.PUBLIC_URL + "/img/contact.png"}
                style={{ width: "100%", height: "100%" }}
                loading="lazy"
              />
            </div>
          </Grid2>
          <Grid2
            size={small ? 16 : 8}
            alignItems="center"
            justify="center"
            order={small ? 1 : 2}
          >
            <Typography variant="h4" justifyContent="center" align="center">
              Contact
            </Typography>
          </Grid2>
          <Grid2 size={16} alignItems="center" justify="flex-end" order={3}>
            <Typography variant="body1" justifyContent="center" align="center">
              Feel free to get in touch with me via social media or email.
            </Typography>
            <SocialMediaBar
              horizontal="true"
              justifyContent="center"
              align="center"
              style={{
                position: "static",
                margin: "2vh 0",
              }}
            />
            <Typography variant="body1" justifyContent="center" align="center">
              Or simply submit the form below, and I'll get back to you as soon
              as possible.
            </Typography>
            {/*TODO:kontakt forma*/}
          </Grid2>
        </Grid2>
      </TransparentPaper>
    </CenteredBox>
  );
}
export default Contact;
