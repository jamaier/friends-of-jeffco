import React from "react";
import config from "../../config/config.json";
import "./useOfFunds.styles.css";

const UseOfFundsSection = () => {
  return (
    <div className="funds-container">
      <h1>{config.useOfFunds.title}</h1>
      <div className="Bond-provisions">
        <div className="bp-left">
          <h4>{config.useOfFunds.provisions[0].category}</h4>
          <p>{config.useOfFunds.provisions[0].items[0]}</p>
          <p>{config.useOfFunds.provisions[0].items[1]}</p>
          <p>{config.useOfFunds.provisions[0].items[2]}</p>
          <p>{config.useOfFunds.provisions[0].items[3]}</p>
        </div>
        <div className="bp-center">
          <h4>{config.useOfFunds.provisions[1].category}</h4>
          <p>{config.useOfFunds.provisions[1].items[0]}</p>
          <p>{config.useOfFunds.provisions[1].items[1]}</p>
          <p>{config.useOfFunds.provisions[1].items[2]}</p>
          <p>{config.useOfFunds.provisions[1].items[3]}</p>
          <p>{config.useOfFunds.provisions[1].items[4]}</p>
        </div>
        <div className="bp-right">
          <h4>{config.useOfFunds.provisions[2].category}</h4>
          <p>{config.useOfFunds.provisions[2].items[0]}</p>
          <p>{config.useOfFunds.provisions[2].items[1]}</p>
          <p>{config.useOfFunds.provisions[2].items[2]}</p>
          <p>{config.useOfFunds.provisions[2].items[3]}</p>
        </div>
      </div>
    </div>
  );
};

export default UseOfFundsSection;
