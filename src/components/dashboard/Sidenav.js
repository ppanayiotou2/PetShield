import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Shield, Home } from "react-feather";

class Sidenav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navLinksArrows: {}
    };
  }

  rotateArrow = id => {
    this.setState(prevState => ({
      navLinksArrows: {
        ...prevState.navLinksArrows,
        [id]: !prevState.navLinksArrows[id]
      }
    }));
  };

  render() {
    return (
      <div className="dashboard-sidenav">
        <ul className="wrapper">
          <li className="action-title">ΕΝΕΡΓΕΙΕΣ</li>
          <li>
            <NavLink exact to="/dashboard">
              <i className="left">
                <Home />
              </i>
              Πίνακας Ελέγχου
            </NavLink>
          </li>
          <li>
            <span
              key={1}
              onClick={() => this.rotateArrow(1)}
              className={this.state.navLinksArrows[1] ? "selected" : "visible"}
            >
              <i className="left">
                <Shield />
              </i>
              Καταφύγιο
              <i className="mdi mdi-chevron-right right"></i>
            </span>

            <ul
              className={
                this.state.navLinksArrows[1]
                  ? "children children-visible"
                  : "children children-hidden"
              }
            >
              <li>
                <NavLink to="/dashboard/pet/create">Νέο Ζώο</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <span
              key={1}
              onClick={() => this.rotateArrow(2)}
              className={this.state.navLinksArrows[2] ? "selected" : "visible"}
            >
              <i className="left">
                <Shield />
              </i>
              Καταφύγιο
              <i className="mdi mdi-chevron-right right"></i>
            </span>

            <ul
              className={
                this.state.navLinksArrows[2]
                  ? "children children-visible"
                  : "children children-hidden"
              }
            >
              <li>
                <NavLink to="/dashboard/create">
                  <i className="left">
                    <Shield />
                  </i>
                  Νέο Ζώο
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidenav;
