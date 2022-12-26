import React from "react";
import AppHeader from "../headers/appHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import SideBar from "../sideBar/sideBar";

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
      image:
        "https://3.bp.blogspot.com/-mC_aONnXiEQ/WHTUL14IbjI/AAAAAAAAHtU/y-1EneDW1gkn_A3OKTGydFUYA_4aahCDQCLcB/s1600/what%2Bis%2Bcnc%2Bmachine.jpg",
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
      image:
        "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/10/5/6a25e1ee-68ea-4dee-a33d-574ece6c1a28.png",
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
      image:
        "https://4.imimg.com/data4/EJ/BH/MY-705452/cnc-milling-machine-500x500.jpg",
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
      image:
        "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/10/5/6a25e1ee-68ea-4dee-a33d-574ece6c1a28.png",
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
      image:
        "https://4.imimg.com/data4/EJ/BH/MY-705452/cnc-milling-machine-500x500.jpg",
    },
  ];

  return (
    <>
      <AppHeader />

      <div className="d-flex flex-row judtify-content-between">
        <div className="side-bar-container">
          <SideBar />
        </div>
        <div className="body-container">
          <div className="d-flex flex-row justify-content-between mb-2">
            <h4>Machines List</h4>

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

          <Row className="p-0">
            {machines.map((machine, index) => {
              return (
                <Col lg={3} key={index} className="p-2">
                  <Card>
                    <div
                      style={{
                        backgroundImage: `url(${machine.image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "15rem",
                        borderRadius: "5px",
                      }}
                    />

                    <Card.Body>
                      <Card.Title>
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
                      </Card.Title>
                      <Card.Text>{machine.description}</Card.Text>
                      <div className="d-flex flex-row justify-content-end">
                        <Button variant="success">View Details</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Machines;
