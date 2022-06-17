import React from "react";
import EBooksSearch from "../components/freeEbooks";
import { Link } from 'react-router-dom';
import { Container } from '@chakra-ui/react'
import './Home.css'

const Home = () => {
    return (
      <div>
        <EBooksSearch />
   
      </div>
    );
  };
  
  export default Home;
  