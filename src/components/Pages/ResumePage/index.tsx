import { Card, Group, ScrollArea, SimpleGrid, Text } from '@mantine/core';
import React from 'react';
import GitIcon from '../../../assets/GitIcon';
import LinkedIcon from '../../../assets/LinkedIcon';
import MailIcon from '../../../assets/MailIcon';
import PhoneIcon from '../../../assets/PhoneIcon';

function ResumePage() {
  return (
  
  <div style={{margin: "auto", width: "70%", background:"blue"}}>
    <ScrollArea style={{height: 500, background: "orange"}}>
     <SimpleGrid style={{background: "white"}}>
      <Group style={{background: "yellow"}}  position='apart' spacing="sm">
        <Text>Leslie Ordonez</Text>
        <Group>
        <PhoneIcon/>
        <MailIcon/>
        <LinkedIcon/>
        <GitIcon/>
      </Group>
      </Group>
      
      
  </SimpleGrid>
  </ScrollArea>
  </div>
 

 
    
    
  )
}

export default ResumePage;