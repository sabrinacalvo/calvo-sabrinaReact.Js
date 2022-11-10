import logo from "../../logo/logo.png";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBootstrap from "react-bootstrap/Navbar";

function Navbar() {
  return (
    <NavbarBootstrap bg="dark" expand="lg" sticky="top">
      <Container>
        <NavbarBootstrap.Toggle aria-controls="basic-Navbar-nav" className="order-lg-1"/>
          <NavbarBootstrap.Brand className="order-lg-0">
            <Link to={`/`}>
              <img src={logo} alt="Logo" width="200" height="70" className="d-inline-block align-text-top"></img>
            </Link>
          </NavbarBootstrap.Brand>
          <CartWidget/>
          <NavbarBootstrap.Collapse id="basic-Navbar-nav nabvarMenu" >
            <Nav className="me-auto text-center">
              <Link to={`/category/1`} className="linksNavbar">Funko Pop</Link>
              <Link to={`/category/2`} className="linksNavbar">Remeras</Link>
              <Link to={`/category/3`} className="linksNavbar">Tazas</Link>
              <Link to={`/category/4`} className="linksNavbar">Cd Book</Link>
            </Nav>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  );
};

export default Navbar;