import React from 'react';
import { UnstyledButton, Text, Group} from '@mantine/core';

/*
TO DO: 
  - interface for props
  - outline what props should be
  - styles
  - add variant for different screen sizes ?
*/

function NavLinks() {
  return ( 
  <div  >
    <Group spacing="xl">
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
     </UnstyledButton></Group>
    </div>
    )
}

export default NavLinks;