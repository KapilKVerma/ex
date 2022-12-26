import React from "react";
import HomeHeader from "../headers/homeHeader";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const SignUp = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1638443523564-46b8a648c5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <HomeHeader />
      <Container>
        <div className="m-5 d-flex flex-row justify-content-center">
          <Card className="p-3">
            <Card.Body>
              <Card.Title className="text-center m-3">
                <i className="fas fa-user sign-in-user-logo"></i>
                <h5 className="p-3">Create Account</h5>
              </Card.Title>

              <Card.Text>
                <Form style={{ width: "22.5rem" }}>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      <i className="fas fa-building"></i>
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Company Name"
                      aria-label="Name"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon2">
                      <i className="fas fa-envelope"></i>
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Email Address"
                      aria-label="Email"
                      type="email"
                      aria-describedby="basic-addon2"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3">
                      <i className="fas fa-phone"></i>
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Contact Number"
                      aria-label="Number"
                      type="number"
                      aria-describedby="basic-addon3"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon4">
                      <i className="fas fa-lock"></i>
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Password"
                      aria-label="Password"
                      type="password"
                      aria-describedby="basic-addon4"
                    />
                  </InputGroup>

                  <InputGroup>
                    <InputGroup.Text id="basic-addon5">
                      <i className="fas fa-lock"></i>
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Confirm Password"
                      aria-label="Confirm Password"
                      type="password"
                      aria-describedby="basic-addon5"
                    />
                  </InputGroup>

                  <div className="m-4"></div>

                  <div className="d-flex flex-row justify-content-end">
                    <Button variant="success" type="submit">
                      Create Account
                    </Button>
                  </div>
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
