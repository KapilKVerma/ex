import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import Container from "react-bootstrap/Container";
import Header from "../header/header";

import "./contact.css";

const heading = (value) => (
  <span style={{ fontFamily: "bernard" }}>{value}</span>
);

const Contact = ({ title, icon }) => {
  return (
    <>
      <Container className="body-container">
        <Header title={title} icon={icon} />
        <div className="m-4"></div>

        <div style={{ fontSize: "1.25rem" }} className="text-light">
          <div className="mb-2">
            <b>{heading("Name:")}</b> Kapil Verma
          </div>
          <div className="mb-2">
            <b>{heading("Residence:")}</b> Melbourne, Australia
          </div>
          <div className="mb-2">
            <b>{heading("Email:")}</b> kapilkumaarverma@gamil.com
          </div>
          <div className="mb-5">
            <b>{heading("Phone:")}</b> (+61)-426227014
          </div>

          <div className="d-flex justify-content-center mb-5">
            <div className="heading-border">
              <h3>
                <b>{heading("SEND EMAIL")}</b>
              </h3>
            </div>
          </div>

          <Form>
            <Row className="mb-5">
              <Form.Group as={Col}>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  className="form-field text-light"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="form-field text-light"
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-5">
              <Form.Control
                as="textarea"
                rows={3}
                className="form-field text-light"
                placeholder="Message"
              />
            </Form.Group>

            <div className="d-flex justify-content-end">
              <div className="button">Send Message</div>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Contact;
