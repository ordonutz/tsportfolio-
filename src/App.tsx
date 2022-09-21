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
        <ProjectPage
          supTitle="awesome projects"
          description="you will hire me"
          data={[
            {
              image:
                "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
              title: "Project 1 This website",
              description: "this shows how smart i am and u should hire me",
            },
            {
              image:
                "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
              title: "Project 2 Credit one stuff",
              description: "this shows how smart i am and u should hire me",
            },
            {
              image:
                "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
              title:
                "Project 3 taking old c++ assignments and adding visualizers",
              description: "this shows how smart i am and u should hire me",
            },
            {
              image:
                "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
              title: "Project 4 tbd",
              description: "this shows how smart i am and u should hire me",
            },
          ]}
        />
        <ContactPage />
      </AppShell>
    </MantineProvider>
  );
}

export default App;
