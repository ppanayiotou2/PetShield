/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import logo from "../../../src/logo2.png";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { LogOut, Layout } from "react-feather";

class SignedInLinks extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  render() {
    return (
      <ul className="d-flex links-wrapper">
        <li>
          <Link to="/">
            <img id="logo" src={logo} alt="Pet Shield" />
          </Link>
        </li>
        <li className="nav-item">
          <NavLink exact to="/">
            Αρχική Σελίδα
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/search">Αναζήτηση</NavLink>
        </li>
        <div className="ml-auto d-flex">
          <li className="nav-item">
            <Dropdown
              id="profile-dropdown"
              isOpen={this.state.dropdownOpen}
              toggle={this.toggle}
            >
              <DropdownToggle id="toggle-btn">
                {this.props.profile.firstName}
                <i
                  className={
                    this.state.dropdownOpen
                      ? "mdi mdi-chevron-down arrow rotated"
                      : "mdi mdi-chevron-down arrow"
                  }
                ></i>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <NavLink to="/dashboard">
                    <i>
                      <Layout />
                    </i>
                    Dashboard
                  </NavLink>
                  <NavLink onClick={this.props.signOut}>
                    <i>
                      <LogOut />
                    </i>
                    Αποσύνδεση
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </li>
        </div>
      </ul>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
