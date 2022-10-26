import { resumeSectionData } from "./interfaces";

/**
 * stores all entire resume data to be mapped into card component and lists
 * ideally in the future it would be nice to parse the text from the document
 * so it outputs this object or have an automated way to grab the text from the 
 * updated google doc or file
 */
export const resumeData: Array<resumeSectionData> = [
  {
    section: "Education",
    subsection0: {
      location: "Bachelor of Science in Computer Science",
      title: " University of Nevada Las Vegas",
      date: "December 2021",
      description: ["GPA: 3.65/4.00", "Minor in mathematical sciences", "Engineering Scholarship Recipient" ],
    },
    subsection1: {
      location: "Associate of Science",
      title: " College of Southern Nevada",
      date: "December 2019",
      description: [
         "GPA 3.32", "Transfer program with an emphasis on computer science"
      ],
    },
    subsection2: {
      title: "Rensselaer Polytechnic Institute Troy, NY",
      date: "August 2016 - May 2017",
      description: [
        "Completed 21 credits towards a B.S. in Chemical Engineering",
      ],
    },
  },
  {
    section: "Experience",
    subsection0: {
      location: "Developer II",
      title: "Credit One Bank, Las Vegas, NV",
      date: "December 2021 - June 2022",
      description: [
        "Used React.js, TypeScript, Sass, Figma, Jira, and internal UI Framework without prior experience",
        "Collaborated with an agile team of 11 for front-end web development and contributed to 1 deployed project",
        "Created functional components using REST APIs and custom hooks in an internal tool used by 30+ employees",
        "Maintained code through GitLab, code reviews, and at minimum 80% Jest unit testing coverage",
      ],
    },
    subsection1: {
      location: "Computer Science Teaching Assistant",
      title: "University of Nevada Las Vegas",
      date: "August 2020 - August 2021",
      description: [
        "Supported instructor for introductory course CS135 and Intermediate summer course CS202 using C++",
        "Graded over 90% of course material and held weekly tutoring hours for undergraduate classes of 25+ students",
        "Reviewed and tested 8 - 10 C++ programming assignments for each course using Ubuntu",
      ],
    },
    
  },
  {
    section: "Projects",
    subsection0: {
      location: "Portfolio Website",
      date: "September 2022 - October 2022",
      description: [
        "Implemented with React.js, TypeScript, and Mantine Component Library",
        "Designed in Figma and developed with Mantine UI Library to create a responsive personal portfolio",
      ],
    },
    subsection1: {
      location: "Console program C++",
      date: "June 2020",
      description: [
        "Simulates a simplified version of the game of pickup sticks",
        "Modified depth-first search and performed topological sort to determine the outcome of the game",
      ],
    },
  },
  {
    section: "Leadership Experience",
    subsection0: {
      location: "Volunteer",
      title: "Las Vegas Rescue Mission, Las Vegas, NV",
      date: "February 2022 - April 2022",
      description: [
        "Volunteered with Credit One Bank colleagues to prepare and serve over 200 meals to communities in need"
      ],
    },
    subsection1: {
      location: "Ambassador for College Programs",
      title: "Credit One Bank, Las Vegas, NV",
      date: "February 2022",
      description: [
        "Traveled with HR recruiter to the University of AZ and University of UT to engage with 80+ students",
        "Promoted position openings and brand recognition through one-on-one conversations",
      ],
    },
        subsection2: {
      location: "Author",
      title: "Global Postal Automation, Intelligent Systems Conference (IntelliSys)",
          date: "September 2021",
      description: [
        "Co-authored and presented a published research paper at the virtual intelliSys 2021 Conference"
      ],
    },
    subsection3: {
      location: "Mentor",
      title: "NSA/NSF Sponsored GenCyber Camp, Las Vegas, NV",
      date: "July 2021 - August 2021",
      description: [
        "Mentored a group of 8 high school students to assist with 10+ hands-on cyber security labs using Kali Linux",
        "Coordinated with camp staff daily to identify areas of improvement to maintain camp quality and engagement",
      ],
    },
  },
  {
    section: "Hobbies & Interests",
    subsection0: {
      description: [
        "UX design, graphic design",
        "Custom t-shirt printing, arts & crafts",
        "The Office, baby Grogu, and The Strokes"
      ],
    },
  }
];