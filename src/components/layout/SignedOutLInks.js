import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../../src/logo2.png";

const SignedOutLinks = () => {
  return (
    <ul className="d-flex links-wrapper">
      <li>
        <Link to="/">
          <img id="logo" src={logo} alt="Pet Shield" />
        </Link>
      </li>
      <li className="nav-item">
        <NavLink exact to="/">
          Αρχική
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/search">Αναζήτηση</NavLink>
      </li>
      <div className="ml-auto d-flex">
        <li className="nav-item">
          <NavLink to="/signin">Σύνδεση</NavLink>
        </li>
        <li className="nav-item">
          <span id="links-divider">|</span>
        </li>
        <li className="nav-item">
          <NavLink to="/signup">Εγγραφή</NavLink>
        </li>
      </div>
    </ul>
  );
};

export default SignedOutLinks;
