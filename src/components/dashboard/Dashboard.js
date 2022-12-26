import React from "react";
import AppHeader from "../headers/appHeader";
import Analytics from "./components/analytics";
import Machines from "./components/machines";
import SideBar from "../sideBar/sideBar";

const Dashboard = () => {
  return (
    <>
      <AppHeader />
      <div className="d-flex flex-row justify-content-between">
        <div className="side-bar-container">
          <SideBar />
        </div>
        <div className="body-container">
          <Analytics />
          <div className="m-3"></div>
          <Machines />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
