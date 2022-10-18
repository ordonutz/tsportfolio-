import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  Image,
} from "@mantine/core";
import React from "react";
import GameIcon from "../../../assets/GameIcon";
import GitIcon from "../../../assets/GitIcon";
import MailIcon from "../../../assets/MailIcon";
import PhoneIcon from "../../../assets/PhoneIcon";
import SticksGame from "../../../assets/SticksGame";
import MySiteIcon from "../../../assets/MySiteIcon";

interface projectData {
  title: string;
  description: string;
  icon: JSX.Element;
  tools: Array<string>;
}
const mockdata: Array<projectData> = [
  {
    title: "Personal Portfolio Website",
    description:
      "I created this personal website to display my resume and projects. This single-page static website is made with React.js + TypeScript, Mantine component library, EmailJS, and React Scroll. This was my first time using inline styling compared to using SCSS. A huge shoutout to the Mantine UI library and Figma for helping with the overall design.",
    icon: (
      <div style={{ width: "80%" }}>
        <MySiteIcon />
      </div>
    ),
    tools: ["React.js", "TypeScript", "Mantine UI", "EmailJS"],
  },
  {
    title: "Simulating Game of Pickup Sticks",
    description:
      "This c++ console program simulates a simplified version of the game of pickup sticks. The game consists of a group of sticks placed randomly on top of each other in a tangled mess. I modified depth-first search to perform a topological sort to determine if a solution existed through cycle detection. This project was an assignment in the CS302 Data Structures course I took during my undergrad at UNLV. My plan is to recreate this as a part of a browser application to visually animate different data structures from old assignments.",
    icon: (
      <div style={{ width: "80%" }}>
        <SticksGame />
      </div>
    ),
    tools: ["C++"],
  },
  {
    title: "Video Games Dashboard",
    description:
      "A website to display updates, stats, and other info from my favorite games. Will grab information through various APIs to beautifully display info about the current games I'm playing in one place.",
    icon: (
      <div style={{ width: "80%" }}>
        <GameIcon />
      </div>
    ),
    tools: ["coming soon"],
  },
];

const useStyles = createStyles((theme) => ({
  outerContainer: {
    height: "auto",
    width: "max(calc(1.23rem + 60%), 80%)",
    marginInline: "auto",
    [theme.fn.smallerThan("xs")]: {
      width: "90%",
    },
  },
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 600,
    marginInline: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
  resumeButtons: {
    width: "2rem",
    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
      cursor: "pointer",
      opacity: "0.7",
    },
  },
}));

interface ProjectProps {
  id: string;
}

const ProjectPage = (props: ProjectProps) => {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature: projectData) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      p="xl"
    >
      {feature.icon}
      <Group>
        <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        {feature.title !== "Video Games Dashboard" && (
          <GitIcon
            onClick={() => {
              window.open("https://github.com/ordonutz", "_blank");
            }}
            className={classes.resumeButtons}
          />
        )}
      </Group>

      <Group style={{ marginTop: "10px" }}>
        {feature.tools.map((tool) => (
          <Badge key={tool}>{tool}</Badge>
        ))}
      </Group>

      <Text size="sm" color="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));
  return (
    <div className={classes.outerContainer} id={props.id}>
      <Title order={2} className={classes.title} align="center" mt="sm">
        Projects
      </Title>

      <Text
        color="dimmed"
        className={classes.description}
        align="center"
        mt="md"
      >
        See what I'm working on
      </Text>

      <SimpleGrid
        cols={2}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </div>
  );
};
export default ProjectPage;
