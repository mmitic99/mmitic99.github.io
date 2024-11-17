import {
  Avatar,
  Collapse,
  Grid2,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import TransparentPaper from "./common/TransparentPaper";
import CenteredBox from "./common/CenteredBox";
import SmallerListItemText from "./common/SmallerListItemText";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Experience({ navbarHeight }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
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
              src={process.env.PUBLIC_URL + "/img/experience.png"}
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
              Experience
            </Typography>
          </Grid2>
          <Grid2 order={3}>
            <List>
              <ListItem sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography variant="h5">Internships</Typography>
              </ListItem>
              <ListItem>
                <Paper
                  elevation={3}
                  sx={{
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
                    <Grid2 size={{ xs: 12, md: 10 }}>
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
    </CenteredBox>
  );
}

export default Experience;
