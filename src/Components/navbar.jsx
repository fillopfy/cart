import React, { Component } from "react";

class Navbar extends Component {
  render() {
      const { totalCounters } = this.props;
    return (
      <nav className="navbar navbar-light bg-dark">
        <a className="navbar-brand text-light" href="#">
          Awesome App{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
