import React from "react";
import HomeHeader from "../headers/homeHeader";
import Container from "react-bootstrap/Container";
import HomeBody from "./components/homeBody";

const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1638443523564-46b8a648c5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <HomeHeader />
        <Container>
          <div className="m-5">
            <HomeBody />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
