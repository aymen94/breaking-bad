import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

class MenuNavbar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" className="mb-3">
        <Container>
          <Navbar.Brand href="#home">Breaking Bad</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/series">
                Series
              </Link>
              <Link className="nav-link" to="/characters">
                Characters
              </Link>
              <Link className="nav-link" to="/quotes">
                Quotes
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </Nav>
            <Outlet />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default MenuNavbar;
