import React, { Component } from "react";
import Password from "./Password/Password";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  submitFormHandler = event => {
    event.preventDafault();
  };

  render() {
    const field = {
      id: "password",
      name: "password",
      label: "Password Field",
      type: "text",
      autoFocus: true
    };

    let index = 1;

    return (
      <React.Fragment>
        <h3>Password Validation</h3>

        <form onSubmit={this.submitFormHandler}>
          <Password
            key={index}
            type={field.type}
            name={field.name}
            label={field.label}
            autoFocus={field.autoFocus}
          />

          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}

export default App;