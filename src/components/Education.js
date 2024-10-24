import React from "react";
import CenteredBox from "./common/CenteredBox";
import TransparentPaper from "./common/TransparentPaper";
import {
  Avatar,
  Grid2,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { fullScreen, smallScreen } from "./common/const";
import SmallerListItemText from "./common/SmallerListItemText";
import { Link } from "react-router-dom";

function Education() {
  const small = useMediaQuery(smallScreen);
  return (
    <CenteredBox>
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
              src={process.env.PUBLIC_URL + "/img/education.png"}
              style={{ width: "100%", height: "100%" }}
            />
          </Grid2>
          <Grid2
            size={small ? 16 : 8}
            alignItems="center"
            justify="center"
            order={small ? 1 : 2}
          >
            <Typography variant="h4" justifyContent="center" align="center">
              Education
            </Typography>
          </Grid2>
          <Grid2 size={16} alignItems="center" justify="flex-end" order={3}>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    component={Link}
                    to="https://ftn.uns.ac.rs"
                    target="_blank"
                    src={process.env.PUBLIC_URL + "/img/ftn.png"}
                    sx={{ width: 56, height: 56, background: "gray" }}
                  ></Avatar>
                </ListItemAvatar>
                <Paper
                  sx={{ backgroundColor: "transparent", p: "10px", ml: "10px" }}
                >
                  <ListItemText
                    primary="Bachelor with Honours in Electrical and Computer Engineering (B.Elec.Comp.Eng.)"
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
