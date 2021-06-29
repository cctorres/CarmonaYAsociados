import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Perfiles.css";

const Perfiles = () => {
  return (
    <div className="perfiles">
      <Container>
        <Row>
          <Col><img className="card-img" src="https://www.otakulegion.com/wp-content/uploads/2021/04/5c3768388305bf480f93b7511027ac3b-1024x1024.jpg"></img></Col>
          <Col><h1>Megumi</h1><p>Personaje de Jujutsu Kaisen</p></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Perfiles;
