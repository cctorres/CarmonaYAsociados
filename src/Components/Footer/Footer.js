import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Button } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  const copyright = "© - NERV Corporation - 2021";

  const goToFBPage = () => {
    window.location.replace("https://es-la.facebook.com/EvangelionMovie");
  };

  const WPPMessage = () => {
    window.location.replace(
      "https://wa.me/573105299124?text=Hola!%20me%20interesa%20sus%20servicios"
    );
  };
  return (
    <div className="footer-container">
      <div className="buttons-footer-container">
        <div className="social-media-footer-container">
          Visitanos en:
          <Button variant="link" onClick={goToFBPage}>
            <FacebookIcon />
          </Button>
          o escribenos a nuestro:
          <Button variant="link" onClick={WPPMessage}>
            <WhatsAppIcon style={{ color: "green" }} />
          </Button>
        </div>
        <div className="contact-footer-container">
          <PhoneAndroidIcon /> +57 310 529 9124
          <MailOutlineIcon /> c.torresalzate@gmail.com
        </div>
      </div>
      <p>{copyright}</p>
    </div>
  );
};

export default Footer;
