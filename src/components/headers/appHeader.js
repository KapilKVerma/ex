import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { sideBarLinks } from "../sideBar/links";

import Logo from "../../images/small-logo.png";

import "./headerCss.css";

const AppHeader = () => {
  const history = useHistory();
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="p-0" fixed="top">
        <Container className="p-0">
          <Navbar.Brand style={{ fontSize: "2rem", marginRight: "3rem" }}>
            <Link to="/" className="app-header-logo">
              <img
                alt="logo"
                src={Logo}
                style={{
                  width: "3.5rem",
                  background: "black",
                  padding: ".25rem",
                }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll />
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="success">Search</Button>
            </Form>
            <div className="m-3"></div>
            <Nav className="me-auto app-nav-links">
              {sideBarLinks.map((link, index) => {
                return (
                  <div key={index} onClick={() => history.push(link.path)}>
                    <Nav.Link className="m-1">{link.title}</Nav.Link>
                  </div>
                );
              })}
            </Nav>
            <NavDropdown
              title={`User: ${"Kapil"}`}
              id="navbarScrollingDropdown"
              style={{ color: "white" }}
              className="m-1 mt-2 mb-3"
            >
              <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Administration
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ margin: "4.25rem" }}></div>
    </>
  );
};

export default AppHeader;
