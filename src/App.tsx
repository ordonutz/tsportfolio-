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

function App() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  console.log("theme = ", theme);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={
        <Header height={70} p="md" >
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
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
}

export default App;
