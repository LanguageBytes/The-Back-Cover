import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './App.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (

  );
}

export default App;
