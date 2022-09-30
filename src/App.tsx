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
import { useRef } from "react";
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
  const projects = useRef<React.MutableRefObject<HTMLElement>>(null);
  const resume = useRef<React.MutableRefObject<HTMLElement>>(null);
  const contact = useRef<React.MutableRefObject<HTMLElement>>(null);

  /**
   * Takes in a reference to an element and will scroll to the top of that element
   * @param elementRef element reference
   */
  const scrollToSection = (elementRef: any) => {
    if (elementRef.current !== null) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  /**
   * links in header and footer to redirect user to
   * projects, resume, or contact section on the one page site
   * will need to use scroll into view hook so this might change
   */
  const pageSectionLinks = [
    { link: () => scrollToSection(projects), label: "Projects", ref: projects },
    { link: () => scrollToSection(resume), label: "Resume", ref: resume },
    { link: () => scrollToSection(contact), label: "Contact", ref: contact },
  ];

  return (
    <div className={classes.wrapperImg}>
      <MantineProvider theme={MY_THEME} withGlobalStyles withNormalizeCSS>
        <AppShell
          header={<HeaderResponsive links={pageSectionLinks} />}
          footer={<FooterResponsive links={pageSectionLinks} />}
        >
          <HomePage />
          <ResumePage scrollRef={resume} />

          <ProjectPage scrollRef={projects} />

          <ContactPage scrollRef={contact} />
        </AppShell>
      </MantineProvider>
    </div>
  );
}
