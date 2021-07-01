import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Perfiles.css";

const Perfiles = () => {
  const megumi =
    "https://www.otakulegion.com/wp-content/uploads/2021/04/5c3768388305bf480f93b7511027ac3b-1024x1024.jpg";

  return (
    <div classNameName="perfiles">
      <Container>
        <Row>
          <Col>
            <img className="img-card" src={megumi} />
          </Col>
          <Col>
            Jujutsu KaisenJujutsu KaisenJujutsu KaisenJujutsu KaisenJujutsu
            KaisenJujutsu KaisenJujutsu KaisenJujutsu KaisenJujutsu
            KaisenJujutsu KaisenJujutsu KaisenJujutsu KaisenJujutsu
            KaisenJujutsu KaisenJujutsu KaisenJujutsu KaisenJujutsu
            KaisenJujutsu KaisenJujutsu KaisenJujutsu KaisenJujutsu
            KaisenJujutsu KaisenJujutsu KaisenJujutsu KaisenJujutsu
            KaisenJujutsu KaisenJujutsu KaisenJujutsu KaisenJujutsu
            KaisenJujutsu KaisenJujutsu KaisenJujutsu KaisenJujutsu
            KaisenJujutsu KaisenJujutsu KaisenJujutsu KaisenJujutsu
            KaisenJujutsu KaisenJujutsu KaisenJujutsu KaisenJujutsu
            KaisenJujutsu KaisenJujutsu Kaisen
          </Col>
        </Row>
        <Row>
          <Col>
            Jujutsu KaisenJujutsu KaisenJujutsu KaisenJujutsu KaisenJujutsu
            KaisenJujutsu KaisenJujutsu KaisenJujutsu KaisenJujutsu
            KaisenJujutsu KaisenJujutsu KaisenJujutsu KaisenJujutsu
            KaisenJujutsu KaisenJujutsu KaisenJujutsu KaisenJujutsu
            KaisenJujutsu KaisenJujutsu KaisenJujutsu KaisenJujutsu
            KaisenJujutsu KaisenJujutsu KaisenJujutsu KaisenJujutsu
            KaisenJujutsu KaisenJujutsu KaisenJujutsu KaisenJujutsu
            KaisenJujutsu KaisenJujutsu KaisenJujutsu KaisenJujutsu
            KaisenJujutsu KaisenJujutsu KaisenJujutsu KaisenJujutsu
            KaisenJujutsu KaisenJujutsu KaisenJujutsu KaisenJujutsu
            KaisenJujutsu KaisenJujutsu Kaisen
          </Col>
          <Col>
            <img className="img-card" src={megumi} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Perfiles;
