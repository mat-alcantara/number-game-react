import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import numberGenerator from "./util/numberGenerator";

class App extends Component {
  state = {
    numQuestions: 0,
    numCorrect: 0,
    numbers: {
      value1: 0,
      value2: 0,
      value3: 0,
      proposedAnswer: 0,
    },
  };

  // Before component mount, it will update the values in numbers object
  componentDidMount() {
    this.updateNumbers();
  }

  // Update the numbers state
  updateNumbers() {
    // Call a function that create randoms value1, value2, value3 and proposedAnswer
    const newValues = numberGenerator();

    this.setState((prevState) => ({
      numbers: {
        value1: newValues.value1,
        value2: newValues.value2,
        value3: newValues.value3,
        proposedAnswer: newValues.proposedAnswer,
      },
    }));
  }

  // Update all score states
  updateScore(point) {
    this.setState((prevState) => ({
      numQuestions: prevState.numQuestions + 1,
      numCorrect: prevState.numCorrect + point,
    }));
  }

  // Function who is called after user click in the buttons true or false.
  // This is the function who calls all other functions to update the score
  // and the numbers for a new round
  submitAnswer(value) {
    // sum all three values
    const sums =
      this.state.numbers.value1 +
      this.state.numbers.value2 +
      this.state.numbers.value3;

    let resultBool = "";

    // Compare the sums with proposedAnswer
    sums === this.state.numbers.proposedAnswer
      ? (resultBool = true)
      : (resultBool = false);

    // Check if user is correct and update the score
    if (value === resultBool) {
      this.updateScore(1);
    } else {
      this.updateScore(0);
    }

    // update the numbers and start a new round
    this.updateNumbers();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">
              {`${this.state.numbers.value1} + ${this.state.numbers.value2} + ${this.state.numbers.value3} = ${this.state.numbers.proposedAnswer}`}
            </p>
          </div>
          <button onClick={() => this.submitAnswer(true)}>True</button>
          <button onClick={() => this.submitAnswer(false)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
