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
  ActionIcon,
  Tooltip,
} from "@mantine/core";
import { NONAME } from "dns";
import React, { forwardRef, LegacyRef, RefObject } from "react";
import { Link } from "react-scroll";
import DownloadIcon from "../../../assets/DownloadIcon";

import GitIcon from "../../../assets/GitIcon";
import LinkedIcon from "../../../assets/LinkedIcon";
import MailIcon from "../../../assets/MailIcon";
import PhoneIcon from "../../../assets/PhoneIcon";
import PreviewIcon from "../../../assets/PreviewIcon";
import PrinterIcon from "../../../assets/PrinterIcon";
import { StarIcon } from "../../../assets/StarIcon";
import { resumeSectionData, resumeSubSection } from "./interfaces";
import { resumeData } from "./resumeData";

/**
 * css classes
 */
const useStyles = createStyles((theme) => ({
  container: {
    border: "3px solid red",
    height: "auto",
    width: "max(calc(1.23rem + 60%), 80%)",
    marginInline: "auto",
    [theme.fn.smallerThan("xs")]: {
      width: "100%",
    },
  },
  paperResume: {
    // position: "relative",
    borderRadius: "12px",
    marginTop: "1em",
    paddingBottom: "2em",
    border: "2 px solid blue",
    marginInline: "auto",
    shadow: "xl",
    background: "#F1F3F5",
    boxShadow:
      "inset -4px 4px 4px rgba(255, 255, 255, 0.25), inset 4px -4px 4px rgba(0, 0, 0, 0.25)",
    width: "70%",
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },
  header: {
    top: "0",
    background: "black",
    boxShadow: theme.shadows.md,
    width: "70%",
    marginInline: "auto",
    border: "3px yellow solid",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    background: "#ffdeeb",
    boxShadow: theme.shadows.md,
    width: "90%",
    marginInline: "auto",
    marginTop: "2em",

    "&:hover": {
      boxShadow:
        "inset 4px -4px 4px rgba(0, 0, 0, 0.25), inset -4px 4px 4px rgba(255, 255, 255, 0.25)",
      borderRadius: "10px",
      transition: "transform 150ms ease, box-shadow 150ms ease",
      transform: "scale(1.01)",
    },
  },
  nameTitle: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 500,
    fontSize: "2rem",
  },

  resumeHeader: {
    width: "auto",
    padding: "2% 5%",
    borderRadius: "10px",
    background: "#ffdeeb",
    boxShadow: theme.shadows.md,
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },
  resumeTitle: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
    fontSize: "clamp(20px, 2vw, 2rem)",
    color: "#9B6A6C",
  },
  resumeLocation: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    color: "#3B3923",
  },
  resumeSubTitle: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 650,
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    color: "#3B3923",
  },
  resumeDate: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 500,
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    color: "#3B3923",
  },
  resumeDescription: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 500,
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    color: "#3B3923",
    marginBottom: "0.75em",
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
  headerText: {
    border: "3px blue solid",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 500,
    fontSize: "1rem",
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },
  actionButtons: {
    borderRadius: "5px",
    background: "rgb(33,37,41,0.7)",
    zIndex: 999,
    position: "sticky",
    top: "0",
    marginInline: "auto",
    border: "3px yellow solid",
    width: "70%",

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
      justifyContent: "center",
    },
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  resumeButton: {
    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
      cursor: "pointer",
    },
  },
  icon: {
    border: "2px blue solid",
    width: "30px",
    [theme.fn.smallerThan("sm")]: {
      width: "20px",
    },
  },
  resumeIcon: {
    height: "2.5em",
    [theme.fn.smallerThan("sm")]: {
      height: "30px",
    },
    "&:hover": {
      transform: "scale(1.01)",
      opacity: "0.9",
      cursor: "pointer",
    },
  },
  cardSection: {
    border: "3px red solid",
  },
  resumeSection: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      flexWrap: "nowrap",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
  },
}));

interface resumeProps {
  id: string;
}

/**
 * Resume section where user can view resume or print pdf
 * @returns container with scrollable digital resume and button to print/download resume
 */
const ResumePage = (props: resumeProps) => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  console.log(theme);
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
        <div id={props.id}>
          <div
            className={classes.resumeSection}
            style={{ border: "2px green solid" }}
          >
            <Text align="left" className={classes.resumeLocation}>
              {subSection.location}
            </Text>
            <Text className={classes.resumeDate}>{subSection.date}</Text>
          </div>
          <Text align="left" className={classes.resumeSubTitle}>
            {subSection.title}
          </Text>
          <List
            spacing="sm"
            center
            icon={<StarIcon className={classes.icon} />}
            className={classes.resumeDescription}
            withPadding
          >
            {subSection.description.map((info: string, index) => (
              <List.Item key={`${subSection.location}${index}`}>
                {info}
              </List.Item>
            ))}
          </List>
        </div>
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
      <div className={classes.cardSection}>
        <Text className={classes.resumeTitle}>{section.section}</Text>
        {getSubSectionData(section.subsection0)}
        {section.subsection1 !== undefined &&
          getSubSectionData(section.subsection1)}
        {section.subsection2 !== undefined &&
          getSubSectionData(section.subsection2)}
      </div>
    );
  };

  /**
   * maps through the resume data array and creates a card
   * populating all the information needed for each section of the
   * resume into a card (there are 4 sections in the resume so 4 cards returned)
   */

  const cards = resumeCopy.map((section) => (
    <Card key={section.section} p="xl" radius="md" className={classes.card}>
      {getSectionData(section)}
    </Card>
  ));

  return (
    <div className={classes.container} id="Resume">
      <Group className={classes.actionButtons}>
        <Button
          component="a"
          href="Leslie_Ordonez_Hernandez_Resume.pdf"
          download="Leslie_Ordonez_Hernandez_Resume.pdf"
          radius="lg"
          size="xs"
          variant="filled"
          color="blue"
          leftIcon={<DownloadIcon />}
        >
          Download PDF
        </Button>
        <Button
          leftIcon={<PreviewIcon />}
          radius="lg"
          size="xs"
          variant="filled"
          color="blue"
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
      </Group>
      <Paper shadow="xl" className={classes.paperResume}>
        <div className={classes.resumeHeader}>
          <Text
            color="#9B6A6C"
            style={{
              fontFamily: `Greycliff CF, ${theme.fontFamily}`,
              fontWeight: 500,
              fontSize: "clamp(1.3rem, 2vw, 2.5rem)",
            }}
          >
            Leslie Ordonez-Hernandez
          </Text>
          <Group>
            <Link to="Contact" smooth={true} duration={500}>
              <MailIcon className={classes.resumeIcon} />
            </Link>

            <LinkedIcon
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/leslie-ordonez/",
                  "_blank"
                );
              }}
              className={classes.resumeIcon}
            />
            <GitIcon
              onClick={() => {
                window.open("https://github.com/ordonutz", "_blank");
              }}
              className={classes.resumeIcon}
            />
          </Group>
        </div>
        <SimpleGrid cols={1} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          {cards}
        </SimpleGrid>
      </Paper>
    </div>
  );
};

export default ResumePage;
