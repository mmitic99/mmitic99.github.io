import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Grid2,
  Icon,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import TransparentPaper from "./common/TransparentPaper";
import CenteredBox from "./common/CenteredBox";
import { Code, Settings, Storage, Web } from "@mui/icons-material";

const SkillsData = [
  {
    category: "Backend Development",
    icon: <Code />,
    skills: [
      {
        skill: "Java",
        iconSrc: "/img/skills/java.png",
      },
      {
        skill: "SpringBoot",
        iconSrc: "/img/skills/springBoot.png",
      },
      {
        skill: "C#",
        iconSrc: "/img/skills/csharp.png",
      },
      {
        skill: "ASP.NET",
        iconSrc: "/img/skills/dotNet.png",
      },
      {
        skill: "Go",
        iconSrc: "/img/skills/goLang.png",
      },
    ],
  },
  {
    category: "Frontend Development",
    icon: <Web />,
    skills: [
      {
        skill: "HTML",
        iconSrc: "/img/skills/html.png",
      },
      {
        skill: "CSS",
        iconSrc: "/img/skills/css.png",
      },
      {
        skill: "JavaScript",
        iconSrc: "/img/skills/js.png",
      },
      {
        skill: "TypeScript",
        iconSrc: "/img/skills/ts.png",
      },
      {
        skill: "Angular",
        iconSrc: "/img/skills/angular.png",
      },
      {
        skill: "React",
        iconSrc: "/img/skills/react.png",
      },
    ],
  },
  {
    category: "Databases",
    icon: <Storage />,
    skills: [
      {
        skill: "PostgreSQL",
        iconSrc: "/img/skills/postgreSql.png",
      },
      {
        skill: "MongoDB",
        iconSrc: "/img/skills/mongoDb.png",
      },
      {
        skill: "Neo4j",
        iconSrc: "/img/skills/neo4j.png",
      },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: <Settings />,
    skills: [
      {
        skill: "Git",
        iconSrc: "/img/skills/git.png",
      },
      {
        skill: "GitHub",
        iconSrc: "/img/skills/github.png",
      },
      {
        skill: "Docker",
        iconSrc: "/img/skills/docker.png",
      },
      {
        skill: "AWS",
        iconSrc: "/img/skills/aws.png",
      },
    ],
  },
];

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
                maxHeight: "300px",
                maxWidth: "300px",
              }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 2 }}>
            <Typography variant="h4" justifyContent="center" align="center">
              Skills & Technologies
            </Typography>
          </Grid2>
          <Grid2
            order={3}
            sx={{
              px: "5vw",
            }}
          >
            <Grid2 container spacing={3}>
              {SkillsData.map((group) => (
                <Grid2
                  size={{ xs: 12 }}
                  sx={{
                    alignItems: "center",
                  }}
                >
                  <Card
                    sx={{
                      alignItems: "center",
                      p: 1,
                    }}
                  >
                    <CardContent alignItems="center">
                      <Stack
                        sx={{ p: 1 }}
                        alignItems="center"
                        justifyContent="center"
                        direction="row"
                        spacing={1}
                      >
                        {group.icon}
                        <Typography variant="h6">{group.category}</Typography>
                      </Stack>

                      <Grid2
                        container
                        spacing={1}
                        justifyContent="center"
                        align="center"
                        alignItems="center"
                      >
                        {group.skills.map((skill) => (
                          <Grid2 item>
                            <Chip
                              avatar={
                                <Avatar
                                  alt={skill.skill}
                                  src={process.env.PUBLIC_URL + skill.iconSrc}
                                />
                              }
                              label={skill.skill}
                            />
                          </Grid2>
                        ))}
                      </Grid2>
                    </CardContent>
                  </Card>
                </Grid2>
              ))}
            </Grid2>
          </Grid2>
        </Grid2>
      </TransparentPaper>
    </CenteredBox>
  );
}

export default Skills;
