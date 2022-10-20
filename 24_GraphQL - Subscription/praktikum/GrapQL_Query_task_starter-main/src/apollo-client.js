import { ApolloClient, InMemoryCache } from "@apollo/client";

import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws/index.js";

const httpLink = new HttpLink({
  uri: "https://valid-pheasant-86.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret": "hPG4LHAScSbz2EtThbxU646IlBEEa89PU0C5F64M7lgibO6xzJp13uHdZbimAv7a",
  },
});

const wsLink = new WebSocketLink({
  uri: "wss://valid-pheasant-86.hasura.app/v1/graphql",
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "x-hasura-admin-secret": "hPG4LHAScSbz2EtThbxU646IlBEEa89PU0C5F64M7lgibO6xzJp13uHdZbimAv7a",
      },
    },
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === "OperationDefinition" && definition.operation === "subscription";
  },
  wsLink,
  httpLink
);

const apolloClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default apolloClient;
