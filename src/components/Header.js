import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >Personal Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
          </Nav>
          <Nav style={{color:"white"}}>
            <Nav.Link href="/" style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link href="Projects" style={{color:"white"}}>Projects</Nav.Link>
            <Nav.Link href="Skills" style={{color:"white"}}>Skills</Nav.Link>
            <Nav.Link href="Contact" style={{color:"white"}}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Header;
