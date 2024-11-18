import { Grid2, Typography } from "@mui/material";
import React from "react";
import TransparentPaper from "./common/TransparentPaper";
import CenteredBox from "./common/CenteredBox";

function Skills({ navbarHeight }) {
  return (
    <CenteredBox navbarHeight={navbarHeight}>
      <TransparentPaper>
        <Grid2
          container
          spacing={{ xs: 0, md: 2 }}
          direction={{ xs: "column", md: "row" }}
          justifyContent="center"
          align="center"
          alignItems="center"
        >
          <Grid2
            size={{ xs: 12, md: 6 }}
            order={{ xs: 2, md: 1 }}
            sx={{ p: "10vh" }}
          >
            <img
              src={process.env.PUBLIC_URL + "/img/skills.png"}
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "400px",
                maxWidth: "400px",
              }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 2 }}>
            <Typography variant="h4" justifyContent="center" align="center">
              Skills
            </Typography>
          </Grid2>
          <Grid2 order={3}></Grid2>
        </Grid2>
      </TransparentPaper>
    </CenteredBox>
  );
}

export default Skills;
