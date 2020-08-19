import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counter, onIncrement, onDelete } = this.props;
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.format()}</span>
        <button
          className="btn btn-success btn-sm"
          onClick={() => onIncrement(counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => onDelete(counter.id)}
        >
          Danger
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  format() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
