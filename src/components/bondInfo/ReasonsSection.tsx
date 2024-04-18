import React from "react";
import config from "../../config/config.json";
import "./bondInfo.styles.css";

const ReasonsSection = () => {
  return (
    <div className="info-section">
      <h1>{config.reasons.title}</h1>
      <ul className="info-list">
        <li>{config.reasons.items[0]}</li>
        <li>{config.reasons.items[1]}</li>
        <li>{config.reasons.items[2]}</li>
        <li>{config.reasons.items[3]}</li>
        <li>{config.reasons.items[4]}</li>
      </ul>
    </div>
  );
};

export default ReasonsSection;
