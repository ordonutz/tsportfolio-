import React from "react";

import { useState } from "react";
import {
  AppShell,
  useMantineTheme,
  MantineThemeOverride,
  MantineProvider,
  BackgroundImage,
  Image,
} from "@mantine/core";
import HomePage from "./components/Pages/HomePage";
import ResumePage from "./components/Pages/ResumePage";
import ProjectPage from "./components/Pages/ProjectPage";
import ContactPage from "./components/Pages/ContactPage";
import { HeaderResponsive } from "./components/HeaderResponsive/index";
import { FooterResponsive } from "./components/FooterResponsive";
import "./assets/backgroundImage.png";
import CustomBackgroundImage from "./assets/CustomBackgroundImage";

function App() {
  const theme = useMantineTheme();

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
    loader: "dots",
  };

  return (
    <MantineProvider theme={MY_THEME} withGlobalStyles withNormalizeCSS>
      <AppShell
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        footer={<FooterResponsive links={pageSectionLinks} />}
        header={<HeaderResponsive links={pageSectionLinks} />}
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[8],
          },
        })}
      >
        <HomePage />
        <ResumePage />
        <ProjectPage />
        <ContactPage />
      </AppShell>
    </MantineProvider>
  );
}

export default App;
