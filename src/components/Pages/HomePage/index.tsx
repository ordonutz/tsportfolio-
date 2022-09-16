import { SimpleGrid, } from '@mantine/core';
import React from 'react';
import BlobIcon from '../../../assets/BlobIcon';
import FolderIcon from '../../../assets/FolderIcon';

function HomePage() {
  return (<SimpleGrid cols={2} spacing="sm">
    <BlobIcon/>
    
    <FolderIcon/>
     
  </SimpleGrid>)
}

export default HomePage;