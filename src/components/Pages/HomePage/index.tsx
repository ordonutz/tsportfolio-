import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from "@mantine/core";
import FolderIcon from "../../../assets/FolderIcon";

const useStyles = createStyles((theme) => ({
  outerContainer: {
    height: "20%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 3,
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
      display: "none",
    },
  },

  listItemsText: {
    fontSize: 20,
    color: theme.colors.gray[2],
    fontWeight: 300,
  },
  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: "auto",

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
}));

export default function HomePage() {
  const { classes } = useStyles();
  console.log(classes);

  return (
    <div className={classes.outerContainer} style={{ background: "green" }}>
      <Container style={{ maxWidth: "1320px", background: "gray" }}>
        <div className={classes.inner} style={{ background: "black" }}>
          <div className={classes.content}>
            <Title className={classes.title}>
              hi! I'm leslie
              <br />{" "}
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
            >
              <List.Item>
                <b>
                  Industry experience in front end web development for internal
                  tools
                </b>
              </List.Item>
              <List.Item>
                <b>Recent computer science b.s. grad</b>
              </List.Item>
              <List.Item>
                <b>Proficient educational background in C++</b>
              </List.Item>
            </List>

            <Group mt={30} position="center">
              <Button radius="xl" size="md" className={classes.control}>
                Resume
              </Button>
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                Projects
              </Button>
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                Contact
              </Button>
            </Group>
          </div>
          <div className={classes.image} style={{ background: "white" }}>
            {" "}
            <FolderIcon />
          </div>
        </div>
      </Container>
    </div>
  );
}
