import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './App.css';
import axios from "axios"

// Google Books API calls
const getBooksByTitle = 'https://www.googleapis.com/books/v1/volumes?q=search+intitle&key=AIzaSyDgmjmghFQvvxLztdDeOKE0eqkG_HgdV84'
const getBooksByAuthor = 'https://www.googleapis.com/books/v1/volumes?q=search+intitle&key=AIzaSyDgmjmghFQvvxLztdDeOKE0eqkG_HgdV84'


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <h1>hello</h1>
    </ApolloProvider>
  );
}


export default App;
