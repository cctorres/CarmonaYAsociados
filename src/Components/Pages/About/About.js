import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="nosotros">
        <img
          src="https://cdn.pixabay.com/photo/2017/06/09/22/56/lady-justice-2388500_960_720.jpg"
          alt="nosotros"
          className="nosotros-img"
        />
        <div className="about-text">
          {" "}
          <p>
            Nuestra empresa no es sólo una persona. Es un conjunto de seres
            humanos con ideales, sueños, deseos, ganas, profesionalismo, entrega
            y dispuestos a dar todo lo mejor de ellos en procura de cumplir
            nuestra visión corporativa.
          </p>
        </div>
      </div>
      <div className="mision">
        <div className="mision-img">
          <h1 className="img-filter">Nuestra misión</h1>
        </div>
        <div className="mision-img-text">
          <p>
            Nuestra empresa no es sólo una persona. Es un conjunto de seres
            humanos con ideales, sueños, deseos, ganas, profesionalismo, entrega
            y dispuestos a dar todo lo mejor de ellos en procura de cumplir
            nuestra visión corporativa.
          </p>
        </div>
      </div>
      <div className="vision">
        <div className="vision-img-text">
          <p>
            Nuestra empresa no es sólo una persona. Es un conjunto de seres
            humanos con ideales, sueños, deseos, ganas, profesionalismo, entrega
            y dispuestos a dar todo lo mejor de ellos en procura de cumplir
            nuestra visión corporativa.
          </p>
        </div>
        <div className="vision-img">
          <h1 className="img-filter">Nuestra visión</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
