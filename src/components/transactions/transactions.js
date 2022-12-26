import React from "react";
import AppHeader from "../headers/appHeader";
import SideBar from "../sideBar/sideBar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { transactions_data } from "./tansactions_data";

const Transactions = () => {
  return (
    <>
      <AppHeader />
      <div className="d-flex flex-row judtify-content-between">
        <div className="side-bar-container">
          <SideBar />
        </div>
        <div className="body-container">
          <div className="d-flex flex-row justify-content-between mb-2">
            <h4>Recent Transactions</h4>

            <div className="d-flex flex-row justify-content-start">
              <div className="mt-1">
                <Button variant="outline-dark" size="sm">
                  <i className="fas fa-list"></i>
                </Button>
              </div>

              <div className="m-2"></div>

              <div className="mt-1">
                <Button variant="outline-dark" size="sm">
                  <i className="fas fa-th-large"></i>
                </Button>
              </div>
            </div>
          </div>
          {transactions_data.map((transaction, index) => {
            let date = new Date(transaction.executionDateTime);
            let amount = transaction.amount;
            let variant = "danger";
            let icon = "fas fa-arrow-up";
            if (parseFloat(amount) >= 0) variant = "success";
            if (parseFloat(amount) < 0) {
              amount = amount.slice(1);
              icon = "fas fa-arrow-down";
            }
            return (
              <Card className="mb-2 hover-effect" key={index}>
                <Card.Body className="d-flex flex-row justify-content-between p-2">
                  <div>
                    <h5> ID: {transaction.transactionId}</h5>
                    {transaction.description}
                  </div>

                  <div className="d-flex flex-row justify-content-between">
                    <Button
                      variant="dark-outline"
                      disabled
                      style={{ width: "12rem" }}
                    >
                      {transaction.type}
                    </Button>
                    <div className="m-4"></div>
                    <Button variant={variant} style={{ width: "10rem" }}>
                      {transaction.currency} ${amount}{" "}
                      {<i className={icon}></i>}
                    </Button>{" "}
                    <div className="m-4"></div>
                    <Button variant="dark" style={{ width: "10rem" }}>
                      {date.toDateString()}
                    </Button>{" "}
                    <div className="m-4"></div>
                    <Button variant="dark" style={{ width: "10rem" }}>
                      {date.toLocaleTimeString()}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Transactions;
