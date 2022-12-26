import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Line } from "react-chartjs-2";

const Machines = () => {
  const machines = [
    {
      id: 1,
      title: "VERTICAL MIlling",
      provider: "haas",
      description: `Lorem ipsum dolor sit amet, 
        sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua.`,
      change_status: "increased",
      change: 15.24,
      make: 2013,
    },
    {
      id: 2,
      title: "LAthe",
      provider: "hmt",
      description: `Lorem ipsum dolor sit amet, 
       sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua.`,
      change_status: "decreased",
      change: 10.25,
      make: 2009,
    },
    {
      id: 3,
      title: "Injection Molding",
      provider: "haas",
      description: `Lorem ipsum dolor sit amet, 
           sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua.`,
      change_status: "decreased",
      change: 10.0,
      make: 2006,
    },
    {
      id: 1,
      title: "VERTICAL MIlling",
      provider: "haas",
      description: `Lorem ipsum dolor sit amet, 
        sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua.`,
      change_status: "increased",
      change: 15.24,
      make: 2013,
    },
    {
      id: 2,
      title: "LAthe",
      provider: "hmt",
      description: `Lorem ipsum dolor sit amet, 
       sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua.`,
      change_status: "decreased",
      change: 10.25,
      make: 2009,
    },
    {
      id: 3,
      title: "Injection Molding",
      provider: "haas",
      description: `Lorem ipsum dolor sit amet, 
           sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua.`,
      change_status: "decreased",
      change: 10.0,
      make: 2006,
    },
  ];

  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "June"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Efficiency",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  return (
    <div>
      <h4>Machines Efficiency</h4>
      <div className="mt-4">
        {machines.map((machine, index) => {
          return (
            <Card className="mb-3 hover-effect" key={index}>
              <Card.Body>
                <div className="d-flex flex-row justify-contetn-start">
                  <div style={{ width: "40%" }}>
                    <h5>{machine.title.toUpperCase()}</h5>
                    <div className="d-flex flex-row justify-content-start">
                      <Button variant="success" size="sm" disabled>
                        BRAND: {machine.provider.toUpperCase()}
                      </Button>
                      <div className="m-1"></div>
                      <Button variant="dark" size="sm" disabled>
                        CATEGORY: CNC
                      </Button>
                      <div className="m-1"></div>
                      <Button variant="dark" size="sm" disabled>
                        MAKE: {machine.make}
                      </Button>
                    </div>
                    <div className="mt-3">{machine.description}</div>
                  </div>

                  <div style={{ width: "30%", textAlign: "center" }}>
                    <h6>MATRIX</h6>
                    <div className="d-flex flex-row justify-content-between mb-3 p-1">
                      <div style={{ width: "50%", textAlign: "center" }}>
                        <h6>EFFICIENCY</h6>
                        <div className="d-flex flex-row justify-content-center">
                          {machine.change_status === "increased" ? (
                            <Button variant="outline-success">
                              {machine.change}%{" "}
                              <i className="fas fa-arrow-up"></i>
                            </Button>
                          ) : null}
                          {machine.change_status === "decreased" ? (
                            <Button variant="outline-danger">
                              {machine.change}%{" "}
                              <i className="fas fa-arrow-down"></i>
                            </Button>
                          ) : null}
                          {machine.change_status === "neutral" ? (
                            <Button variant="outline-secondary">
                              {machine.change}%{" "}
                              <i class="fas fa-arrows-alt-h"></i>
                            </Button>
                          ) : null}
                        </div>
                      </div>
                      <div style={{ width: "50%", textAlign: "center" }}>
                        <h6>HOURS OPERATED</h6>
                        <div className="d-flex flex-row justify-content-center">
                          {machine.change_status === "increased" ? (
                            <Button variant="outline-success">
                              {machine.change} hrs{" "}
                              <i className="fas fa-arrow-up"></i>
                            </Button>
                          ) : null}
                          {machine.change_status === "decreased" ? (
                            <Button variant="outline-danger">
                              {machine.change} hrs{" "}
                              <i className="fas fa-arrow-down"></i>
                            </Button>
                          ) : null}
                          {machine.change_status === "neutral" ? (
                            <Button variant="outline-secondary">
                              {machine.change} hrs{" "}
                              <i class="fas fa-arrows-alt-h"></i>
                            </Button>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="d-flex flex-row justify-content-between p-1">
                      <div style={{ width: "50%", textAlign: "center" }}>
                        <h6>EFFICIENCY</h6>
                        <div className="d-flex flex-row justify-content-center">
                          {machine.change_status === "increased" ? (
                            <Button variant="outline-success">
                              {machine.change}%{" "}
                              <i className="fas fa-arrow-up"></i>
                            </Button>
                          ) : null}
                          {machine.change_status === "decreased" ? (
                            <Button variant="outline-danger">
                              {machine.change}%{" "}
                              <i className="fas fa-arrow-down"></i>
                            </Button>
                          ) : null}
                          {machine.change_status === "neutral" ? (
                            <Button variant="outline-secondary">
                              {machine.change}%{" "}
                              <i class="fas fa-arrows-alt-h"></i>
                            </Button>
                          ) : null}
                        </div>
                      </div>
                      <div style={{ width: "50%", textAlign: "center" }}>
                        <h6>HOURS OPERATED</h6>
                        <div className="d-flex flex-row justify-content-center">
                          {machine.change_status === "increased" ? (
                            <Button variant="outline-success">
                              {machine.change} hrs{" "}
                              <i className="fas fa-arrow-up"></i>
                            </Button>
                          ) : null}
                          {machine.change_status === "decreased" ? (
                            <Button variant="outline-danger">
                              {machine.change} hrs{" "}
                              <i className="fas fa-arrow-down"></i>
                            </Button>
                          ) : null}
                          {machine.change_status === "neutral" ? (
                            <Button variant="outline-secondary">
                              {machine.change} hrs{" "}
                              <i class="fas fa-arrows-alt-h"></i>
                            </Button>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{ width: "30%", textAlign: "center" }}
                    onClick={() => {
                      alert("Expand Graph");
                    }}
                  >
                    <Line
                      data={data}
                      options={{
                        responsive: true,
                        legend: false,
                        scales: {
                          x: {
                            grid: { display: true },
                          },
                          y: {
                            display: false,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Machines;
