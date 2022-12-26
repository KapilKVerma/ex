import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import communicationLogo from "../../images/talk.png";
import problemSolving from "../../images/puzzle-pieces.png";
import timeManagementLogo from "../../images/time-manager.png";
import teamWorkLogo from "../../images/team.png";

import Resume from "../../files/Resume.pdf";

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

const Body = () => (
  <div className="text-light">
    <Row>
      <Col lg={7}>
        <div>
          <h3
            style={{
              fontFamily: "bernard",
              fontWeight: "600",
            }}
          >
            Web Application Developer
          </h3>
          <p>
            Dolor reprehenderit aut repudiandae maiores recusandae. Consequatur
            dolor nisi labore commodi ipsa? Excepturi velit laboriosam at
            voluptatibus cupiditate est vel. Dolorem praesentium itaque fugiat
            placeat quas consequatur? Obcaecati natus rerum
          </p>
          <p>
            Dolor reprehenderit aut repudiandae maiores recusandae. Consequatur
            dolor nisi labore commodi ipsa? Excepturi velit laboriosam at
            voluptatibus cupiditate est vel. Dolorem praesentium itaque fugiat
            placeat quas consequatur? Obcaecati natus rerum
          </p>
        </div>
      </Col>
      <Col lg={1}></Col>
      <Col lg={4}>
        <h3 className="mb-2">
          <b>{heading("Personal Information")}</b>
        </h3>
        <div style={{ fontSize: "1.25rem" }} className="mb-3">
          <div className="mb-2">
            <b>{heading("Name:")}</b> Kapil Verma
          </div>
          <div className="mb-2">
            <b>{heading("Age:")}</b> 32
          </div>
          <div className="mb-2">
            <b>{heading("Residence:")}</b> Melbourne, Australia
          </div>
          <div className="mb-2">
            <b>{heading("Email:")}</b> kapilkumaarverma@gamil.com
          </div>
          <div className="mb-2">
            <b>{heading("Phone:")}</b> (+61)-426227014
          </div>
        </div>
        <div className="pt-3">
          <a
            href={Resume}
            className="button"
            download={"Kapil Verma (Resume).pdf"}
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </Col>
    </Row>

    <div className="p-5"></div>

    <div className="d-flex justify-content-center">
      <div className="heading-border">
        <h3>
          <b>{heading("SKILLS")}</b>
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
