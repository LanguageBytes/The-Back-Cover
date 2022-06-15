import React from "react";
import { Center, Heading } from '@chakra-ui/react'
import { Container } from "@chakra-ui/react";
import {Text} from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'
import {Box} from '@chakra-ui/react'
// import axios from "axios"
// import { Link } from 'react-router-dom';

const Landing = () => {
    return (
      <Container>
      <Heading fontSize='30px ' p='4' fontWeight='normal' className="discovery-title">Welcome to our site ‘The Book Cover’!</Heading>
      <Center boxShadow='dark-lg' className="form-background" p='4' my='4'>
      <Box boxSize='sm'>
         <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
      </Box>
        <Text p='2' bg='red.100'>We hope you enjoy your time here; as you may have guessed from our name, this is a place for bookworms to express themselves and find their next book obsession. We function how you would use a back cover of a book, to quickly scan and decide which ones take your fancy, in a love at first sight kind of way .</Text>
      </Center>
    </Container>
    );
  };
  
  export default Landing;