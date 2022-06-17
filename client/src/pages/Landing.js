import React from "react";
import { Center, Heading } from '@chakra-ui/react'
import { Container } from "@chakra-ui/react";
import {Text} from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'
import {Box} from '@chakra-ui/react'
import reading from "./assets/reading.jpg"
import './landing.css';
// import axios from "axios"
// import { Link } from 'react-router-dom';

const Landing = () => {
    return (
      <Container>
      <Heading fontSize='30px ' p='4' fontWeight='normal' className="landing-title">Welcome to our site <br/> ‘The Back Cover’!</Heading>
      <Container boxShadow='dark-lg' className="form-background-landing" p='4' my='4'>
      <Box>
            <Image src={reading} alt='a group of books' boxSize={{ base: '1000px', md: '1000px', lg: '1000px' }} h= {{ base: '800px', md: '1000px', lg: '300px' }}/>
      </Box>
    <Text fontSize={{ base: '18px', md: '18px', lg: '20px' }} p='2' className="landing-text">We hope you enjoy your time here; as you may have guessed from our name, this is a place for bookworms to express themselves and find their next book obsession. We function how you would use a back cover of a book, to quickly scan and decide which ones take your fancy, in a love at first sight kind of way .</Text>
      </Container>
    </Container>
    );
  };
  
  export default Landing;