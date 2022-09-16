import React from "react";

import { useState } from "react";
import {
  AppShell,
  Header,
  Footer,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Group,
  Navbar,
  Center,
} from "@mantine/core";
import MainLogo from "./assets/MainLogo";
import NavLinks from "./components/NavLinks";
import HomePage from "./components/Pages/HomePage";
import ResumePage from "./components/Pages/ResumePage";
import ProjectPage from "./components/Pages/ProjectPage";
import ContactPage from "./components/Pages/ContactPage";
import PrinterIcon from "./assets/PrinterIcon";

function App() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  console.log("theme = ", theme);

  return (
    <AppShell
      styles={{
        main: {
          background:
            "linear-gradient(180deg, #989898 0%, #CBC8C8 14.58%, #E3DFDF 25.52%, #F0EBEB 31.77%, #D5D1D1 44.79%, #DAD7D7 58.85%, #E2DEDE 74.48%, #B3B3B3 94.27%)"
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      footer={
        <Footer height={60} p="md" style={{backgroundColor: "transparent"}} withBorder={false}>
          Application footer
        </Footer>
      }
      header={
        
        <Header height={90} p="md" withBorder= {false} style={{backgroundColor: "transparent"}}>
         <div style={{  display: 'flex', flexDirection: 'row', justifyContent: 'space-between' ,alignItems: 'center', height: '100%', paddingLeft: '5%', paddingRight:'5%'}}>
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
           <MainLogo />
           <NavLinks/>
          
            
         </div> 
        </Header>
      }
    >
      <div style={{paddingLeft: '5%', paddingRight: '5%', background: "red"}}>

      <HomePage/>
      
      </div>
      <div style={{background: "green", width: "auto"}}>
      <ResumePage/>
  
      </div>
      <ProjectPage/>
      <ContactPage/>
    </AppShell>
  );
}

export default App;
