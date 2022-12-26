import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import Home from "./components/home/home";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";

import Navigation from "./components/navigation/navigation";

import "./App.css";

const App = () => {
  const [index, setIndex] = useState(0);

  const homeSelect = () => setIndex(0);
  const aboutMeSelect = () => setIndex(1);
  const experienceSelect = () => setIndex(2);
  const portfolioSelect = () => setIndex(3);
  const contactSelect = () => setIndex(4);

  const links = [
    { title: "Home", icon: "fas fa-home", select: homeSelect },
    { title: "About Me", icon: "fas fa-user", select: aboutMeSelect },
    {
      title: "Experience",
      icon: "fas fa-laptop-code",
      select: experienceSelect,
    },
    {
      title: "Porfolio",
      icon: "fas fa-code",
      select: portfolioSelect,
    },
    // {
    //   title: "Contact",
    //   icon: "fas fa-id-card-alt",
    //   select: contactSelect,
    // },
  ];

  const navLinks = () => (
    <>
      {links.map((link, index) => {
        return (
          <div
            key={index}
            onClick={link.select}
            className="d-flex flex-row justify-content-start sidebar-link"
          >
            <div className="m-1"></div>
            <div
              style={{ width: "2.5rem", fontSize: "1.2rem" }}
              className="text-center"
            >
              <i className={link.icon}></i>
            </div>
            <div className="text-uppercase p-1" style={{ fontSize: ".9rem" }}>
              {link.title}
            </div>
          </div>
        );
      })}
    </>
  );

  return (
    <div className="d-flex flex-row justify-content-start">
      <div className="sidebar">
        <div
          style={{
            height: "12rem",
            background: "gray",
            position: "relative",
            backgroundImage: `url(
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            )`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "gray",
            backgroundSize: "cover",
          }}
        >
          <div
            className="text-center text-light p-2"
            style={{
              background: "#0389BE",
              fontFamily: "bernard",
              position: "absolute",
              bottom: "0",
              width: "100%",
              opacity: "0.9",
              fontWeight: "600",
              fontSize: "1.35rem",
            }}
          >
            KAPIL VERMA
          </div>
        </div>
        {navLinks()}

        <div className="text-center">
          <i className="fab fa-git-alt social-link"></i>
          <a
            className="badge-base__link LI-simple-link"
            href="https://au.linkedin.com/in/kapilkverma?trk=profile-badge"
            target="_blank"
          >
            <i className="fab fa-linkedin social-link"></i>
          </a>

          <i
            className="fas fa-envelope social-link"
            onClick={contactSelect}
          ></i>
          <h6 className="text-center" style={{ color: "#0389BE" }}>
            (+61)-426227014
          </h6>
        </div>
      </div>
      <div style={{ background: "#2C2D2F", width: "100%" }}>
        <Carousel
          activeIndex={index}
          variant="dark"
          controls={false}
          indicators={false}
          className="carousel-body"
        >
          <Carousel.Item>
            <Home setIndex={setIndex} />
          </Carousel.Item>{" "}
          <Carousel.Item>
            <div className="navigation-bar">
              <Navigation setIndex={setIndex} />
            </div>
            <About title={"About Me."} icon={"fas fa-user"} />
          </Carousel.Item>
          <Carousel.Item>
            <div className="navigation-bar">
              <Navigation setIndex={setIndex} />
            </div>
            <Experience title={"My Resume."} icon={"fas fa-laptop-code"} />
          </Carousel.Item>
          <Carousel.Item>
            <div className="navigation-bar">
              <Navigation setIndex={setIndex} />
            </div>
            <Portfolio title={"Portfolio."} icon={"fas fa-code"} />
          </Carousel.Item>
          <Carousel.Item>
            <div className="navigation-bar">
              <Navigation setIndex={setIndex} />
            </div>
            <Contact title={"Contact Me."} icon={"fas fa-id-card-alt"} />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default App;
