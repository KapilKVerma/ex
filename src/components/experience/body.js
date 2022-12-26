import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import communicationLogo from "../../images/talk.png";
import problemSolving from "../../images/puzzle-pieces.png";
import timeManagementLogo from "../../images/time-manager.png";
import teamWorkLogo from "../../images/team.png";

import "./experience.css";

const heading = (value) => (
  <span style={{ fontFamily: "bernard" }}>{value}</span>
);

const skills = [
  {
    title: "Communication",
    logo: communicationLogo,
    content: `Dolor reprehenderit aut repudiandae maiores recusandae. 
      Consequatur dolor nisi labore`,
  },
  {
    title: "Problem Solving",
    logo: problemSolving,
    content: `Dolor reprehenderit aut repudiandae maiores recusandae. 
      Consequatur dolor nisi labore commodi`,
  },
  {
    title: "Time Management",
    logo: timeManagementLogo,
    content: `Dolor reprehenderit aut repudiandae maiores recusandae. 
    Consequatur dolor nisi labore commodi`,
  },
  {
    title: "Teamwork",
    logo: teamWorkLogo,
    content: `Dolor reprehenderit aut repudiandae maiores recusandae. 
    Consequatur dolor nisi labore commodi`,
  },
];

const technicalSkills = [
  "javascript",
  "reactjs",
  "nodejs",
  "python",
  "django",
  "postgres",
  "sql",
  "aws lambda function",
  "aws ec2",
  "aws apigateway",
  "aws rds",
  "aws s3 bucket",
];

const Body = () => (
  <div className="text-light">
    <Row>
      <Col lg={7}>
        <div className="d-flex justify-content-center mb-4">
          <div className="heading-border">
            <h3>
              <b>{heading("EXPERIENCE")}</b>
            </h3>
          </div>
        </div>

        <div className="experience-container p-3">
          <h5 className="mb-2">SOFTWARE DEVELOPER</h5>
          <div style={{ color: "#0389BE" }}>
            <strong>AUDACIX, MELBOURNE</strong>
          </div>
          <p>
            Dolor reprehenderit aut repudiandae maiores recusandae. Consequatur
            dolor nisi labore commodi ipsa? Excepturi velit laboriosam at
            voluptatibus cupiditate est vel. Dolorem praesentium itaque fugiat
            placeat quas consequatur? Obcaecati natus rerum
          </p>
        </div>

        <div className="m-4"></div>

        <div className="experience-container p-3">
          <h5 className="mb-2">SOFTWARE DEVELOPER</h5>
          <div style={{ color: "#0389BE" }}>
            <strong>AUDACIX, MELBOURNE</strong>
          </div>
          <p>
            Dolor reprehenderit aut repudiandae maiores recusandae. Consequatur
            dolor nisi labore commodi ipsa? Excepturi velit laboriosam at
            voluptatibus cupiditate est vel. Dolorem praesentium itaque fugiat
            placeat quas consequatur? Obcaecati natus rerum
          </p>
        </div>

        <div className="m-4"></div>

        <div className="experience-container p-3">
          <h5 className="mb-2">SOFTWARE DEVELOPER</h5>
          <div style={{ color: "#0389BE" }}>
            <strong>AUDACIX, MELBOURNE</strong>
          </div>
          <p>
            Dolor reprehenderit aut repudiandae maiores recusandae. Consequatur
            dolor nisi labore commodi ipsa? Excepturi velit laboriosam at
            voluptatibus cupiditate est vel. Dolorem praesentium itaque fugiat
            placeat quas consequatur? Obcaecati natus rerum
          </p>
        </div>
      </Col>

      <Col lg={5}>
        <div className="mb-4">
          <div className="d-flex justify-content-center mb-4">
            <div className="heading-border">
              <h3>
                <b>{heading("EDUCATION")}</b>
              </h3>
            </div>
          </div>

          <div className="experience-container p-3">
            <h5 className="mb-2">
              Master Of Information Technology (Professional)
            </h5>
            <div style={{ color: "#0389BE" }}>
              <strong>DEAKIN UNIVERSITY, BURWOOD, AUSTRALIA</strong>
            </div>
          </div>

          <div className="m-4"></div>

          <div className="experience-container p-3">
            <h5 className="mb-2">Bachelors Of Computer Science</h5>
            <div style={{ color: "#0389BE" }}>
              <strong>MAHARISHI UNIVERSITY, INDIA</strong>
            </div>
          </div>
        </div>

        <div>
          <div className="d-flex justify-content-center mb-4">
            <div className="heading-border">
              <h3>
                <b>{heading("TECHNICAL SKILLS")}</b>
              </h3>
            </div>
          </div>

          <div className="d-flex justify-content-start">
            {technicalSkills.slice(0, 4).map((skill, index) => {
              return (
                <div
                  key={index}
                  className="p-3 m-1 text-uppercase"
                  style={{
                    border: "2px solid #0389BE",
                    display: "inline-block",
                    width: "fit-content",
                  }}
                >
                  {skill}
                </div>
              );
            })}
          </div>

          <div className="d-flex justify-content-start">
            {technicalSkills.slice(5, 8).map((skill, index) => {
              return (
                <div
                  key={index}
                  className="p-3 m-1 text-uppercase"
                  style={{
                    border: "2px solid #0389BE",
                    display: "inline-block",
                    width: "fit-content",
                  }}
                >
                  {skill}
                </div>
              );
            })}
          </div>

          <div className="d-flex justify-content-start">
            {technicalSkills.slice(9, 15).map((skill, index) => {
              return (
                <div
                  key={index}
                  className="p-3 m-1 text-uppercase"
                  style={{
                    border: "2px solid #0389BE",
                    display: "inline-block",
                    width: "fit-content",
                  }}
                >
                  {skill}
                </div>
              );
            })}
          </div>
        </div>
      </Col>
    </Row>

    <div className="p-4"></div>

    <div className="d-flex justify-content-center">
      <div className="heading-border">
        <h3>
          <b>{heading("TECHNICAL SKILLS")}</b>
        </h3>
      </div>
    </div>

    <div className="p-4"></div>

    <Row>
      {skills.map((skill, index) => {
        return (
          <Col
            lg={3}
            className="d-flex justify-content-center mb-5"
            key={index}
          >
            <div className="d-flex flex-column justify-content-center w-90">
              <div className="d-flex justify-content-center">
                <img src={skill.logo} alt="Logo" />
              </div>
              <div className="text-center p-3">
                <h5>{skill.title}</h5>
              </div>
              <div className="text-center">{skill.content}</div>
            </div>
          </Col>
        );
      })}
    </Row>
  </div>
);

export default Body;
