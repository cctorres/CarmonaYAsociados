import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Button } from "react-bootstrap";
import "./ContactHeader.css";

const ContactHeader = () => {
  const telefonos = "(+57) 300 426 7177 - (034) 463 9873 ";
  const goToFBPage = () => {
    window.location.replace("https://www.facebook.com/carmonaos.asociados");
  };

  const WPPMessage = () => {
    window.location.replace(
      "https://wa.me/573004267177?text=Hola!%20me%20interesa%20sus%20servicios"
    );
  };

  return (
    <div className="header-container">
      <div className="buttons-header-container">
        <div className="social-media-header-container">
          Visitanos en
          <Button variant="link" onClick={goToFBPage}>
            <FacebookIcon style={{ color: "white" }}/>
          </Button>
          o escribenos a nuestro
          <Button variant="link" onClick={WPPMessage}>
            <WhatsAppIcon style={{ color: "white" }} />
          </Button>
        </div>
        <div className="contact-header-container">
          <div className="phone-container">
            <PhoneAndroidIcon /> {telefonos}
          </div>
          <div className="mail-container">
            <MailOutlineIcon /> carmona-asociados@outlook.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
