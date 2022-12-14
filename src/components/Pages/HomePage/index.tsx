import {
  createStyles,
  Title,
  Button,
  Group,
  Text,
  List,
  CheckIcon,
  MantineSize,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import FolderIcon from "../../../assets/FolderIcon";
import { Link } from "react-scroll";
import CheckMarkIcon from "../../../assets/CheckMarkIcon";

/**
 * @param theme MantineTheme object that stores styling properties to be used everywhere in the app
 */
const useStyles = createStyles((theme) => ({
  outerContainer: {
    paddingTop: "3rem",
    marginBottom: "10%",
    width: "max(calc(1.23rem + 60%), 80%)",
    marginInline: "auto",
    [theme.fn.smallerThan("sm")]: {
      width: "90%",
      marginBottom: "30%",
    },
  },

  inner: {
    minWidth: "0",
    minHeight: "0",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },

  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginInline: "auto",
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
    color: theme.white,
    fontWeight: 340,
    [theme.fn.smallerThan("xs")]: {
      fontSize: "1em",
    },
  },
  image: {
    marginLeft: "10em",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: "auto",
    width: "auto",
    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginInline: "auto",
      marginTop: "10em",
    },
  },
  buttonGroup: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },
  Button: {
    [theme.fn.smallerThan("xs")]: {
      flexShrink: 1,
    },
  },
  hideButton: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },
  icon: {
    height: "40em",
    [theme.fn.smallerThan("md")]: {
      height: "20em",
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

  return (
    <div className={classes.outerContainer} id={props.id}>
      <div className={classes.inner}>
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
          <Text italic mt="md" className={classes.subTitle}>
            full-stack web development
          </Text>

          <List
            mt={25}
            spacing="sm"
            size="md"
            className={classes.listItemsText}
            icon={<CheckMarkIcon />}
          >
            <List.Item>
              <b>Industry experience in React.js</b>
            </List.Item>
            <List.Item>
              <b>Recent computer science b.s. grad</b>
            </List.Item>
            <List.Item>
              <b>Undergrad background in C++</b>
            </List.Item>
          </List>
          <Group
            mt={30}
            spacing="xl"
            position="left"
            className={classes.buttonGroup}
          >
            <Link to="Contact" spy={true} smooth={true} duration={500}>
              <Button
                radius="lg"
                size="md"
                variant="gradient"
                gradient={{ from: "#d6336c", to: "#ec8c69", deg: 35 }}
                className={classes.Button}
              >
                Let's Connect
              </Button>
            </Link>
            <Link to="Resume" spy={true} smooth={true} duration={500}>
              <Button
                radius="lg"
                size="md"
                variant="light"
                color="pink"
                className={classes.hideButton}
              >
                Resume
              </Button>
            </Link>
            <Link to="Projects" spy={true} smooth={true} duration={500}>
              <Button
                radius="lg"
                size="md"
                variant="light"
                color="pink"
                className={classes.hideButton}
              >
                Projects
              </Button>
            </Link>
          </Group>
        </div>
        <div className={classes.image}>
          <FolderIcon className={classes.icon} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
