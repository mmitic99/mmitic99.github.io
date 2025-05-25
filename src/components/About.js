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

function About({ navbarHeight }) {
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
              About me
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }} sx={{ p: "10vh" }}>
            <img
              src={process.env.PUBLIC_URL + "/img/about.png"}
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "300px",
                maxWidth: "300px",
              }}
            />
          </Grid2>
          <Grid2
            order={3}
            sx={{
              px: "5vw",
            }}
          >
            <List>
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
                    spacing={0.3}
                    direction={{ xs: "column", md: "row" }}
                    sx={{
                      alignItems: "center",
                      justify: "flex-end",
                    }}
                  >
                    <Typography variant="body1" align="left" sx={{ p: 0 }}>
                      I’m Mihajlo, a passionate full-stack developer with a
                      strong focus on building robust and scalable applications.
                      I have a Bachelor’s degree in Electrical and Computer
                      Engineering, which has given me a solid technical
                      foundation and the analytical skills to tackle complex
                      problems. I enjoy combining this background with
                      creativity to develop clean and efficient solutions.
                    </Typography>
                    <Typography variant="body1" align="left" sx={{ p: 0 }}>
                      I had the opportunity to gain practical experience through
                      an internship, where I worked on building a full-stack
                      application with a focus on backend development using Java
                      Spring Boot. That experience helped me understand the
                      importance of collaboration, writing maintainable code,
                      and building features that solve real user needs.
                    </Typography>
                    <Typography variant="body1" align="left" sx={{ p: 0 }}>
                      In addition to my internship, I’m constantly working on
                      personal projects to sharpen my skills and explore new
                      technologies. My current stack includes Java Spring Boot
                      for backend and Angular or React for frontend.
                    </Typography>
                    <Typography variant="body1" align="left" sx={{ p: 0 }}>
                      Outside of coding, I enjoy reading, playing games,
                      spending time with friends, and playing sports to stay
                      active and inspired. I’m always curious to learn more
                      about the world around me, and I find that these
                      activities help me stay balanced and energized.
                    </Typography>
                    <Typography variant="body1" align="left" sx={{ p: 0 }}>
                      I’m eager to continue learning and growing as a developer,
                      and I’m always open to new challenges and collaborations!
                    </Typography>
                    <Typography variant="body1" align="left" sx={{ p: 0 }}>
                      Let’s connect and see how we can build something great
                      together!
                    </Typography>
                  </Grid2>
                </Paper>
              </ListItem>
              <ListItem>
                <Paper
                  elevation={3}
                  sx={{
                    p: "10px",
                    width: "100%",
                  }}
                >
                  timeline
                </Paper>
              </ListItem>
            </List>
          </Grid2>
        </Grid2>
      </TransparentPaper>
    </CenteredBox>
  );
}

export default About;
