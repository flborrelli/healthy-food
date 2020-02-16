import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Nav, Navbar, Button, NavDropdown } from "react-bootstrap";

class Navbar2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar-container position-absolute">
        <Navbar className="navbar-top " expand="lg">
          <Navbar.Brand className="nav-logo" href="#home">
            Healthy Food
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="button-box">
            <Nav className="mr-auto">
              <Nav.Link className="navbar-links" href="#home">
                HEALTHY RECIPES
              </Nav.Link>
              <Nav.Link className="navbar-links ml-3" href="#link">
                BLOG
              </Nav.Link>
              <Nav.Link className="navbar-links ml-3" href="#link">
                JOIN
              </Nav.Link>
              <button type="button" className="nav-button btn btn-success ml-3">
                REGISTER
              </button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    );
  }
}

export default Navbar2;
