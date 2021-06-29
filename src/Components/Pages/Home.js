import React from "react";
import { Carousel } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  const title = "Carmona & Asociados";

  return (
    <div className="home text-center">
      <h1>{title}</h1>
      <Carousel fade>
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
      <hr class="solid" />
      <div className="home-text text-center"></div>
      <p>
        Nuestra empresa no es sólo una persona. Es un conjunto de seres humanos
        con ideales, sueños, deseos, ganas, profesionalismo, entrega y
        dispuestos a dar todo lo mejor de ellos en procura de cumplir nuestra
        visión corporativa.
      </p>
    </div>
  );
};

export default Home;
