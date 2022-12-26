import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CreateTicketButton from "./createTicketButton";

import Table from "react-bootstrap/Table";

const ErrorsList = () => {
  const [errors, setErrors] = useState([]);

  const createErrorsList = () => {
    const errorCodes = ["500", "504", "509"];
    const modules = [
      "strategies api",
      "capabilities api",
      "divisions api",
      "risks api",
      "data assets",
    ];
    let list = [];
    const message =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    for (let i = 0; i < 15; i++) {
      let errorCode = errorCodes[Math.floor(Math.random() * errorCodes.length)];
      let module = modules[Math.floor(Math.random() * modules.length)];
      const errorObject = { message, errorCode, module, ticket_created: false };
      list.push(errorObject);
    }
    setErrors(list);
  };

  useEffect(() => {
    createErrorsList();
  }, []);
  return (
    <>
      <Card className="text-center">
        <Card.Header className="analytics-card-title">
          <Card.Title>Errors List</Card.Title>
        </Card.Header>
        <Card.Body className="p-0 pb-1">
          <Table>
            <thead>
              <tr>
                <th>Ref. No.</th>
                <th>Error Code</th>
                <th className="text-start">Error Message</th>
                <th className="text-start">Module</th>
                <th>Jira Ticket</th>
              </tr>
            </thead>
            <tbody>
              {errors.map((error, index) => {
                return (
                  <tr key={index}>
                    <td style={{ width: "5%" }}>{index + 1}</td>
                    <td style={{ width: "10%" }}>
                      <Button variant="danger" size="sm">
                        {error.errorCode}
                      </Button>
                    </td>
                    <td style={{ width: "60%" }} className="text-start">
                      {error.message}
                    </td>
                    <td
                      className="text-start text-uppercase"
                      style={{ width: "15%" }}
                    >
                      {error.module}
                    </td>
                    <td style={{ width: "10%" }}>
                      {error.ticket_created ? (
                        <Button variant="primary"></Button>
                      ) : (
                        <CreateTicketButton />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
};

export default ErrorsList;
