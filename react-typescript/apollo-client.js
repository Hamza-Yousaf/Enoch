import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // uri: "https://api.enoch.app/graphql",
  uri: "http://localhost:4202/graphql",

  cache: new InMemoryCache(),
});

export default client;
