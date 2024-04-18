import React from "react";
import config from "../../config/config.json";
import "./bondInfo.styles.css";

const BondDetailsSection = () => {
  return (
    <div className="info-section">
      <h1>{config.about.title}</h1>
      <ul className="info-list">
        <li>{config.about.items[0]}</li>
        <li>{config.about.items[1]}</li>
        <li>{config.about.items[2]}</li>
        <li>{config.about.items[3]}</li>
      </ul>
      <div className="info-subsection">
        <h4>{config.about.lastBond}</h4>
      </div>
    </div>
  );
};

export default BondDetailsSection;
