// import { Group, ScrollArea, SimpleGrid, Text } from '@mantine/core';
// import React from 'react';
// import GitIcon from '../../../assets/GitIcon';
// import LinkedIcon from '../../../assets/LinkedIcon';
// import MailIcon from '../../../assets/MailIcon';
// import PhoneIcon from '../../../assets/PhoneIcon';

// function ResumePage() {
//   return (

//   <div style={{margin: "auto", width: "70%", background:"blue"}}>
//     <ScrollArea style={{height: 500, background: "orange"}}>
//      <SimpleGrid style={{background: "white"}}>

//   </SimpleGrid>
//   </ScrollArea>
//   </div>

//   )
// }
import {
  createStyles,
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
  Paper,
  ScrollArea,
  Group,
  Title,
  useMantineTheme,
} from "@mantine/core";

import GitIcon from "../../../assets/GitIcon";
import LinkedIcon from "../../../assets/LinkedIcon";
import MailIcon from "../../../assets/MailIcon";
import PhoneIcon from "../../../assets/PhoneIcon";

interface resumeSectionData {
  title: string;
  subTitles: Array<string>;
  dates: Array<string>;
  descriptions: Array<string>;
}

const temp = [
  {
    title: "Education",
    subsection1: {
      name: "University of Nevada Las Vegas, Bachelor of Science in Computer Science",
      date: "",
      description: "",
    },
  },
  { title: "Experience" },
  { title: "Projects" },
  { title: "Leadership Experience" },
];

const resumeSectionTitle = [
  "Education",
  "Experience",
  "Projects",
  "Leadership Experience",
];

const resumeSectionSubtitles = [
  "University of Nevada Las Vegas, Bachelor of Science in Computer Science",
  "College of Southern Nevada, Associate of Science",
  "Rensselaer Polytechnic Institute Troy, NY",
];

const useStyles = createStyles((theme) => ({
  card: {
    background: theme.colors.pink[2],
    transition: "transform 150ms ease, box-shadow 150ms ease",
    width: "90%",
    margin: "1% auto",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
  resumeTitle: {},

  paperResume: {
    shadow: "xl",
    height: "25%",
    background: theme.colors.gray[2],
    width: "70%",
    margin: "7% auto",
  },
  cardGrid: {},
  resumeHeader: {
    margin: "5% 5%",
  },
}));

export function ResumePage() {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const cards = resumeSectionTitle.map((title) => (
    <Card key={title} p="sm" radius="md" component="a" className={classes.card}>
      <Text>{title}</Text>
    </Card>
  ));

  return (
    <Paper radius="md" shadow="xl" className={classes.paperResume}>
      <ScrollArea style={{ height: "100%" }} type="always" scrollbarSize={20}>
        <Group className={classes.resumeHeader} position="apart" spacing="md">
          <Title color={theme.colors.gray[7]} classNames={classes.title}>
            Leslie Ordonez
          </Title>
          <Group>
            <PhoneIcon />
            <MailIcon />
            <LinkedIcon />
            <GitIcon />
          </Group>
        </Group>
        <SimpleGrid
          className={classes.cardGrid}
          cols={1}
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          {cards}
        </SimpleGrid>
      </ScrollArea>
    </Paper>
  );
}

export default ResumePage;

{
  /* <Container
  py="xl"
  style={{
    background: "orange",
    maxHeight: "50%",
    marginTop: "5%",
    maxWidth: "60%",
  }}
>
  <SimpleGrid style={{}} cols={1} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
    {cards}
  </SimpleGrid>
</Container>; */
}
