import React from "react";
import config from "../../config/config.json";
import "./Hero.styles.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-title">
        <p className="hero-text">{config.whoWeAre.title}</p>
      </div>
      <div className="hero-body">
        <p className="hero-subtext">{config.whoWeAre.body}</p>
      </div>
    </div>
  );
};

export default Hero;
