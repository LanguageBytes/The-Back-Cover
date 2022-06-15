import React from "react";
import { Center, Heading } from '@chakra-ui/react'
import { Container } from "@chakra-ui/react";
// import axios from "axios"
// import { Link } from 'react-router-dom';

const Landing = () => {
    return (
      <Container>
      <Heading fontSize='30px ' p='4' fontWeight='normal' className="discovery-title">Welcome</Heading>
      <Center boxShadow='dark-lg' className="form-background" p='4' my='4'>
      
      </Center>
    </Container>
    );
  };
  
  export default Landing;