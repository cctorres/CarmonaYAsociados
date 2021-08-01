import React from "react";
import { Carousel } from "react-bootstrap";
import MapView from "./MapView";
import HomeSocial from "./HomeSocial";
import "./Home.css";

const Home = () => {
  return (
    <div className="home text-center">
      <Carousel>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/58/c3/89/edifice-coltabaco.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="https://ofienlace.landingpage.com.co/img/slider/intro_slide_1.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
      <p>
        Nuestra empresa no es sólo una persona. Es un conjunto de seres humanos
        con ideales, sueños, deseos, ganas, profesionalismo, entrega y
        dispuestos a dar todo lo mejor de ellos en procura de cumplir nuestra
        visión corporativa.
      </p>
      <div className="social-container">
        <div className="map-container">
          <h3 className="title-h3">Encuentranos en Medellín</h3>
          <MapView />
        </div>
        <div className="Home-social-container">          
      <h3 className="title-h3">Estamos a solo un clic, síguenos en Facebook</h3>
          <HomeSocial />
        </div>
      </div>
    </div>
  );
};

export default Home;
