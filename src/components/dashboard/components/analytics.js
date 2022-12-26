import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Analytics = () => {
  const analytics = [
    {
      id: 1,
      title: "production",
      description: `Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua.`,
      value: 18000,
      change_status: "increased",
      change: 15.24,
    },
    {
      id: 2,
      title: "quality",
      description: `Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua.`,
      value: 76000,
      change_status: "decreased",
      change: 10.25,
    },
    {
      id: 3,
      title: "rejections",
      description: `Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua.`,
      value: 250,
      change_status: "neutral",
      change: 0,
    },
  ];
  return (
    <div>
      <Row>
        {analytics.map((analytic, key) => {
          return (
            <Col lg={4} md={6} key={key} className="mb-3">
              <Card className="light-shadow">
                <Card.Body>
                  <Card.Title>{analytic.title.toUpperCase()}</Card.Title>
                  <Card.Text>{analytic.description}</Card.Text>
                  <div className="d-flex flex-row justify-content-between">
                    <div></div>
                    <div className="d-flex flex-row justify-content-end">
                      <div>
                        <h3>{analytic.value}</h3>
                      </div>
                      <div className="m-2"></div>
                      <div>
                        {analytic.change_status === "increased" ? (
                          <Button variant="outline-success">
                            {analytic.change}%{" "}
                            <i className="fas fa-arrow-up"></i>
                          </Button>
                        ) : null}
                        {analytic.change_status === "decreased" ? (
                          <Button variant="outline-danger">
                            {analytic.change}%{" "}
                            <i className="fas fa-arrow-down"></i>
                          </Button>
                        ) : null}
                        {analytic.change_status === "neutral" ? (
                          <Button variant="outline-secondary">
                            {analytic.change}%{" "}
                            <i class="fas fa-arrows-alt-h"></i>
                          </Button>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Analytics;
