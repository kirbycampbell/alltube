import React, { Component } from "react";
import "./App.css";

import { CreateAuctionForm } from "./Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateAuctionForm />
      </div>
    );
  }
}

export default App;

//<Connect mutation={graphqlOperation(createBlog)}>
//{({ mutation }) => (
//  <Form
//    onSubmit={async input => {
//      const response = await mutation({ input });
//      console.log(response);
//    }}
//  />
//)}
//</Connect>
//<Blogs />
