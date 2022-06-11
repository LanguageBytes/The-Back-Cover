import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios"
// WE NEED TO ADD APOLLO BACK AFTER TEST!! :) import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// Google Books API calls
const getBooksByAuthor = 'https://www.googleapis.com/books/v1/volumes?q=prideandprejudice+intitle&key=AIzaSyDgmjmghFQvvxLztdDeOKE0eqkG_HgdV84'


// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });
function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooksWithAxios();
  }, []);

  const getBooksWithAxios = async () => {
    const response = await axios.get(getBooksByAuthor);
    setBooks(response.data);
  };

  return (
   <div>
      <p>hello{books.totalItems}</p>
      </div>
  );
}


export default App;
