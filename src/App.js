import React, { Component } from "react";
import "./App.css";
import { Form } from "./Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form onSubmit={values => console.log(values)} />
      </div>
    );
  }
}

export default App;
