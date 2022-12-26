import React from "react";
import Card from "react-bootstrap/Card";
import { Doughnut } from "react-chartjs-2";

const ModulesGraph = () => {
  const labels = ["Jan", "Feb", "Mar"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <>
      <Card className="text-center">
        <Card.Header className="analytics-card-title">
          <Card.Title>Errors Modules</Card.Title>
        </Card.Header>
        <Card.Body>
          <div style={{ width: "100%" }}>
            <Doughnut
              data={data}
              options={{
                responsive: true,
                plugins: { legend: { display: false } },
                scales: {
                  x: { display: false },
                  y: { display: false },
                },
              }}
            />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ModulesGraph;
