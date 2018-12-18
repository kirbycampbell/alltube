import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider } from "react-apollo";
import { Rehydrated } from "aws-appsync-react"; //

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import aws_config from "./aws-exports";

const client = new AWSAppSyncClient({
  url: aws_config.aws_appsync_graphqlEndpoint,
  region: aws_config.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: aws_config.aws_appsync_apiKey
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Rehydrated>
      <App />
    </Rehydrated>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
