import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
} from "@mantine/core";
import React from "react";
import GameIcon from "../../../assets/GameIcon";
import GitIcon from "../../../assets/GitIcon";
import MailIcon from "../../../assets/MailIcon";
import PhoneIcon from "../../../assets/PhoneIcon";
import SticksGame from "../../../assets/SticksGame";

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
    icon: <PhoneIcon></PhoneIcon>,
    tools: ["React.js", "TypeScript", "Mantine UI", "EmailJS"],
  },
  {
    title: "Simulating Game of Pickup Sticks",
    description:
      "This c++ console program simulates a simplified version of the game of pickup sticks. The game consists of a group of sticks placed randomly on top of each other in a tangled mess. I modified depth-first search to perform a topological sort to determine if a solution existed through cycle detection. This project was an assignment in the CS302 Data Structures course I took during my undergrad at UNLV. My plan is to recreate this as a part of a browser application to visually animate different data structures from old assignments.",
    icon: <SticksGame />,
    tools: ["C++"],
  },
  {
    title: "Favorite Video Games Dashboard",
    description:
      "A website to display updates, stats, and other info from my favorite games. Will grab information through various APIs to beautifully display info about the current games I'm playing in one place.",
    icon: <GameIcon />,
    tools: ["coming soon"],
  },
];

const useStyles = createStyles((theme) => ({
  outerContainer: {
    border: "3px solid green",
    height: "100vh",
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
      {/* <feature.icon size={50} stroke={2} color={theme.fn.primaryColor()} /> */}
      {feature.icon}
      <Group>
        <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <GitIcon
          onClick={() => {
            window.open("https://github.com/ordonutz", "_blank");
          }}
          className={classes.resumeButtons}
        />
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
// import {
//   Image,
//   Text,
//   Container,
//   ThemeIcon,
//   Title,
//   SimpleGrid,
//   createStyles,
//   Button,
//   Badge,
// } from "@mantine/core";
// import { useState } from "react";
// import CarouselProjects from "../../CarouselProjects";

// const useStyles = createStyles((theme) => ({
//   wrapper: {
//     paddingTop: 80,
//     paddingBottom: 50,
//   },

//   item: {
//     display: "flex",
//   },

//   itemIcon: {
//     padding: theme.spacing.xs,
//     marginRight: theme.spacing.md,
//   },

//   itemTitle: {
//     marginBottom: theme.spacing.xs / 2,
//   },

//   supTitle: {
//     textAlign: "center",
//     textTransform: "uppercase",
//     fontWeight: 800,
//     fontSize: theme.fontSizes.sm,
//     color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
//       .color,
//     letterSpacing: 0.5,
//   },

//   title: {
//     lineHeight: 1,
//     textAlign: "center",
//     marginTop: theme.spacing.xl,
//   },

//   description: {
//     textAlign: "center",
//     marginTop: theme.spacing.xs,
//   },

//   highlight: {
//     backgroundColor: theme.fn.variant({
//       variant: "light",
//       color: theme.primaryColor,
//     }).background,
//     padding: 5,
//     paddingTop: 0,
//     borderRadius: theme.radius.sm,
//     display: "inline-block",
//     color: theme.colorScheme === "dark" ? theme.white : "inherit",
//   },
// }));

// interface FeatureImage {
//   image: string;
//   title: React.ReactNode;
//   description: React.ReactNode;
// }

// interface FeaturesImagesProps {
//   supTitle: React.ReactNode;
//   description: React.ReactNode;
//   data: FeatureImage[];
// }

// export default function ProjectPage({
//   supTitle,
//   description,
//   data,
// }: FeaturesImagesProps) {
//   const { classes } = useStyles();
//   const [gridView, setGridView] = useState(true);

//   const items = data.map((item) => (
//     <div className={classes.item} key={item.image}>
//       <ThemeIcon
//         variant="light"
//         className={classes.itemIcon}
//         size={60}
//         radius="md"
//       >
//         {/* <Image src={IMAGES[item.image]} /> */}
//       </ThemeIcon>

//       <div>
//         <Text weight={700} size="lg" className={classes.itemTitle}>
//           {item.title}
//         </Text>
//         <Text color="dimmed">{item.description}</Text>
//       </div>
//     </div>
//   ));

//   return (
//     <Container
//       size="lg"
//       className={classes.wrapper}
//       // style={{ background: "blue" }}
//     >
//       <Text className={classes.supTitle}>{supTitle}</Text>

//       <Title className={classes.title} order={2}>
//         PharmLand is <span className={classes.highlight}>not</span> just for
//         pharmacists
//       </Title>

//       <Container size={660} p={0}>
//         <Text color="dimmed" className={classes.description}>
//           {description}
//         </Text>
//       </Container>
//       <Button
//         onClick={() => {
//           setGridView(!gridView);
//         }}
//       >
//         Grid View
//       </Button>
//       {gridView ? (
//         <SimpleGrid
//           cols={2}
//           spacing={50}
//           breakpoints={[{ maxWidth: 550, cols: 1, spacing: 40 }]}
//           style={{ marginTop: 30 }}
//         >
//           {items}
//         </SimpleGrid>
//       ) : (
//         <CarouselProjects />
//       )}
//     </Container>
//   );
// }
