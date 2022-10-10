import {
  createStyles,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  CheckIcon,
  MantineSize,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import FolderIcon from "../../../assets/FolderIcon";

/**
 * @param theme MantineTheme object that stores styling properties to be used everywhere in the app
 */
const useStyles = createStyles((theme) => ({
  outerContainer: {
    border: "3px solid red",
    height: "25%",
    marginTop: "clamp(1.20rem, calc(0.91rem + 1.47vw), 1.95rem)",
    // display: "flex",
    // flexDirection: "row",
    // flexWrap: "nowrap",
    // justifyContent: "center",
    // alignItems: "center",

    // display: "flex",
    // flexDirection: "column",
    // flexWrap: "nowrap",
    // justifyContent: "center",
    // alignItems: "center",
    // alignContent: "center",
  },
  inner: {
    // border: "3px solid yellow",
    height: "auto",
    width: "auto",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    // border: "3px solid pink",

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: "clamp(1.80rem, calc(1.21rem + 2.97vw), 3.32rem)",
    lineHeight: 1.2,
    fontWeight: 700,
  },

  subTitle: {
    fontSize: "clamp(1.00rem, calc(0.78rem + 1.10vw), 1.56rem)",
    color: theme.colors.cyan[4],
  },

  listItemsText: {
    fontSize: "1.5em",
    color: theme.colors.gray[4],
    fontWeight: 340,
    [theme.fn.smallerThan("xs")]: {
      fontSize: "1em",
    },
  },
  image: {
    // border: "3px solid orange",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: "auto",
    width: "auto",

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
  buttonGroup: {
    border: "3px solid red",
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },
  Button: {
    [theme.fn.smallerThan("xs")]: {
      flexShrink: 1,
    },
  },
}));

interface homeProps {
  id?: string;
}
/**
 * TODO: add onClick functionality to buttons, clean up styling, update jsdoc
 *       add background image to make it look less basic, add animations
 * About me section that acts like a landing page
 * @returns container with text and an svg image
 */
const HomePage = (props: homeProps) => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [screenSize, setScreenSize] = useState<MantineSize | undefined>();
  console.log("theme", theme.fn.smallerThan("sm"));
  return (
    <div className={classes.outerContainer} id={props.id}>
      <div style={{ maxWidth: "2000px" }} className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            hi! I'm leslie
            <br />
            <Text
              component="span"
              variant="gradient"
              gradient={{ from: "yellow", to: "cyan", deg: 90 }}
              style={{
                fontSize: "clamp(1.80rem, calc(1.21rem + 2.97vw), 3.32rem)",
              }}
            >
              Software Engineer
            </Text>
          </Title>
          <Text mt="md" className={classes.subTitle}>
            intrigued, curious, and excited about everything web development
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="md"
            className={classes.listItemsText}
            icon={
              <ThemeIcon color="teal" size={24} radius="xl">
                <CheckIcon />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Industry experience in React.js</b>
            </List.Item>
            <List.Item>
              <b>Recent computer science b.s. grad</b>
            </List.Item>
            <List.Item>
              <b>Proficient undergrad background in C++</b>
            </List.Item>
          </List>
          <Group
            mt={30}
            spacing="xl"
            position="left"
            className={classes.buttonGroup}
          >
            <Button
              radius="lg"
              size="md"
              variant="light"
              color="green"
              className={classes.Button}
            >
              Resume
            </Button>
            <Button
              radius="lg"
              size="md"
              variant="light"
              color="yellow"
              className={classes.Button}
            >
              Projects
            </Button>
            {/* <Button
              radius="xl"
              size={screenSize}
              variant="light"
              color="blue"
              className={classes.Button}
            >
              Contact
            </Button> */}
          </Group>
        </div>
        <div className={classes.image}>
          <FolderIcon />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
