import React from "react";
import BookSearch from "../components/BookSearch";
import { Link } from 'react-router-dom';
import { Container } from '@chakra-ui/react'
import './Home.css'
const Home = () => {
    return (
      <Container>
        <BookSearch />
      </Container>
    );
  };
  
  export default Home;
  