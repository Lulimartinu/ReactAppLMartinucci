import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ButtonComponent from "../Button/ButtonComponent";
import CartWidget from "../CartWidget/CartWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faHeart } from "@fortawesome/free-solid-svg-icons";

function NavBarApp() {

  return (
    <Navbar expand="lg" className="navBack">
      <Container>
      <img src="https://i.imgur.com/NLkfUsC.png" alt="logo" id="logo"></img>
        <Navbar.Brand>Sweet <FontAwesomeIcon icon={faHeart} /> Stationery</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <ButtonComponent texto="Home" color="pink" />
            <ButtonComponent texto="Sobre Nosotros" color="pink" />
            <ButtonComponent texto="Contacto" color="pink" />

            <NavDropdown
              className="botonNav"
              title="Productos"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                Fibras&Marcadores
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Agendas2024
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Cuadernos&Cuadernolas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Ver catálogo</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarApp;
