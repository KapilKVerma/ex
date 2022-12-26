import React from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import Logo from "../../../images/large-logo.png";
import "./homeBody.css";

const HomeBody = () => {
  const history = useHistory();
  return (
    <div className="text-center">
      {/* <div className="home-title">QM</div> */}
      <div className="mb-5" style={{}}>
        <img
          alt="logo"
          src={Logo}
          style={{ width: "30rem", background: "black", padding: "1rem" }}
        />
      </div>

      <div className="d-flex flex-row justify-content-center">
        <Button
          variant="success"
          style={{ padding: ".5rem 3rem", fontSize: "1.25rem" }}
          onClick={() => history.push("/signup")}
        >
          Sign Up
        </Button>
        <div className="m-3"></div>
        <Button
          variant="success"
          style={{ padding: ".5rem 3rem", fontSize: "1.25rem" }}
        >
          Request Demo
        </Button>
      </div>
    </div>
  );
};

export default HomeBody;
