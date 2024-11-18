import React, { useEffect, useState } from "react";
import CenteredBox from "./common/CenteredBox";
import TransparentPaper from "./common/TransparentPaper";
import {
  Grid2,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import axios from "axios";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";
import { Circle } from "@mui/icons-material";

function formatDate(string) {
  var options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(string).toLocaleDateString([], options);
}

function Projects({ navbarHeight }) {
  var [githubProjects, setGithubProjects] = useState([]);
  const [isGithubProjcectsFetched, setisGithubProjcectsFetched] =
    useState(false);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/mmitic99/repos?sort=created"
        );
        setGithubProjects(response.data);
        setisGithubProjcectsFetched(true);
      } catch (error) {
        console.error("Error fetching data from GitHub:", error);
      }
    };
    fetchProjects();
  }, []);

  const projects = [
    {
      name: "Software Specification and Modeling",
      languages: "C#-WPF",
      startEndDate: "02/2021 - 06/2021",
      details: [
        "In a project, it was necessary to create an informational system for a hospital. We had several roles, and I held the role of a secretary, managing CRUD operations involving patients and doctors, as well as scheduling appointments and surgeries.",
      ],
      githubLink: "https://github.com/mmitic99/IS_Bolnica",
    },
    {
      name: "Software Design",
      languages: "C# / ASP.NET - Angular",
      startEndDate: "10/2021 – 01/2022",
      details: [
        "Continuing from the previous project, multiple teams were involved. My team was responsible for integrating applications, as we needed to extend the scope to include a pharmacy information system alongside the hospital information system.",
        "Database: PostgreSQL",
      ],
      githubLink: "https://github.com/PSW-Organization-8",
    },
    {
      name: "Internet software architectures",
      languages: "Java / SpringBoot - Angular",
      startEndDate: "10/2021 – 01/2022",
      details: [
        "Within the project task, it was necessary to implement a web application that serves as a centralized system through which users can reserve cottages, boats, and fishing instructors. The primary purpose of the application is to maintain records of advertisers, registered entities, reservations, adventure scheduling slots, users, and their profiles.",
        "Monolithic architecture, Database: PostgreSQL, Testing: Mockito, JUnit",
      ],
      githubLink: "https://github.com/mmitic99/ISA_Projekat",
    },
    {
      name: "Dislinkt",
      languages: "Go, Java / SpringBoot - Angular",
      startEndDate: "03/2022 – 07/2022",
      details: [
        'Project from "XML and web services" and "Security in e-business systems"',
        "It was necessary to develop a business social network to connect employers and individuals seeking employment. Additionally, from a security standpoint, implementing HTTPS, data validation, as well as authentication and access control were essential tasks.",
        "Microservice architecture, Database: MongoDB, Neo4j, PostgreSQL, Other: Docker",
      ],
      githubLink: "https://github.com/XWS-BSEP-TIM1-2022",
    },
  ];

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
              Projects
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }} sx={{ p: "10vh" }}>
            <img
              src={process.env.PUBLIC_URL + "/img/projects.png"}
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "400px",
                maxWidth: "400px",
              }}
            />
          </Grid2>
          <Grid2 order={3}>
            <Grid2 container spacing={2}>
              {isGithubProjcectsFetched && githubProjects.length !== 0 && (
                <>
                  <Grid2 item size={{ xs: 12 }}>
                    <Typography variant="h6">My GitHub Projects</Typography>
                  </Grid2>
                  <Grid2 item size={{ xs: 12 }}>
                    <Carousel>
                      {githubProjects.map((project) => (
                        <Paper sx={{ height: "15ex", p: "10px" }}>
                          <Typography
                            variant="h6"
                            component={Link}
                            to={project.html_url}
                            sx={{
                              color: "#0d74e7",
                              textDecoration: "none",
                              ":hover": { textDecoration: "underline" },
                              wordWrap: "break-word",
                            }}
                          >
                            {project.name}
                          </Typography>
                          <Typography variant="body2">
                            {project.description}
                          </Typography>
                          {project.language && (
                            <Typography variant="body2">
                              Language: {project.language}
                            </Typography>
                          )}
                          <Typography variant="body2">
                            Last update: {formatDate(project.updated_at)}
                          </Typography>
                        </Paper>
                      ))}
                    </Carousel>
                  </Grid2>
                </>
              )}
              <Grid2 item size={{ xs: 12 }}>
                <Typography variant="h6">Key Projects</Typography>
              </Grid2>
              <Grid2 item size={{ xs: 12 }}>
                <List>
                  {projects.map((project) => (
                    <ListItem>
                      <Paper
                        elevation={3}
                        sx={{
                          p: "10px",
                          width: "100%",
                        }}
                      >
                        <List disablePadding>
                          <ListItem>
                            <ListItemText
                              justifyContent="center"
                              align="center"
                              alignItems="center"
                            >
                              <strong>{project.name}</strong>
                            </ListItemText>
                          </ListItem>
                          <ListItem>
                            <ListItemText
                              justifyContent="center"
                              align="center"
                              alignItems="center"
                            >
                              <Grid2
                                container
                                justifyContent="center"
                                align="center"
                                alignItems="center"
                                spacing={2}
                              >
                                <Grid2 sx={6}>{project.startEndDate}</Grid2>
                                <Grid2>|</Grid2>
                                <Grid2 sx={6}>{project.languages}</Grid2>
                              </Grid2>
                            </ListItemText>
                          </ListItem>
                          <ListItem>
                            <List>
                              {project.details.map((detail) => (
                                <ListItem disablePadding>
                                  <ListItemIcon>
                                    <Circle fontSize="small" />
                                  </ListItemIcon>
                                  <ListItemText primary={detail} />
                                </ListItem>
                              ))}
                            </List>
                          </ListItem>
                        </List>
                      </Paper>
                    </ListItem>
                  ))}
                </List>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </TransparentPaper>
    </CenteredBox>
  );
}
export default Projects;
