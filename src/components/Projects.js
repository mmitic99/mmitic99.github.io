import React, { useEffect, useState } from "react";
import CenteredBox from "./common/CenteredBox";
import TransparentPaper from "./common/TransparentPaper";
import { Grid2, Paper, Typography } from "@mui/material";
import axios from "axios";
import Carousel from "react-material-ui-carousel";

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
        console.log(response.data);
        setisGithubProjcectsFetched(true);
      } catch (error) {
        console.error("Error fetching data from GitHub:", error);
      }
    };
    fetchProjects();
  }, []);
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
            <Grid2 container>
              {isGithubProjcectsFetched && githubProjects.length !== 0 && (
                <>
                  <Grid2 item size={{ xs: 12 }}>
                    <Typography variant="h6">
                      Links to github projects
                    </Typography>
                    <Carousel>
                      {githubProjects.map((project) => (
                        <Paper sx={{ height: "300px", width: "250px" }}>
                          <a
                            href={project.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.name}
                          </a>
                          <p>{project.description}</p>
                        </Paper>
                      ))}
                    </Carousel>
                  </Grid2>
                </>
              )}
              <Grid2 item size={{ xs: 12 }}>
                opis proj
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </TransparentPaper>
    </CenteredBox>
  );
}
export default Projects;
