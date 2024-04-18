import React from "react";
import config from "../config/config.json";

const Footer = () => {
  return (
    <div className="footer">
      <h5>{config.footer.body}</h5>
      <a href={config.footer.link} target="_blank" rel="noopener noreferrer">{config.footer.linkText}</a>
      <h6>{config.footer.copyright}</h6>
    </div>
  );
};

export default Footer;
