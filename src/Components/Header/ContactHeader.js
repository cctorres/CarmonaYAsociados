import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Button } from "react-bootstrap";
import './ContactHeader.css';

const ContactHeader = () => {
  const goToFBPage = () => {
    window.location.replace("https://www.facebook.com/carmonaos.asociados");
  };

  const WPPMessage = () => {
    window.location.replace(
      "https://wa.me/573105299124?text=Hola!%20me%20interesa%20sus%20servicios"
    );
  };

  return (
    <div className="contact-header">
      <p className="buttons">
        <Button variant="link" onClick={goToFBPage}>
          <FacebookIcon />
        </Button>
        <Button variant="link" onClick={WPPMessage}>
          <WhatsAppIcon style={{ color: "green" }} />
        </Button>
        
        <PhoneAndroidIcon/> +57 310 529 9124
        <MailOutlineIcon/> c.torresalzate@gmail.com
      </p>
      <p className="contact-text">
      </p>
    </div>
  );
};

export default ContactHeader;
