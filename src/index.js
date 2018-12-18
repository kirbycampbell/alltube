import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

//import { Rehydrated } from "aws-appsync-react"; //
import gql from "graphql-tag";
import { Query } from "react-apollo";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import aws_config from "./aws-exports";

const client = new ApolloClient({
  url: aws_config.aws_appsync_graphqlEndpoint,
  region: aws_config.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: aws_config.aws_appsync_apiKey
  }
});

const ListAuctions = () => (
  <Query
    query={gql`
      {
        listAuctions {
          id
          name
          price
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      console.log(data);
      return data.listAuctions.map(({ id, name }) => (
        <div key={id}>
          <p>{`${id}: ${name}`}</p>
        </div>
      ));
    }}
  </Query>
);

ReactDOM.render(
  <ApolloProvider client={client}>
    <h2>Hey baby</h2>
    <ListAuctions />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
