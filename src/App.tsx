import {
  AppShell,
  MantineThemeOverride,
  MantineProvider,
  createStyles,
  Button,
  ContainerProps,
} from "@mantine/core";
import HomePage from "./components/Pages/HomePage";
import ResumePage from "./components/Pages/ResumePage";
import ProjectPage from "./components/Pages/ProjectPage";
import ContactPage from "./components/Pages/ContactPage";
import HeaderResponsive from "./components/HeaderResponsive/index";
import FooterResponsive from "./components/FooterResponsive";
import { useScrollIntoView } from "@mantine/hooks";
import { MutableRefObject, Ref, useEffect, useRef } from "react";
import React from "react";
/**
 * used to overWrite default theme settings
 */
const MY_THEME: MantineThemeOverride = {
  colorScheme: "dark",
  primaryColor: "pink",
  primaryShade: { dark: 4 },
  loader: "bars",
  colors: {
    dark: [
      "#ffdeeb",
      "#A6A7AB",
      "#909296",
      "#5C5F66",
      "#373A40",
      "#2C2E33",
      "#25262B",
      "#373A40",
      "#141517",
      "#101113",
    ],
  },
};

/**
 * defines css classNames based on theme
 */
const useStyles = createStyles((MY_THEME) => {
  return {
    wrapperImg: {
      backgroundImage: "url(" + "/backgroundOverlayLg.png" + ")",
      backgroundAttachment: "scroll",
      backgroundSize: "cover",

      height: "auto",
      margin: "0 auto",
      backgroundRepeat: "no-repeat",
      [MY_THEME.fn.smallerThan("sm")]: {
        backgroundAttachment: "fixed",
        backgroundImage: "url(" + "/backgroundOverlayMd.png" + ")",
      },
      [MY_THEME.fn.smallerThan("xs")]: {
        backgroundAttachment: "fixed",
        backgroundImage: "url(" + "/backgroundOverlaySm.png" + ")",
      },
      [MY_THEME.fn.smallerThan("md")]: {
        backgroundAttachment: "fixed",
        backgroundImage: "url(" + "/backgroundOverlayMd.png" + ")",
      },
    },
  };
});

export default function App() {
  /**
   * styling classNames available
   */
  const { classes } = useStyles();

  /**
   * refs for the scroll to section
   */
  const projects = useRef<any>(null);
  const resume = useRef<any>(null);
  const contact = useRef<any>(null);

  const scrollToRef = (elementRef: MutableRefObject<any>) => {
    if (elementRef.current != null) {
      // window.scroll({
      //   // top: elementRef.current.offsetTop,
      //   top: 0,
      //   behaviour: "smooth",
      // });
      setTimeout(() =>
        elementRef.current.scrollIntoView({ behavior: "smooth" }, 100)
      );
      // elementRef.current.scrollIntoView({ behavior: "smooth" }, 2000);
    }
  };

  /**
   * Takes in a reference to an element and will scroll to the top of that element
   * @param elementRefLabel element reference
   */
  const scrollToSection = (elementRefLabel: string) => {
    switch (elementRefLabel) {
      case "Projects":
        console.log("string is ", elementRefLabel);
        console.log("ref is ", projects);

        scrollToRef(projects);
        break;
      case "Resume":
        console.log("string is ", elementRefLabel);
        console.log("ref is ", projects);
        scrollToRef(resume);
        break;
      case "Contact":
        scrollToRef(contact);
        break;
      default:
    }
  };

  /**
   * links in header and footer to redirect user to
   * projects, resume, or contact section on the one page site
   * will need to use scroll into view hook so this might change
   */
  const pageSectionLinks = [
    { label: "Projects" },
    { label: "Resume" },
    { label: "Contact" },
  ];

  return (
    <div className={classes.wrapperImg}>
      <MantineProvider theme={MY_THEME} withGlobalStyles withNormalizeCSS>
        <AppShell
          header={
            <HeaderResponsive
              links={pageSectionLinks}
              scrollToSection={scrollToSection}
            />
          }
          footer={
            <FooterResponsive
              links={pageSectionLinks}
              scrollToSection={scrollToSection}
            />
          }
        >
          <HomePage />
          <ResumePage ref={resume} id="Resume" />

          <ProjectPage ref={projects} id="Projects" />

          <ContactPage ref={contact} id="Contact" />
        </AppShell>
      </MantineProvider>
    </div>
  );
}
