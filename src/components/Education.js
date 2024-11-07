import React from "react";
import CenteredBox from "./common/CenteredBox";
import TransparentPaper from "./common/TransparentPaper";
import {
  Avatar,
  Grid2,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import SmallerListItemText from "./common/SmallerListItemText";
import { Link } from "react-router-dom";

function Education({ navbarHeight }) {
  return (
    <CenteredBox navbarHeight={navbarHeight}>
      <TransparentPaper>
        <Grid2
          container
          spacing={{ xs: 0, md: 2 }}
          size={{ xs: 12 }}
          direction={{ xs: "column", md: "row" }}
          justifyContent="center"
          align="center"
          alignItems="center"
        >
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" justifyContent="center" align="center">
              Education
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <img
              src={process.env.PUBLIC_URL + "/img/education.png"}
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "400px",
                maxWidth: "400px",
              }}
            />
          </Grid2>
          <Grid2 order={3}>
            <List>
              <ListItem>
                <Paper
                  elevation={3}
                  sx={{
                    backgroundColor: "transparent",
                    p: "10px",
                    width: "100%",
                  }}
                >
                  <Grid2
                    container
                    spacing={3}
                    direction={{ xs: "column", md: "row" }}
                    sx={{
                      alignItems: "center",
                      justify: "flex-end",
                    }}
                  >
                    <Grid2 size={{ xs: 12, md: 2 }} align="center">
                      <Avatar
                        variant="square"
                        component={Link}
                        to="https://ftn.uns.ac.rs"
                        target="_blank"
                        src={process.env.PUBLIC_URL + "/img/ftn.png"}
                        sx={{
                          width: "100%",
                          height: "100%",
                          background: "gray",
                          maxWidth: "120px",
                        }}
                      ></Avatar>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 10 }}>
                      <ListItemText
                        primary="Bachelor with Honours in Electrical and Computer Engineering (B. Elec. Comp. Eng.)"
                        secondary="Univesity of Novi Sad, Faculty of Technical Sciences, Novi Sad | [2018] – [2022]"
                      />
                      <List disablePadding sx={{ pl: "20px" }}>
                        <ListItem disablePadding>
                          <SmallerListItemText
                            primary="Relevant Coursework"
                            secondary="Object Programming, Web Programming, Databases, E-Business System Security, XML and WEB Services"
                          />
                        </ListItem>
                        <ListItem disablePadding>
                          <SmallerListItemText
                            primary="Bachelor with Honours Thesis"
                            secondary="Protection of Cryptographic Keys Using AWS KMS Services"
                          />
                        </ListItem>
                        <ListItem disablePadding>
                          <SmallerListItemText primary="GPA" secondary="9.11" />
                        </ListItem>
                      </List>
                    </Grid2>
                  </Grid2>
                </Paper>
              </ListItem>
            </List>
          </Grid2>
        </Grid2>
      </TransparentPaper>
    </CenteredBox>
  );
}

export default Education;
