import React from "react";
import { Grid, GridItem } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { FiGithub } from 'react-icons/fi'
import {FiLinkedin} from 'react-icons/fi'
import {FiMail} from 'react-icons/fi'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

const Contact = () => {
    return (
      <Container p='y-10'>
      <Center bg='orange.100'>
           <Grid templateColumns='repeat(4, 1fr)' gap={6}>
              <GridItem w='100%' p='4'>
              <Avatar size='xl' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
               </GridItem> 
               <GridItem w='100%' p='6'  mt='2' >
                   <Icon color='orange.500' as={FiGithub} w={16} h={16} />
               </GridItem>
               <GridItem w='100%' p='4' mt='2' >
               <Icon color='orange.500' as={FiLinkedin} w={16} h={16} />
               </GridItem>
               <GridItem w='100%' p='4' mt='2'>
                   <Icon color='orange.500' as={FiMail} w={16} h={16} />
               </GridItem>
           </Grid>
       </Center>
       <Center bg='red.100'>
       <Grid templateColumns='repeat(4, 1fr)' gap={6}>
              <GridItem w='100%' p='4'>
              <Avatar size='xl' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
               </GridItem> 
               <GridItem w='100%' p='6' mt='2'>
                   <Icon color='red.500' as={FiGithub} w={16} h={16} />
               </GridItem>
               <GridItem w='100%' p='4' mt='2'>
               <Icon color='red.500' as={FiLinkedin} w={16} h={16} />
               </GridItem>
               <GridItem w='100%' p='2' mt='2'>
               <Icon color='red.500' as={FiMail} w={16} h={16} />
               </GridItem>
           </Grid>
       </Center>
       <Center bg='blue.100'>
       <Grid templateColumns='repeat(4, 1fr)' gap={6}>
              <GridItem w='100%' p='4'>
              <Avatar size='xl' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
               </GridItem> 
               <GridItem w='100%' p='6' mt='2'>
               <Icon color='blue.500' as={FiGithub} w={16} h={16} />
               </GridItem>
               <GridItem w='100%' p='4' mt='2'>
               <Icon color='blue.500' as={FiLinkedin} w={16} h={16} />
               </GridItem>
               <GridItem w='100%' p='2' mt='2'>
               <Icon color='blue.500' as={FiMail} w={16} h={16} />
               </GridItem>
           </Grid>
       </Center>
       </Container>
    );
  };
  
  export default Contact;