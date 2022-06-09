import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './App.css';

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
