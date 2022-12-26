import React from "react";
import ReactTypingEffect from "react-typing-effect";

import "./home.css";

const Home = ({ setIndex }) => {
  const intro = () => (
    <div className="text-center text-light p-1 intro-container">
      <div className="intro-content">
        KAPIL&nbsp;
        <span style={{ color: "#0389BE" }}>VERMA</span>
      </div>

      <h3>
        I am a&nbsp;
        <ReactTypingEffect
          speed={100}
          eraseSpeed={50}
          typingDelay={100}
          text={["Full Stack Developer."]}
          cursorRenderer={(cursor) => <div>{cursor}</div>}
          displayTextRenderer={(text, i) => {
            return (
              <h3>
                {text.split("").map((char, i) => {
                  const key = `${i}`;
                  return (
                    <span
                      key={key}
                      style={{ borderBottom: "3px solid #0389BE" }}
                    >
                      {char}
                    </span>
                  );
                })}
              </h3>
            );
          }}
        />{" "}
      </h3>
    </div>
  );
  return (
    <>
      <div
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1595434971780-79d5c20c5090?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80")`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(3px)",
        }}
      >
        <div
          style={{
            height: "100vh",
            background: "black",
            opacity: ".3",
          }}
        />
      </div>
      {intro()}
      <div className="d-flex">
        <div className="start-arrow" onClick={() => setIndex(1)}>
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>
    </>
  );
};

export default Home;
