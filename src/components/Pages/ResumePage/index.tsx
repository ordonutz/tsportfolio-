import {
  createStyles,
  SimpleGrid,
  Card,
  Text,
  Paper,
  ScrollArea,
  Group,
  useMantineTheme,
  List,
  ThemeIcon,
  Button,
} from "@mantine/core";
import { DonutIcon } from "../../../assets/DonutIcon";

import GitIcon from "../../../assets/GitIcon";
import LinkedIcon from "../../../assets/LinkedIcon";
import MailIcon from "../../../assets/MailIcon";
import PhoneIcon from "../../../assets/PhoneIcon";
import PrinterIcon from "../../../assets/PrinterIcon";
import { resumeSectionData } from "./interfaces";
import { resumeData } from "./resumeData";

/**
 * css classes
 */
const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  card: {
    background:
      "radial-gradient(circle, rgba(226,192,204,1) 0%, rgba(217,203,208,1) 100%)",
    transition: "transform 150ms ease, box-shadow 150ms ease",
    width: "90%",
    margin: "0 auto",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },
  nameTitle: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 500,
    fontSize: 40,
  },
  cardGrid: {},
  paperResume: {
    shadow: "xl",
    background:
      "radial-gradient(circle, rgba(226,192,204,1) 0%, rgba(217,203,208,1) 100%)",
    width: "70%",
  },
  resumeHeader: {
    width: "auto",
    padding: "3% 5%",
    borderRadius: "10px",
  },
  resumeTitle: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
    fontSize: 40,
    color: "#2B2118",
  },
  resumeSubTitle: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 500,
    fontSize: 20,
    color: "#2B2118",
  },
  resumeDate: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 500,
    fontSize: 20,
    color: "#2B2118",
  },
  resumeDescription: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 500,
    fontSize: 20,
    color: "#2B2118",
  },
  resumeButtonTop: {
    width: "auto",
    marginTop: "10%",
    marginBottom: "2%",
  },
  resumeButtonBottom: {
    marginTop: "2%",
    marginBottom: "10%",
  },
}));

/**
 * Resume section where user can view resume or print pdf
 * @returns container with scrollable digital resume and button to print/download resume
 */
export function ResumePage() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const resumeCopy: resumeSectionData[] = JSON.parse(
    JSON.stringify(resumeData)
  );
  /**
   * maps through the resume data and creates a card
   * populating all the information needed for each section of the
   * resume into a card (there are 4 sections in resume so 4 cards returned)
   */

  const cards = resumeCopy.map((section) => (
    <Card
      key={section.title}
      p="xl"
      radius="md"
      component="a"
      className={classes.card}
    >
      <Text className={classes.resumeTitle}>{section.title}</Text>

      <Group position="apart" spacing="xs">
        <Text className={classes.resumeSubTitle}>
          {section.subsection0?.name}
        </Text>
        <Text className={classes.resumeDate}>{section.subsection0?.date}</Text>
      </Group>

      <List
        spacing="sm"
        center
        icon={
          <ThemeIcon color="none" radius="lg" size={24}>
            <DonutIcon />
          </ThemeIcon>
        }
        className={classes.resumeDescription}
        withPadding
      >
        {Array.isArray(section.subsection0?.description) ? (
          section.subsection0?.description.map((info: string) => (
            <List.Item>{info}</List.Item>
          ))
        ) : section.subsection0?.description !== undefined ? (
          <List.Item>{section.subsection0?.description}</List.Item>
        ) : (
          ""
        )}
      </List>

      <Group position="apart" spacing="xs">
        <Text className={classes.resumeSubTitle}>
          {section.subsection1?.name}
        </Text>
        <Text className={classes.resumeDate}>{section.subsection1?.date}</Text>
      </Group>

      <List
        spacing="sm"
        center
        icon={
          <ThemeIcon color="none" radius="lg" size={24}>
            <DonutIcon />
          </ThemeIcon>
        }
        className={classes.resumeDescription}
        withPadding
      >
        {Array.isArray(section.subsection1?.description) ? (
          section.subsection1?.description.map((info: string) => (
            <List.Item>{info}</List.Item>
          ))
        ) : (
          <List.Item>{section.subsection1?.description}</List.Item>
        )}
      </List>

      <Group position="apart" spacing="xs">
        <Text className={classes.resumeSubTitle}>
          {section.subsection2?.name}
        </Text>
        <Text className={classes.resumeDate}>{section.subsection2?.date}</Text>
      </Group>

      <List
        spacing="sm"
        center
        icon={
          <ThemeIcon color="none" radius="lg" size={24}>
            <DonutIcon />
          </ThemeIcon>
        }
        className={classes.resumeDescription}
        withPadding
      >
        {Array.isArray(section.subsection2?.description) ? (
          section.subsection2?.description.map((info: string) => (
            <List.Item>{info}</List.Item>
          ))
        ) : (
          <List.Item>{section.subsection2?.description}</List.Item>
        )}
      </List>
    </Card>
  ));

  return (
    <div className={classes.container}>
      <Button
        radius="xl"
        size="md"
        className={classes.resumeButtonTop}
        variant="gradient"
        leftIcon={<PrinterIcon />}
      >
        PDF Version
      </Button>
      <Paper radius="md" shadow="xl" className={classes.paperResume}>
        <ScrollArea style={{ height: 900 }} type="auto" scrollbarSize={20}>
          <Group className={classes.resumeHeader} position="apart">
            <Text
              color="#53917E"
              style={{
                fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                fontWeight: 500,
                fontSize: 40,
              }}
            >
              Leslie Ordonez-Hernandez
            </Text>
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
      <Button
        radius="xl"
        size="md"
        variant="gradient"
        leftIcon={<PrinterIcon />}
        className={classes.resumeButtonBottom}
      >
        PDF Version
      </Button>
    </div>
  );
}

export default ResumePage;
