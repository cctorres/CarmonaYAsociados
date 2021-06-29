import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import {Button} from 'react-bootstrap';


const Footer = () => {

    const goToFBPage = () => {
        window.location.replace("https://www.facebook.com/carmonaos.asociados")
    }

    const WPPMessage = () => {
        window.location.replace("https://wa.me/573105299124?text=Hola!%20me%20interesa%20sus%20servicios")
    }

    const copyright = "© - Carmona & Asociados - 2021"
    return (
        <div>
            <p>Visitanos en <Button variant="link" onClick={goToFBPage}><FacebookIcon/></Button> o escribenos a nuestro <Button variant="link" onClick={WPPMessage}><WhatsAppIcon style={{ color: 'green' }}/></Button></p>
            <p>{copyright}</p>
        </div>
    )
}

export default Footer
