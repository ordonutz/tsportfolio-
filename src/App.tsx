import React from "react";

import { useState } from "react";
import {
  AppShell,
  Header,
  Footer,
  MediaQuery,
  Burger,
  useMantineTheme,
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

  // return <HeaderResponsive links={temp} />;
  return (
    <AppShell
      styles={{
        main: {
          background: "white",
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      footer={
        // <Footer
        //   height={60}
        //   p="md"
        //   style={{ backgroundColor: "transparent" }}
        //   withBorder={false}
        // >
        //   Application footer
        // </Footer>
        <FooterResponsive links={temp} />
      }
      header={<HeaderResponsive links={temp} />}
      // header={<Header children={<div>hi</div>} height="10" />}
    >
      {/* <div style={{ paddingLeft: "5%", paddingRight: "5%", background: "red" }}> */}
      <HomePage />
      {/* </div> */}
      {/* <div style={{ background: "green", width: "auto" }}>
        <ResumePage />
      </div>
      <ProjectPage />
      <ContactPage /> */}
    </AppShell>
  );
}

export default App;
