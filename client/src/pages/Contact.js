import React from "react";
import { Grid, GridItem, Heading } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { FiGithub } from 'react-icons/fi'
import {FiLinkedin} from 'react-icons/fi'
import {FiMail} from 'react-icons/fi'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import sarah from "./assets/Sarah.jpg"
import lisa from "./assets/Lisa.jpeg"
import samira from "./assets/Samira.jpg"
import { Show, Hide } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import './Contact.css' 
const Contact = () => {
    return (
      <Container mt='4' p={{ base: '0', md: '4', lg: '8' }} boxShadow='dark-lg' className="contact-container">
        <Heading fontSize='30px ' p='4' fontWeight='normal' className="contact-title" >Contact Us</Heading>
    <Hide above='lg'>
      <Center bg='orange.100' >
           <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            <Hide below='md'>
              <GridItem w='100%' p='4'>
              <Avatar size='xl' name='Sarah' src={sarah} />
               </GridItem> 
               </Hide>
               <Hide above='md'>
               <GridItem  w='100%' p='6' mt='2'>
                <Text  color='orange.500' fontSize='22px'>Sarah</Text>
               </GridItem> 
               </Hide>
               <GridItem w='100%' p='6'  mt='2' >
                <a href="https://github.com/LanguageBytes">
                <Icon color='orange.500' as={FiGithub} w={{ base: '8', md: '12', lg: '16' }} h={{ base: '8', md: '12', lg: '16' }} />
                </a>
               </GridItem>
               <GridItem w='100%' p='6' mt='2' >
                <a href="https://www.linkedin.com/in/sarah-lloyd-19673b135/">
                <Icon color='orange.500' as={FiLinkedin} w={{ base: '8', md: '12', lg: '16' }} h={{ base: '8', md: '12', lg: '16' }} />
                </a>
               </GridItem>
               <GridItem w='100%' p='6' mt='2'>
                <a href="mailto:sarahlloyd407a@gmail.com">
                <Icon color='orange.500' as={FiMail} w={{ base: '8', md: '12', lg: '16' }} h={{ base: '8', md: '12', lg: '16' }} />
                </a>
               </GridItem>
           </Grid>
        </Center>
        </Hide>
        <Hide below='lg'>
        <Center bg='orange.100' p='4'>
           <Grid templateColumns='repeat(5, 1fr)' gap={0}>
                <GridItem  p='6' mt='2'>
                <Text  color='orange.500' fontSize='24px'>Sarah</Text>
               </GridItem> 
              <GridItem p='4'>
              <Avatar size='xl' name='Sarah' src={sarah} />
               </GridItem> 
               <GridItem  p='6'  mt='2' >
                <a href="https://github.com/LanguageBytes">
                <Icon color='orange.500' as={FiGithub} w='16'  h= '16' />
                </a>
               </GridItem>
               <GridItem p='6' mt='2' >
                <a href="https://www.linkedin.com/in/sarah-lloyd-19673b135/">
                <Icon color='orange.500' as={FiLinkedin} w='16' h='16'/>
                </a>
               </GridItem>
               <GridItem  p='6' mt='2'>
                <a href="mailto:sarahlloyd407a@gmail.com">
                <Icon color='orange.500' as={FiMail} w= '16' h='16'/>
                </a>
               </GridItem>
           </Grid>
       </Center>
       </Hide>
       <Center bg='red.100'>
        <Hide above='lg'>
       <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            <Hide below='md'>
              <GridItem p='4'>
              <Avatar size='xl' name='Lisa' src={lisa} />
               </GridItem> 
            </Hide>
            <Hide above='md'>
               <GridItem p='6' mt='2' mx={{base:'2'}}>
                <Text color='red.500' fontSize='22px'>Lisa</Text>
               </GridItem> 
            </Hide>
               <GridItem  p='6' mt='2'  >
                <a href="https://github.com/LisaCR01">
                <Icon color='red.500'  as={FiGithub} w={{ base: '8', md: '12', lg: '16' }} h={{ base: '8', md: '12', lg: '16' }} />
                </a>
               </GridItem>
               <GridItem w='100%' p='6' mt='2' >
                <a href="https://www.linkedin.com/in/LisaCR01">
                <Icon color='red.500' as={FiLinkedin} w={{ base: '8', md: '12', lg: '16' }} h={{ base: '8', md: '12', lg: '16' }} />
                </a>
               </GridItem>
               <GridItem w='100%' p='6' mt='2'>
                <a href="mailto:lcrgunn@gmail.com">
                <Icon color='red.500' as={FiMail} w={{ base: '8', md: '12', lg: '16' }} h={{ base: '8', md: '12', lg: '16' }} />
                </a>
               </GridItem>
           </Grid>
           </Hide>
           <Hide below='lg'>
            <Grid templateColumns='repeat(5, 1fr)' gap={0}>
                <GridItem w='100%' p='6' mt='2'>
                <Text px='3' color='red.500' fontSize='24px'>Lisa</Text>
               </GridItem> 
              <GridItem w='100%' p='4'>
              <Avatar size='xl' name='Lisa' src={lisa} />
               </GridItem> 
               <GridItem w='100%' p='6' mt='2'  >
                <a href="https://github.com/LisaCR01">
                <Icon color='red.500'  as={FiGithub} w={{ base: '8', md: '12', lg: '16' }} h={{ base: '8', md: '12', lg: '16' }} />
                </a>
               </GridItem>
               <GridItem w='100%' p='6' mt='2' >
                <a href="https://www.linkedin.com/in/LisaCR01">
                <Icon color='red.500' as={FiLinkedin} w={{ base: '8', md: '12', lg: '16' }} h={{ base: '8', md: '12', lg: '16' }} />
                </a>
               </GridItem>
               <GridItem w='100%' p='6' mt='2'>
                <a href="mailto:lcrgunn@gmail.com">
                <Icon color='red.500' as={FiMail} w={{ base: '8', md: '12', lg: '16' }} h={{ base: '8', md: '12', lg: '16' }} />
                </a>
               </GridItem>
           </Grid>
           </Hide>
       </Center>
       <Center bg='blue.100'>
       <Hide above='lg'>
       <Grid templateColumns='repeat(4, 1fr)' gap={6}>
             <Hide  below='md'>
              <GridItem w='100%' p='4'>
              <Avatar size='xl' name='Samira' src={samira} />
               </GridItem> 
               </Hide>
               <Hide above='md'>
               <GridItem  w='100%' p='6' mt='2'>
                <Text color='blue.500' fontSize='22px'>Samira</Text>
               </GridItem> 
               </Hide>
               <GridItem w='100%' p='6' mt='2'>
                <a href="https://github.com/samira0101">
                <Icon color='blue.500' as={FiGithub} w={{ base: '8', md: '12', lg: '16' }} h={{ base: '8', md: '12', lg: '16' }} />
                </a>
               </GridItem>
               <GridItem w='100%' p='6' mt='2'>
                <a href="www.linkedin.com/in/samira-hirsi-4609131a8">
                <Icon color='blue.500' as={FiLinkedin} w={{ base: '8', md: '12', lg: '16' }} h={{ base: '8', md: '12', lg: '16' }} />
                </a>
               </GridItem>
               <GridItem w='100%' p='6' mt='2'>
                <a  href="mailto:samira-h@hotmail.co.uk">
                <Icon color='blue.500' as={FiMail} w={{ base: '8', md: '12', lg: '16' }} h={{ base: '8', md: '12', lg: '16' }} />
                </a>
               </GridItem>
           </Grid>
        </Hide>
        <Hide  below='lg'>
        <Grid templateColumns='repeat(5, 1fr)' gap={0}>
             <GridItem  w='100%' p='6' mt='2'>
                <Text color='blue.500' fontSize='24px'>Samira</Text>
               </GridItem>
              <GridItem w='100%' p='4'>
              <Avatar size='xl' name='Samira' src={samira} />
               </GridItem>  
               <GridItem w='100%' p='6' mt='2'>
                <a href="https://github.com/samira0101">
                <Icon color='blue.500' as={FiGithub} w={{ base: '8', md: '12', lg: '16' }} h={{ base: '8', md: '12', lg: '16' }} />
                </a>
               </GridItem>
               <GridItem w='100%' p='6' mt='2'>
                <a href="www.linkedin.com/in/samira-hirsi-4609131a8">
                <Icon color='blue.500' as={FiLinkedin} w={{ base: '8', md: '12', lg: '16' }} h={{ base: '8', md: '12', lg: '16' }} />
                </a>
               </GridItem>
               <GridItem w='100%' p='6' mt='2'>
                <a  href="mailto:samira-h@hotmail.co.uk">
                <Icon color='blue.500' as={FiMail} w={{ base: '8', md: '12', lg: '16' }} h={{ base: '8', md: '12', lg: '16' }} />
                </a>
               </GridItem>
           </Grid>
        </Hide>
       </Center>
       </Container>
    );
  };
  
  export default Contact;