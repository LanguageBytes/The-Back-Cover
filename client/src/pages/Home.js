import React from "react";
import BookSearch from "../components/BookSearch";
import { Link } from 'react-router-dom';
import { Center, Heading } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import {Box} from '@chakra-ui/react'
import './Home.css'
const Home = () => {
    return (
      <Container>
        <Center>
          <Box p='4'>
        <Heading fontSize='30px ' p='4' fontWeight='normal' className="discovery-title" >Discovery</Heading>
        <BookSearch />
        </Box>
        </Center>
      </Container>
  
    );
  };
  
  export default Home;
  