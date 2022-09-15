import React from 'react';
import {Button, SimpleGrid, UnstyledButton, Text} from '@mantine/core';

/*
TO DO: 
  - interface for props
  - outline what props should be
  - styles
  - add variant for different screen sizes ?
*/

function NavLinks() {
  return ( 
  <div style={{backgroundColor: "blue"} }>
  <SimpleGrid cols={4}>
     <UnstyledButton>
      <Text>Home</Text>
     </UnstyledButton>
     <UnstyledButton>
      <Text>Projects</Text>
     </UnstyledButton>
     <UnstyledButton>
      <Text>Resume</Text>
     </UnstyledButton>
     <UnstyledButton>
      <Text>Contact</Text>
     </UnstyledButton>
    </SimpleGrid>
    </div>
    )
}

export default NavLinks;