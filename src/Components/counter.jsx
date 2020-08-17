import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageURL: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  handleIncrement() {
    console.log("Increment clicked!", this.state.count);
  }

  

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.format()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.handleIncrement}
        >
          Increment
        </button>

        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count == 0 ? "warning" : "primary";
    return classes;
  }

  format() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
