import React from "react";
import "./Footer.css";

const Footer = () => {
  const copyright = "© - Carmona & Asociados - 2021";
  
  return (
    <div className="footer-container">
      <p>{copyright}</p>
    </div>
  );
};

export default Footer;
