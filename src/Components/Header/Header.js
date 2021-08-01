import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import ContactHeader from "./ContactHeader";
import {Link} from 'react-router-dom';
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand as={Link} to="/">
            <img
              className="brand"
              src="images/logo-text.jpg"
              alt="Carmona Y Asociados"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/nosotros">Conócenos</Nav.Link>
              <Nav.Link as={Link} to="/servicios">Nuestros servicios</Nav.Link>
              <Nav.Link as={Link} to="/perfiles">Perfiles profesionales</Nav.Link>
              <Nav.Link as={Link} to="/contacto">Contáctanos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <ContactHeader />
      </div>
    );
  }
}
