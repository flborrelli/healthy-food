import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar-top navbar navbar-expand-lg navbar-light position-absolute">
        <NavLink className="navbar-brand ml-5 pl-5" to="#">
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
            <li className="nav-item active">
              <NavLink className="nav-link" to="#">
                Healthy Recipes <span className="sr-only">(Página atual)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#">
                Join
              </NavLink>
            </li>
            <li className="nav-item mr-5 pr-5">
              <button type="button" class="btn btn-success">Register</button>
            </li>
          </ul>
        </div>
      </nav>
    );  
  }
}

export default Navbar;
