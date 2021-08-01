import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <div className="servicios">
        <img
          src="https://cdn.pixabay.com/photo/2015/02/01/18/27/hammer-620011_960_720.jpg"
          alt="servicios"
          className="servicios-img"
        />
        <div className="services-text">
          {" "}
          <p>
            Nuestra empresa no es sólo una persona. Es un conjunto de seres
            humanos con ideales, sueños, deseos, ganas, profesionalismo, entrega
            y dispuestos a dar todo lo mejor de ellos en procura de cumplir
            nuestra visión corporativa.
          </p>
        </div>
      </div>
      <div className="juridico">
        <div className="juridico-img">
          <h1 className="img-filter">Divisiones jurídicas</h1>
        </div>
        <div className="juridico-img-text">
          <div>
            <p>- Derecho penal</p>
            <p>- Derecho civil</p>
            <p>- Derecho administrativo</p>
            <p>- Derecho de familia</p>
          </div>
          <div>
            <p>- Regimen especial de las fuerzas públicas</p>
            <p>- Accidentes de tránsito</p>
            <p>- Responsabilidad civil</p>
          </div>
        </div>
      </div>
      <div className="investigacion">
        <div className="investigacion-img-text">
          <div>
            <p>- Dactiloscopia</p>
            <p>- Topografía judicial</p>
            <p>- Balística</p>
            <p>- Fotografía</p>
          </div>
          <div>
            <p>- Documentología</p>
            <p>- Química forense</p>
            <p>- Reconstucción en accientes de tránsito</p>
          </div>
        </div>
        <div className="investigacion-img">
          <h1 className="img-filter">Investigación judicial</h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
