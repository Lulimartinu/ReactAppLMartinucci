import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ButtonComponent from "./ButtonComponent";
import CartWidget from "./CartWidget";

function NavBarApp() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>SweetStationery</Navbar.Brand>

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
              <NavDropdown.Item href="#action/3.4">Ver más</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarApp;
