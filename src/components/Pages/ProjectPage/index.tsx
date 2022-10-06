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
import GitIcon from "../../../assets/GitIcon";
import MailIcon from "../../../assets/MailIcon";
import PhoneIcon from "../../../assets/PhoneIcon";

interface projectData {
  title: string;
  description: string;
  icon: JSX.Element;
  tools: Array<string>;
}
const mockdata: Array<projectData> = [
  {
    title: "This Portfolio",
    description:
      "This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit",
    icon: <PhoneIcon></PhoneIcon>,
    tools: ["React.js", "TypeScript", "Mantine UI", "EmailJS"],
  },
  {
    title: "Privacy focused",
    description:
      "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",
    icon: <PhoneIcon></PhoneIcon>,
    tools: ["C++"],
  },
  {
    title: "No third parties",
    description:
      "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",
    icon: <PhoneIcon></PhoneIcon>,
    tools: ["coming soon", "tbd"],
  },
  {
    title: "No third parties",
    description:
      "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",
    icon: <PhoneIcon></PhoneIcon>,
    tools: ["coming soon", "tbd"],
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

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
    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
      cursor: "pointer",
    },
  },
}));

interface ProjectProps {
  scrollRef?: any;
}

const ProjectPage = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<ProjectProps>
>((props: ProjectProps, ref) => {
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
          <Badge>{tool}</Badge>
        ))}
      </Group>

      <Text size="sm" color="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));
  return (
    <Container size="lg" py="xl" ref={ref}>
      <Title order={2} className={classes.title} align="center" mt="sm">
        Projects
      </Title>

      <Text
        color="dimmed"
        className={classes.description}
        align="center"
        mt="md"
      >
        not sure what to put here yet
      </Text>

      <SimpleGrid
        cols={2}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
});
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
