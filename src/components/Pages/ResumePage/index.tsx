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
import DownloadIcon from "../../../assets/DownloadIcon";

import GitIcon from "../../../assets/GitIcon";
import LinkedIcon from "../../../assets/LinkedIcon";
import MailIcon from "../../../assets/MailIcon";
import PhoneIcon from "../../../assets/PhoneIcon";
import PreviewIcon from "../../../assets/PreviewIcon";
import PrinterIcon from "../../../assets/PrinterIcon";
import { resumeSectionData, resumeSubSection } from "./interfaces";
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
    marginTop: "10%",
  },
  card: {
    background: "#FAA69F",
    opacity: "0.6",
    boxShadow:
      "inset 4px -4px 4px rgba(0, 0, 0, 0.25), inset -4px 4px 4px rgba(255, 255, 255, 0.25)",
    borderRadius: "10px",
    transition: "transform 150ms ease, box-shadow 150ms ease",
    width: "90%",
    margin: "0 auto",
    marginBottom: "1%",

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
  paperResume: {
    shadow: "xl",
    background: "#E9E9E9",
    boxShadow:
      "inset -4px 4px 4px rgba(255, 255, 255, 0.25), inset 4px -4px 4px rgba(0, 0, 0, 0.25)",
    width: "60%",
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
  resumeButtons: {
    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
      cursor: "pointer",
    },
  },
}));

interface resumeProps {
  scrollRef?: React.MutableRefObject<any>;
}

/**
 * Resume section where user can view resume or print pdf
 * @returns container with scrollable digital resume and button to print/download resume
 */
export function ResumePage(props: resumeProps) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const resumeCopy: resumeSectionData[] = JSON.parse(
    JSON.stringify(resumeData)
  );

  /**
   *
   * @param subSection subsection in each section of the resume includes bullet points
   *                that expand on each individual example in each section i.e.
   *                section == Education
   *                subSection == School Name, major, dates, bullet list description
   * @returns Formatted Text and List elements inside of each section
   */
  const getSubSectionData = (subSection: resumeSubSection) => {
    return (
      <>
        <Group position="apart" spacing="xs">
          <Text className={classes.resumeSubTitle}>{subSection.name}</Text>
          <Text className={classes.resumeDate}>{subSection.date}</Text>
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
            {subSection.description.map((info: string) => (
              <List.Item>{info}</List.Item>
            ))}
          </List>
        </Group>
      </>
    );
  };

  /**
   * Takes in a section object and returns text and list elements for each
   * subSection in the section object
   * @param section each section in resume i.e. education, experience, etc.
   * @returns Text and List elements for each section in resume
   */
  const getSectionData = (section: resumeSectionData) => {
    return (
      <>
        <Text className={classes.resumeTitle}>{section.title}</Text>
        {getSubSectionData(section.subsection0)}
        {section.subsection1 !== undefined &&
          getSubSectionData(section.subsection1)}
        {section.subsection2 !== undefined &&
          getSubSectionData(section.subsection2)}
      </>
    );
  };

  /**
   * maps through the resume data array and creates a card
   * populating all the information needed for each section of the
   * resume into a card (there are 4 sections in the resume so 4 cards returned)
   */

  const cards = resumeCopy.map((section) => (
    <Card
      key={section.title}
      p="xl"
      radius="md"
      component="a"
      className={classes.card}
    >
      {getSectionData(section)}
    </Card>
  ));

  return (
    <div className={classes.container} ref={props.scrollRef}>
      <a
        href="Leslie_Ordonez_Hernandez_Resume.pdf"
        download="Leslie_Ordonez_Hernandez_Resume.pdf"
      >
        <Button
          radius="xl"
          size="md"
          className={classes.resumeButtonTop}
          variant="gradient"
          leftIcon={<PrinterIcon />}
        >
          Download PDF
        </Button>
      </a>
      <Button
        radius="xl"
        size="md"
        className={classes.resumeButtonTop}
        variant="gradient"
        leftIcon={<PreviewIcon />}
        onClick={() =>
          window.open(
            "Leslie_Ordonez_Hernandez_Resume.pdf",
            "_blank",
            "noopener,noreferrer"
          )
        }
      >
        View PDF
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
              <MailIcon
                onClick={() => {
                  window.open("", "_blank");
                }}
                className={classes.resumeButtons}
              />
              <LinkedIcon
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/leslie-ordonez/",
                    "_blank"
                  );
                }}
                className={classes.resumeButtons}
              />
              <GitIcon
                onClick={() => {
                  window.open("https://github.com/ordonutz", "_blank");
                }}
                className={classes.resumeButtons}
              />
            </Group>
          </Group>
          <SimpleGrid cols={1} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
            {cards}
          </SimpleGrid>
        </ScrollArea>
      </Paper>
    </div>
  );
}

export default ResumePage;
