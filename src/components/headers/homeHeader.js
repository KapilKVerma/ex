import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Logo from "../../images/small-logo.png";

const HomeHeader = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="p-0 home-header">
        <Container className="p-0">
          <Navbar.Brand>
            <img
              alt="logo"
              src={Logo}
              style={{ width: "5rem", background: "black", padding: ".25rem" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="home-nav-link">
                Features
              </Link>
              <Link to="/" className="home-nav-link">
                Pricing
              </Link>
            </Nav>
            <Nav>
              <Link to="/signin" className="home-nav-link">
                Sign In
              </Link>
              <Link to="/signup" className="home-nav-link">
                Sign Up
              </Link>
              <Link to="/dashboard" className="home-nav-link">
                Dashboard
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HomeHeader;
