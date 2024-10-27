import {
  Avatar,
  Collapse,
  Grid2,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import SocialMediaBar from "./SocialMediaBar";
import TransparentPaper from "./common/TransparentPaper";
import CenteredBox from "./common/CenteredBox";
import { smallScreen } from "./common/const";
import { Link } from "react-router-dom";
import SmallerListItemText from "./common/SmallerListItemText";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

function Experience({ navbarHeight }) {
  const small = useMediaQuery(smallScreen);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
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
              src={process.env.PUBLIC_URL + "/img/experience.png"}
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
              Experience
            </Typography>
          </Grid2>
          <Grid2 size={16} alignItems="center" justify="flex-end" order={3}>
            <List>
              <ListItem sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography variant="h5">Internships</Typography>
              </ListItem>
              <ListItem>
                <Paper
                  sx={{
                    backgroundColor: "transparent",
                    p: "10px",
                    width: "100%",
                  }}
                >
                  <Grid2
                    container
                    spacing={3}
                    columns={16}
                    direction={small ? "column" : "row"}
                    sx={{
                      alignItems: "center",
                      justify: "flex-end",
                    }}
                  >
                    <Grid2 size={small ? 16 : 2} align="center">
                      <Avatar
                        variant="square"
                        component={Link}
                        to="https://www.levi9.com"
                        target="_blank"
                        src={process.env.PUBLIC_URL + "/img/levi9.png"}
                        sx={{
                          width: "100%",
                          height: "100%",
                          background: "gray",
                          maxWidth: "120px",
                        }}
                      ></Avatar>
                    </Grid2>
                    <Grid2 size={small ? 16 : 14}>
                      <ListItemText
                        primary="Java Student Internship"
                        secondary="Levi9 Technology Services, Novi Sad | [March 2022] – [April 2022]"
                      />
                      <List disablePadding sx={{ pl: "20px" }}>
                        <ListItem disablePadding>
                          <SmallerListItemText primary="Developed full-stack application with a focus on backend services, using Java and the Spring Boot framework." />
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton
                            onClick={handleClick}
                            sx={{ display: "flex", justifyContent: "flex-end" }}
                          >
                            <Typography variant="body2">
                              {open ? "Less" : "More"}
                            </Typography>

                            {open ? <ExpandLess /> : <ExpandMore />}
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <Collapse in={open} timout="auto" unmountOnExit>
                            <List>
                              <ListItem>
                                <SmallerListItemText primary="The topic of the internship was creating a web application for vehicle booking and displaying the booking history. It was necessary to implement a microservice architecture where microservices communicated with each other via the RESTful API protocol. All microservices were placed on the AWS platform (EC2 instances) where a database (PostgreSQL) was also places. Additional AWS services used were SES (Simple Email Service) and SNS (Simple Notification Service) for sending notification to application users. The Google Maps API was used to display vehicles on the map. Web sockets are used for the purpose of displaying the current state of free vechile. Tools: Java, Spring Boot, AWS (EC2, RDS), Google Maps API, Feign Client, PostgreSQL, Hibernate ORM, Eureka service discovery, Websockets, Mockito, JUnit, Angular" />
                              </ListItem>
                            </List>
                          </Collapse>
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
      <SocialMediaBar></SocialMediaBar>
    </CenteredBox>
  );
}

export default Experience;
