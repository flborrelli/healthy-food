import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar-top navbar navbar-expand-lg navbar-light position-absolute pt-2">
        <NavLink className="nav-logo navbar-brand" to="#">
          Healthy Food
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Alterna navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="nav-buttons collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active ml-3">
              <NavLink className="navbar-links nav-link" to="#">
                Healthy Recipes <span className="sr-only">(Página atual)</span>
              </NavLink>
            </li>
            <li className="nav-item ml-3">
              <NavLink className="navbar-links nav-link" to="#">
                Blog
              </NavLink>
            </li>
            <li className="nav-item ml-3">
              <NavLink className="navbar-links nav-link" to="#">
                Join
              </NavLink>
            </li>
            <li className="nav-item ml-4 pr-5">
              <button type="button" class="nav-button btn btn-success">Register</button>
            </li>
          </ul>
        </div>
      </nav>
    );  
  }
}

export default Navbar;
