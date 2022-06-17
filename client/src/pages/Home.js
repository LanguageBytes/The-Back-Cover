import React from "react";
import BookSearch from "../components/BookSearch";
import { Link } from 'react-router-dom';
import { Container } from '@chakra-ui/react'
import './Home.css'
const Home = () => {
    return (
      <div>
        <BookSearch />
        <p>hello</p>
      </div>
    );
  };
  
  export default Home;
  