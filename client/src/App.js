import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import Community from './pages/Community';
import MyBooks from './pages/MyBooks';
import Nav from './components/Nav/index';
import Footer from './components/Footer/index'
import { Box } from '@chakra-ui/react'
import Description from "./pages/Description";
import freeEBooks from "./pages/freeEbooks";
import EBooksSearch from "./components/freeEbooks";

// Google Books API calls
// const getBooksByAuthor = 'https://www.googleapis.com/books/v1/volumes?q=prideandprejudice+intitle&key=AIzaSyDgmjmghFQvvxLztdDeOKE0eqkG_HgdV84
// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="apollo">
        <Nav />
            {/* <Nav /> */}
            <Routes>
            <Route 
                path="/" 
                element={<Landing />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />

               <Route 
                path="/community" 
                element={<Community />} 
              />
              <Route 
                path="/mybooks" 
                element={<MyBooks />} 
              />
              <Route 
                path="/home" 
                element={<Home />} 
              />
                 <Route 
                path="/ebookssearch" 
                element={<EBooksSearch />} 
              />
                 <Route 
                path="/contact" 
                element={<Contact />} 
              />
                  <Route 
                path="/description" component="BookSearch" 
                element={<Description />} 
              />

              
            </Routes>

           
        </div>
      </Router>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
