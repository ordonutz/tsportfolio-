import React from "react";

import { useState } from "react";
import {
  AppShell,
  Header,
  Footer,
  MediaQuery,
  Burger,
  useMantineTheme,
  MantineThemeOverride,
  MantineProvider,
  Button,
} from "@mantine/core";
import MainLogo from "./assets/MainLogo";
import NavLinks from "./components/NavLinks";
import HomePage from "./components/Pages/HomePage";
import ResumePage from "./components/Pages/ResumePage";
import ProjectPage from "./components/Pages/ProjectPage";
import ContactPage from "./components/Pages/ContactPage";
import { HeaderResponsive } from "./components/HeaderResponsive/index";
import { FooterResponsive } from "./components/FooterResponsive";

function App() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const temp = [
    { link: "link", label: "Projects" },
    { link: "link", label: "Resume" },
    { link: "link", label: "Contact" },
  ];

  const myTheme: MantineThemeOverride = {
    colorScheme: "light",
    primaryColor: "pink",
    primaryShade: { light: 3, dark: 3 },
    loader: "dots",
  };
  console.log("theme =", theme);
  console.log("my theme =", myTheme);
  console.log("prim", theme.primaryColor);
  console.log("white", theme.white);
  console.log(theme.colors.pink[4]);

  return (
    <MantineProvider theme={myTheme} withGlobalStyles withNormalizeCSS>
      <AppShell
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        footer={<FooterResponsive links={temp} />}
        header={<HeaderResponsive links={temp} />}
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
