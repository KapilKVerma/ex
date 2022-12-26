import React from "react";
import Card from "react-bootstrap/Card";
import { Bar } from "react-chartjs-2";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const MainGraph = () => {
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "June"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Client Errors",
        data: [30, 39, 80, 81, 56, 55, 10],
        backgroundColor: ["rgb(255, 205, 86)"],
      },
      {
        label: "Server Errors",
        data: [35, 20, 80, 81, 56, 55, 40],
        backgroundColor: ["rgb(75, 192, 192)"],
      },
      {
        label: "Total",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: ["rgb(54, 162, 235)"],
      },
    ],
  };
  return (
    <>
      <Card className="text-center">
        <Card.Header className="analytics-card-title pb-0">
          <Card.Title className=" d-flex flex-row justify-content-between">
            <div>
              <Form.Select size="sm">
                <option>This Week</option>
                <option>This Month</option>
                <option>This Year</option>
              </Form.Select>
            </div>
            <div>Main Graph</div>
            <div>
              <ButtonGroup>
                <Button size="sm" variant="dark">
                  All
                </Button>
                <Button size="sm" variant="outline-dark">
                  Client
                </Button>
                <Button size="sm" variant="outline-dark">
                  Sever
                </Button>
              </ButtonGroup>
            </div>
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <div style={{ width: "100%" }}>
            <Bar
              data={data}
              options={{
                responsive: true,
                plugins: {
                  legend: { display: true },
                },
              }}
            />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default MainGraph;
