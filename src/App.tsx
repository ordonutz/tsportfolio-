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
import HeaderResponsive from "./components/HeaderResponsive/index";
import FooterResponsive from "./components/FooterResponsive";

export default function App() {
  /**
   * used to overWrite default theme settings
   */
  const MY_THEME: MantineThemeOverride = {
    colorScheme: "dark",
    primaryColor: "pink",
    primaryShade: { light: 3, dark: 3 },
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
        maxWidth: "1920px",
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

  console.log("my theme is", MY_THEME, MY_THEME.loader);

  return (
    <div className={classes.wrapperImg}>
      <MantineProvider theme={MY_THEME} withGlobalStyles withNormalizeCSS>
        <div>
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
            <ContactPage />
          </AppShell>
        </div>
      </MantineProvider>
    </div>
  );
}
