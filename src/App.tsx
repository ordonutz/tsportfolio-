import React from "react";
import {
  AppShell,
  useMantineTheme,
  MantineThemeOverride,
  MantineProvider,
  createStyles,
} from "@mantine/core";
import HomePage from "./components/Pages/HomePage";
import ResumePage from "./components/Pages/ResumePage";
import ProjectPage from "./components/Pages/ProjectPage";
import ContactPage from "./components/Pages/ContactPage";
import { HeaderResponsive } from "./components/HeaderResponsive/index";
import { FooterResponsive } from "./components/FooterResponsive";
import "./assets/backgroundImage.png";

const useStyles = createStyles((theme) => {
  return {
    wrapper: {
      backgroundImage: "url(" + "/backgroundOverlayLg.png" + ")",
      backgroundColor: "#343a40",
      backgroundAttachment: "scroll",
      backgroundSize: "cover",
      backgroundPosition: "center top",
      height: "100%",
      backgroundRepeat: "no-repeat",
      [theme.fn.smallerThan("sm")]: {
        backgroundAttachment: "fixed",
        backgroundImage: "url(" + "/backgroundOverlayMd.png" + ")",
      },
      [theme.fn.smallerThan("xs")]: {
        backgroundAttachment: "fixed",
        backgroundImage: "url(" + "/backgroundOverlayMd.png" + ")",
      },
      [theme.fn.smallerThan("md")]: {
        backgroundAttachment: "fixed",
        backgroundImage: "url(" + "/backgroundOverlayMd.png" + ")",
      },
    },
  };
});

export default function App() {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  /**
   * links in header and footer to redirect user to
   * projects, resume, or contact section on the one page site
   * will need to use scroll into view hook so this might change
   */
  const pageSectionLinks = [
    { link: "link", label: "Projects" },
    { link: "link", label: "Resume" },
    { link: "link", label: "Contact" },
  ];

  /**
   * custom object theme to override Mantine default theme
   */
  const MY_THEME: MantineThemeOverride = {
    colorScheme: "light",
    primaryColor: "pink",
    primaryShade: { light: 3, dark: 3 },
    loader: "oval",
  };

  return (
    <div className={classes.wrapper}>
      <MantineProvider theme={MY_THEME} withGlobalStyles withNormalizeCSS>
        <AppShell
          style={{
            backgroundColor: "transparent",
          }}
          header={<HeaderResponsive links={pageSectionLinks} />}
          footer={<FooterResponsive links={pageSectionLinks} />}
          styles={(theme) => ({
            main: {
              backgroundColor: "transparent",
            },
          })}
        >
          <HomePage />
          <ResumePage />
          <ProjectPage />
          {/* <ContactPage /> */}
        </AppShell>
      </MantineProvider>
    </div>
  );
}
