import React, { Component } from "react";
import Navbar from "./Components/navbar";
import Counters from "./Components/counters";

class App extends Component {
  //state
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 1 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  deleteHandler = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  resetHandler = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  incrementHandler = (counter) => {
    console.log("Got it", counter.value);
    const counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    if (index !== -1) {
      counter.value += 1;
      counters[index] = counter;
    }
    this.setState({ counters });
  };

  render() {
    return (
      <>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.deleteHandler}
            onIncrement={this.incrementHandler}
            onReset={this.resetHandler}
          />
        </main>
      </>
    );
  }
}

export default App;
