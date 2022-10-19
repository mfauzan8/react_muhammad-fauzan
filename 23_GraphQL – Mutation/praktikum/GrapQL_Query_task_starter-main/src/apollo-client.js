import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "https://valid-pheasant-86.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": "hPG4LHAScSbz2EtThbxU646IlBEEa89PU0C5F64M7lgibO6xzJp13uHdZbimAv7a",
  },
});

export default apolloClient;
