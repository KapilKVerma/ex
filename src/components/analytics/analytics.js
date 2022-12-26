import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AppHeader from "../headers/appHeader";
import SideBar from "../sideBar/sideBar";
import MainGraph from "./components/mainGraph";
import EnvironmentGraph from "./components/environmentGraph";
import ModulesGraph from "./components/modulesGraph";
import ErrorsList from "./components/errorsList";

import "./analytics.css";

const Analytics = () => {
  return (
    <>
      <AppHeader />
      <div className="d-flex flex-row judtify-content-between">
        <div className="side-bar-container">
          <SideBar />
        </div>
        <div className="body-container">
          <Row>
            <Col lg={9}>
              <MainGraph />
            </Col>
            <Col lg={3}>
              <EnvironmentGraph />
              <div className="m-3"></div>
              <ModulesGraph />
            </Col>
          </Row>
          <div className="m-4"></div>
          <ErrorsList />
          <div className="m-4"></div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
