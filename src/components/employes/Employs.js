import React from "react";
import AppHeader from "../headers/appHeader";
import SideBar from "../sideBar/sideBar";

const Employs = () => {
  return (
    <>
      <AppHeader />
      <div className="d-flex flex-row judtify-content-between">
        <div className="side-bar-container">
          <SideBar />
        </div>
        <div className="body-container"></div>
      </div>
    </>
  );
};

export default Employs;
