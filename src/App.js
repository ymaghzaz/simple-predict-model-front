import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";

const styles = {
  App: {
    width: "100%",
    height: "400px",
    backgroundColor: "green",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  Button: {
    width: "200px",
    height: "50px",
    color: "red"
  }
};

class App extends Component {
  predict = () => {
    axios
      .get("https://9jacdgb3la.execute-api.eu-west-1.amazonaws.com/dev/hello")
      .then(({ data }) => {
        alert(JSON.stringify(data));
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div style={styles.App}>
        <button style={styles.Button} onClick={this.predict}>
          Predict
        </button>
      </div>
    );
  }
}

export default App;
