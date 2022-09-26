import { resumeSectionData } from "./interfaces";

/**
 * stores all entire resume data to be mapped into card component and lists
 * ideally in the future it would be nice to parse the text from the document
 * so it outputs this object
 */
export const resumeData: Array<resumeSectionData> = [
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