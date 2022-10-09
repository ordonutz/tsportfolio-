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
} from "@mantine/core";
import FolderIcon from "../../../assets/FolderIcon";

/**
 * @param theme MantineTheme object that stores styling properties to be used everywhere in the app
 */
const useStyles = createStyles((theme) => ({
  outerContainer: {
    border: "3px solid red",
    height: "25%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginTop: "2rem",
    [theme.fn.smallerThan("xs")]: {
      marginTop: "1rem",
      height: "15%",
      border: "3px solid blue",
    },
    [theme.fn.largerThan("md")]: {
      marginTop: "1rem",
      height: "25%",
      border: "3px solid green",
    },
  },
  inner: {
    border: "3px solid yellow",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "stretch",
  },

  content: {
    border: "3px solid red",
    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 65,
    lineHeight: 1.2,
    fontWeight: 700,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  subTitle: {
    fontSize: 25,
    color: theme.colors.cyan[4],
    [theme.fn.smallerThan("md")]: {
      fontSize: 15,
    },
  },

  listItemsText: {
    fontSize: 24,
    color: theme.colors.gray[4],
    fontWeight: 340,
    [theme.fn.smallerThan("xs")]: {
      fontSize: 16,
    },
  },
  image: {
    border: "3px solid orange",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
  buttonGroup: {
    Button: {
      color: theme.colors.gray[9],
      [theme.fn.smallerThan("xs")]: {
        flex: 1,
      },
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

  return (
    <div className={classes.outerContainer} id={props.id}>
      <Container style={{ maxWidth: "2000px" }} className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            hi! I'm leslie
            <br />
            <Text
              component="span"
              variant="gradient"
              gradient={{ from: "yellow", to: "cyan", deg: 90 }}
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
              <b>Industry experience in front end web development</b>
            </List.Item>
            <List.Item>
              <b>Recent computer science b.s. grad</b>
            </List.Item>
            <List.Item>
              <b>Proficient educational background in C++</b>
            </List.Item>
          </List>
        </div>
        <div className={classes.image}>
          <FolderIcon />
        </div>
        {/* <Group mt={30} position="center" className={classes.buttonGroup}>
          <Button
            radius="xl"
            size="md"
            variant="gradient"
            gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
          >
            Resume
          </Button>
          <Button radius="xl" size="md" variant="default">
            Projects
          </Button>
          <Button radius="xl" size="md" variant="default">
            Contact
          </Button>
        </Group> */}
      </Container>
    </div>
  );
};

export default HomePage;
