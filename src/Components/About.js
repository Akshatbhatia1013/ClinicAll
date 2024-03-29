import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="top">
        <h1>
          About Clinic<span>ALL</span>
        </h1>
      </div>
      <div className="bottom">
        <div className="left">
          <dotlottie-player
            src="https://lottie.host/de9679bc-3e26-4f57-828c-28080ddcc840/uMsbYz6XAM.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>

        <div className="right">
          <p>
            At ClinicALL, we understand the challenges individuals face when
            seeking treatment options for various health conditions. That's why
            we're dedicated to connecting patients with cutting-edge drug
            trials, offering hope and opportunities for healing while
            contributing to the advancement of medical science.
          </p>
          <p>
            Our platform serves as a bridge between patients and pharmaceutical
            researchers, providing a seamless experience for those seeking
            innovative treatment options.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
