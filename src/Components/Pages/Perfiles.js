import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Perfiles.css";

const Perfiles = () => {
  return (
    <div classNameName="perfiles">
      <h1 className="text-center">En nuestra empresa contamos con distintos profesionales de acuerdo a los perfiles y labores de nuestra profesión</h1>
      <Container>
        <Row className="bg-perfiles">
          <Col className="img-left">
            <img
              className="img-card"
              alt=""
              src="https://www.tonica.la/__export/1620853539620/sites/debate/img/2021/05/12/5-curiosidades-que-no-sabias-de-satoru-gojo.jpg_423682103.jpg"
            />
          </Col>
          <Col className="right-text">
            <p>Satoru Gojo</p>
            <p>
              Es uno de los personajes de la serie manga Tokyo Metropolitan
              Curse Technical School y uno de los protagonistas de la serie
              secuela, Jujutsu Kaisen. Conocido con el apodo de El Chamán Más
              Fuerte, es uno de los cuatro chamanes de Clase Especial, antiguo
              compañero de Suguru Geto y Shoko Ieiri, y actual profesor del
              Colegio Técnico de Magia Metropolitana de Tokio, encargado de los
              alumnos de primer año.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="left-text">
            <p>Yuji Itadori</p>
            <p>
              Es el protagonista de la serie manga Jujutsu Kaisen. Es un
              estudiante de primer año del Colegio Técnico de Magia
              Metropolitana de Tokio y recipiente del Rey de las Maldiciones,
              Sukuna.
            </p>
            <Row></Row>
          </Col>
          <Col>
            <img
              className="img-card"
              alt=""
              src="data:image/jpeg;base64,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"
            />
          </Col>
        </Row>
        <Row className="bg-perfiles">
          <Col>
            <img
              className="img-card"
              alt=""
              src="https://www.otakulegion.com/wp-content/uploads/2021/04/5c3768388305bf480f93b7511027ac3b-1024x1024.jpg"
            />
          </Col>
          <Col className="right-text">
            <p>Megumi Fushiguro</p>
            <p>
              Es uno de los protagonistas de la serie manga Jujutsu Kaisen. Es
              un estudiante de primer año del Colegio Técnico de Magia
              Metropolitana de Tokio, y compañero de Yuji Itadori y Nobara
              Kugisaki.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="left-text">
            <p>Nobara Kugisaki</p>
            <p>
              Es una de las protagonistas de la serie manga Jujutsu Kaisen. Es
              una estudiante de primer año del Colegio Técnico de Magia
              Metropolitana de Tokio, y compañera de Yuji Itadori y Megumi
              Fushiguro.
            </p>
          </Col>
          <Col>
            <img
              className="img-card"
              alt=""
              src="https://www.geekmi.news/__export/1620062482856/sites/debate/img/2021/05/03/noba2.jpg_1196508637.jpg"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Perfiles;
