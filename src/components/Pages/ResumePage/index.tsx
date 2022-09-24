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
import { PDFViewer } from "@react-pdf/renderer";
import { DonutIcon } from "../../../assets/DonutIcon";

import GitIcon from "../../../assets/GitIcon";
import LinkedIcon from "../../../assets/LinkedIcon";
import MailIcon from "../../../assets/MailIcon";
import PhoneIcon from "../../../assets/PhoneIcon";
import PrinterIcon from "../../../assets/PrinterIcon";
import ResumePdf from "./ResumePdf";

/**
 * object used to store details about
 * each subsection in the @resumeSectionData object
 */
interface resumeSubSection {
  name: string;
  date: string;
  description: Array<string>;
}

/**
 * object used to store info for each section
 * of the resume i.e. each section (education, experience, etc.) have these attributes
 */
interface resumeSectionData {
  title: string;
  subsection0: resumeSubSection;
  subsection1?: resumeSubSection;
  subsection2?: resumeSubSection;
}

/**
 * stores all entire resume data to be mapped into card component and lists
 * ideally in the future it would be nice to parse the text from the document
 * so it outputs this object
 */
const resumeData: Array<resumeSectionData> = [
  {
    title: "Education",
    subsection0: {
      name: "University of Nevada Las Vegas, Bachelor of Science in Computer Science",
      date: "December 2021",
      description: ["GPA: 3.65, Minor in mathematical sciences"],
    },
    subsection1: {
      name: "College of Southern Nevada, Associate of Science",
      date: "December 2019",
      description: [
        "GPA: 3.32, University transfer program with an emphasis on computer science fundamentals",
      ],
    },
    subsection2: {
      name: "Rensselaer Polytechnic Institute Troy, NY",
      date: "August 2016 - May 2017",
      description: [
        "Completed 21 credits towards a B.S. in Chemical Engineering",
      ],
    },
  },
  {
    title: "Experience",
    subsection0: {
      name: "Developer II, Credit One Bank, Las Vegas, NV",
      date: "December 2021 - June 2022",
      description: [
        "Learned React.js, JavaScript, TypeScript, Sass, and internal UI Framework without prior experience in 4 months",
        "Collaborated with an agile team of 9 for front-end web development",
        "Implemented functional components, custom hooks, and REST API calls for a page within an internal tool",
        "Maintained code through GitLab, code reviews, and at minimum 80% coverage of Jest unit testing ",
      ],
    },
    subsection1: {
      name: "Computer Science I and II Teaching Assistant, C++, UNLV",
      date: "August 2020 - August 2021",
      description: [
        "Graded over 90% of course material for undergraduate classes of  25+ students",
        "Reviewed and tested 8 - 10 C++ programming assignments for each course in a Linux environment",
      ],
    },
    subsection2: {
      name: "Teaching Assistant, NSA/NSF Sponsored GenCyber Camp, UNLV",
      date: "July 2021 - August 2021",
      description: [
        "Mentored a group of 8 high school students to assist with 10+ hands-on cyber security labs using Kali Linux",
        "Coordinated with camp staff daily to structure labs, activities, and smooth running of the summer camp",
      ],
    },
  },
  {
    title: "Projects",
    subsection0: {
      name: "Portfolio Website, React.js, TypeScript, Mantine Component Library",
      date: "September 2022",
      description: [
        "Designed and developed a responsive portfolio website with Mantine UI",
      ],
    },
    subsection1: {
      name: "Simulating Game of Pickup Sticks, C++",
      date: "December 2019",
      description: [
        "Modified Depth First Search and implemented topological sort to determine if a solution existed through cycle detection and efficient searching",
      ],
    },
  },
  {
    title: "Leadership Experience",
    subsection0: {
      name: "Credit One Bank College Programs and Recruitment",
      date: "February 2022 - April 2020",
      description: [
        "Traveled with HR to the University of AZ and University of UT to assist with recruitment at the career fair booths",
        "Volunteered and collaborated with colleagues at the Las Vegas Rescue Mission to serve over 200 meals",
      ],
    },
    subsection1: {
      name: "IntelliSys 2021 Paper published by Springer, Global Postal Automation",
      date: "August 2021",
      description: [
        "Co-authored and presented an undergrad research paper at the virtual IntelliSys conference",
      ],
    },
    subsection2: {
      name: "Lead Designer, Customisitc",
      date: " February 2018 - February 2020",
      description: [
        "Managed and trained a team of 5 employees and facilitated over 40% of all client transactions",
        "Became proficient with Flexi design software and other custom print technologies on an as-needed basis",
      ],
    },
  },
];

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

  /**
   * maps through the resume data and creates a card
   * populating all the information needed for each section of the
   * resume into a card (there are 4 sections in resume so 4 cards returned)
   */
  const cards = resumeData.map((section) => (
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
      <PDFViewer>
        <ResumePdf />
      </PDFViewer>
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
