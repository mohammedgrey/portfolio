import React from "react";
import "./Home.css";
import { useSpring, animated } from "react-spring";
import useWindowDimensions from "./CustomHooks/useWindowDimensions";

const Home = () => {
  const { height, width } = useWindowDimensions();
  console.log(height, width);
  const mainProps = useSpring({
    to: { opacity: 1, marginLeft: 0 },
    from: { opacity: 0, marginLeft: width > 700 ? 500 : 0 },
    config: { duration: 1000 },
  });
  return (
    <animated.div style={mainProps}>
      <div className="Home">
        <div className="main-block">
          <div
            className="upper-block"
            style={{
              backgroundImage: `url(${require("./images/background.jpg")})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundPositionY: "bottom",
            }}
          >
            <div className="home-info">
              <p>Hello, I am</p>
              <h1>Mohammed Saad</h1>
              <p>A Software Engineer </p>
              <p>Web and app developer</p>
            </div>
            <div className="frame-container">
              <img className="image-frame" src={require("./images/frame.png")} alt="hello"></img>
              <img className="image-me" src={require("./images/me.png")} alt="hello"></img>
            </div>
          </div>
          <div className="lower-block">
            <div className="left-block"></div>
            <div className="right-block">
              <div className="recent-frameworks">
                <p className="up-left">Here are some of the</p>
                <h1>Recent Frameworks</h1>
                <p className="down-right">I've worked with</p>
              </div>

              <div>
                <div className="technology">
                  <p>ReactJS</p>
                  <i className="fab fa-react"></i>
                </div>
                <div className="technology">
                  <p>NodeJS</p>
                  <i className="fab fa-node-js"></i>
                </div>
                <div className="technology">
                  <p>React Native</p>
                  <i className="fab fa-react"></i>
                </div>
                <div className="technology">
                  <p>Flutter</p>
                  <i className="fas fa-mobile-alt"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default Home;
