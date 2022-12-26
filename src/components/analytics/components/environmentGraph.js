import React from "react";
import Card from "react-bootstrap/Card";
import { Bar } from "react-chartjs-2";

const EnvironmentGraph = () => {
  const labels = ["Client", "Server"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Errors",
        data: [65, 800],
        backgroundColor: ["rgba(255, 205, 86, 0.7)", "rgba(75, 192, 192, 0.7)"],
        borderColor: ["rgb(255, 205, 86)", "rgb(75, 192, 192)"],
      },
    ],
  };

  return (
    <>
      <Card className="text-center">
        <Card.Header className="analytics-card-title">
          <Card.Title>Environment Errors</Card.Title>
        </Card.Header>
        <Card.Body>
          <div style={{ width: "100%" }}>
            <Bar
              data={data}
              options={{
                responsive: true,
                plugins: { legend: { display: false } },
                scales: {
                  x: { display: true },
                  y: { display: true },
                },
              }}
            />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default EnvironmentGraph;
