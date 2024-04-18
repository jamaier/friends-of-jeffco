import React from "react";
import config from "../../config/config.json";
import "./tableInfo.styles.css";

const ServiceOverviewSection = () => {
  return (
    <div className="service-overview">
      <h3>{config.districts.serviceOverview}</h3>
    </div>
  );
};

export default ServiceOverviewSection;
