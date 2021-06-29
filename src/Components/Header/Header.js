import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Header.css"

export default class Header extends Component {
  
  render() {
    return (
      <div className="header">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/perfiles">Perfiles</Nav.Link>
              <Nav.Link href="/logros">Logros</Nav.Link>
              <Nav.Link href="/contact">Contacto</Nav.Link>              
            </Nav>            
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
