import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Header from "../header/header";
import System1 from "../../images/system1.jpg";
import System2 from "../../images/system2.jpg";

import "./portfolio.css";

const heading = (value) => (
  <span style={{ fontFamily: "bernard" }}>{value}</span>
);

const projects = [
  {
    title: "Enterprise Chief",
    images: System1,
    description: "",
    technologies: [],
    type: "application",
    category: "work",
    link: "",
  },
  {
    title: "Quality Management System",
    images: System2,
    description: "",
    technologies: [],
    type: "application",
    category: "personal",
    link: "",
  },
  {
    title: "Food Blog",
    images: System2,
    description: "",
    technologies: [],
    type: "website",
    category: "personal",
    link: "",
  },
  {
    title: "Slack & JIRA Integration",
    images: System1,
    description: "",
    technologies: [],
    type: "website",
    category: "work",
    link: "",
  },
];

const Portfolio = ({ title, icon }) => {
  return (
    <>
      <Container className="body-container">
        <Header title={title} icon={icon} />
        <div className="m-4"></div>

        <div className="text-light">
          <div className="d-flex justify-content-between mb-4">
            <div className="heading-border">
              <h3>
                <b>{heading("PROJECTS")}</b>
              </h3>
            </div>
            <div className="pt-2 project-categories-button">
              <div className="d-flex justify-content-end">
                <div className="work-button">WORK</div>
                <div className="m-2"></div>
                <div className="button">PERSONAL</div>
              </div>
            </div>
          </div>
          <Row className="mb-5 projects-list-1">
            {projects.map((project, index) => {
              return (
                <Col lg={4} className="mb-4" key={index}>
                  <div className="project-tile">
                    <Card.Img variant="top" src={project.images} />
                    <Card.Body className="p-3">
                      <Card.Title style={{ color: "#0389BE" }}>
                        {project.title.toUpperCase()}
                      </Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <div className="d-flex justify-content-end">
                        <div className="card-button">DETAILS</div>
                      </div>
                    </Card.Body>
                  </div>
                </Col>
              );
            })}
          </Row>

          <Row className="mb-5 projects-list-2">
            {projects.map((project, index) => {
              return (
                <Col lg={4} className="mb-4" key={index}>
                  <div className="project-tile">
                    <Card.Img variant="top" src={project.images} />
                    <Card.Body className="p-3">
                      <Card.Title style={{ color: "#0389BE" }}>
                        {project.title.toUpperCase()}
                      </Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <div className="d-flex justify-content-end">
                        <div className="card-button">DETAILS</div>
                      </div>
                    </Card.Body>
                  </div>
                </Col>
              );
            })}
          </Row>
          <div className="d-flex justify-content-start mb-4">
            <div className="heading-border">
              <h3>
                <b>{heading("FRONT-END COMPONENTS")}</b>
              </h3>
            </div>
          </div>
          <Row className="mb-3">
            {projects.map((project, index) => {
              return (
                <Col lg={4} className="mb-4" key={index}>
                  <div className="project-tile">
                    <Card.Img variant="top" src={project.images} />
                    <Card.Body className="p-3">
                      <Card.Title style={{ color: "#0389BE" }}>
                        {project.title.toUpperCase()}
                      </Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <div className="d-flex justify-content-end">
                        <div className="card-button">DETAILS</div>
                      </div>
                    </Card.Body>
                  </div>
                </Col>
              );
            })}
          </Row>

          <div className="d-flex justify-content-start mb-4">
            <div className="heading-border">
              <h3>
                <b>{heading("BACKEND SYSTEMS")}</b>
              </h3>
            </div>
          </div>
          <Row className="mb-4">
            {projects.map((project, index) => {
              return (
                <Col lg={4} className="mb-4" key={index}>
                  <div className="project-tile">
                    <Card.Img variant="top" src={project.images} />
                    <Card.Body className="p-3">
                      <Card.Title style={{ color: "#0389BE" }}>
                        {project.title.toUpperCase()}
                      </Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <div className="d-flex justify-content-end">
                        <div className="card-button">DETAILS</div>
                      </div>
                    </Card.Body>
                  </div>
                </Col>
              );
            })}
          </Row>
          <div className="d-flex justify-content-start mb-4">
            <div className="heading-border">
              <h3>
                <b>{heading("WEB APPLICATION CONCEPTS")}</b>
              </h3>
            </div>
          </div>
          <Row>
            {projects.map((project, index) => {
              return (
                <Col lg={4} className="mb-4" key={index}>
                  <div className="project-tile">
                    <Card.Img variant="top" src={project.images} />
                    <Card.Body className="p-3">
                      <Card.Title style={{ color: "#0389BE" }}>
                        {project.title.toUpperCase()}
                      </Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <div className="d-flex justify-content-end">
                        <div className="card-button">DETAILS</div>
                      </div>
                    </Card.Body>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Portfolio;
