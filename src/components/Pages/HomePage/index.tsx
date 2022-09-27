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
    height: "20%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginTop: "5%",
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    // paddingTop: theme.spacing.xl * 3,
    // paddingBottom: theme.spacing.xl * 3,
  },

  content: {
    background: theme.colors.gray[8],
    marginRight: theme.spacing.xl * 3,
    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.gray[2],
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
    color: theme.colors.cyan[2],
    [theme.fn.smallerThan("md")]: {
      fontSize: 15,
    },
  },

  listItemsText: {
    fontSize: 20,
    color: theme.colors.gray[2],
    fontWeight: 350,
    [theme.fn.smallerThan("xs")]: {
      fontSize: 16,
    },
  },
  control: {
    color: theme.colors.gray[9],

    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
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

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
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

/**
 * TODO: add onClick functionality to buttons, clean up styling, update jsdoc
 *       add background image to make it look less basic, add animations
 * About me section that acts like a landing page
 * @returns container with text and an svg image
 */
export default function HomePage() {
  const { classes } = useStyles();

  return (
    <div className={classes.outerContainer}>
      <Container style={{ maxWidth: "1320px" }}>
        <div className={classes.inner}>
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
            {" "}
            <FolderIcon />
          </div>
        </div>
        <Group mt={30} position="center" className={classes.buttonGroup}>
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
        </Group>
      </Container>
    </div>
  );
}
