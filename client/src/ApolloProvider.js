import React from "react";
import App from "./App";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://x0mtv4vwcg.execute-api.us-east-1.amazonaws.com/prod/",
	cache: new InMemoryCache(),
	headers:{
	  authorization: localStorage.getItem('merkado-token') || ''
  }
});

export default function ApolloServer() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}
