import React from "react";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { sideBarLinks } from "./links";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import "./sideBar.css";

const SideBar = () => {
  const history = useHistory();

  return (
    <div>
      <Card className="side-bar">
        <Card.Body className="p-0">
          {sideBarLinks.map((link, index) => {
            return (
              <div key={index} onClick={() => history.push(link.path)}>
                <Button variant="success" className="side-bar-link">
                  <i className={`${link.icon}`} />
                  <span className="m-2" />
                  <span>{link.title}</span>
                </Button>

                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={(props) => (
                    <Tooltip id="button-tooltip" {...props}>
                      {link.title}
                    </Tooltip>
                  )}
                >
                  <Button variant="success" className="side-bar-link-tooltip">
                    <i className={`${link.icon}`} />
                  </Button>
                </OverlayTrigger>
              </div>
            );
          })}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SideBar;
