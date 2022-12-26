import React from "react";

import "./header.css";

const Header = ({ title, icon }) => (
  <>
    <div className="d-flex flex-row justify-content-between header-title">
      <div>{title}</div>
      <div>
        <i className={icon}></i>
      </div>
    </div>
  </>
);

export default Header;
