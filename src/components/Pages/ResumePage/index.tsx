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

const mockdata = [
  {
    title: "Top 10 places to visit in Norway this summer",
    image:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "August 18, 2022",
  },
  {
    title: "Best forests to visit in North America",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "August 27, 2022",
  },
  {
    title: "Hawaii beaches review: better than you think",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "September 9, 2022",
  },
  {
    title: "Mountains at night: 12 best locations to enjoy the view",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "September 12, 2022",
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    background: theme.colors.pink[2],
    transition: "transform 150ms ease, box-shadow 150ms ease",
    width: "80%",
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
    width: "60%",
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
  const cards = mockdata.map((article) => (
    <Card
      key={article.title}
      p="md"
      radius="md"
      component="a"
      href="#"
      className={classes.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
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
