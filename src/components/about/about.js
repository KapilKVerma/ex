import React from "react";
import Container from "react-bootstrap/Container";
import Header from "../header/header";
import Body from "./body";

import "./about.css";

const About = ({ title, icon }) => {
  return (
    <>
      <Container className="body-container">
        <Header title={title} icon={icon} />
        <div className="m-4"></div>
        <Body />
      </Container>
    </>
  );
};

export default About;
