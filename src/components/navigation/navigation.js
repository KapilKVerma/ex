import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = ({ setIndex }) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <div style={{ fontFamily: "calibre", fontSize: "1.5rem" }}>
              Kapil Verma
            </div>
            <div
              style={{ fontSize: ".8rem", color: "#0389BE", fontWeight: "600" }}
            >
              (+61)-426227014
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link onClick={() => setIndex(0)}>HOME</Nav.Link>
              <Nav.Link onClick={() => setIndex(1)}>ABOUT ME</Nav.Link>
              <Nav.Link onClick={() => setIndex(2)}>EXPERIENCE</Nav.Link>
              <Nav.Link onClick={() => setIndex(3)}>PORFOLIO</Nav.Link>
              <Nav.Link onClick={() => setIndex(4)}>CONTACT ME</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
