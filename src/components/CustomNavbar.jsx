import React from "react";
import spotify from "../assets/spotifyLogo.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const CustomNavbar = () => {
  return (
    <>
      <Navbar className="navbarStyle" expand="lg">
        <Container>
          <Navbar.Brand className="bodjaTitle" href="#">
            Bodja
          </Navbar.Brand>
          <Nav.Link className="spotify" href="#">
            <img src={spotify} width="70px" />
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="litems" href="#">
                Merch
              </Nav.Link>
              <Nav.Link className="litems" href="#">
                Team
              </Nav.Link>
              <Nav.Link className="litems" href="#">
                About
              </Nav.Link>
              <Nav.Link className="litems" href="#">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
