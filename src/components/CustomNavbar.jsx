import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./CustomNavbar.css";

function CustomNavbar() {
  return (
    <>
      <Navbar className="navbarStyle" expand="lg">
        <Container>
          <Navbar.Brand className="bodjaTitle" href="#">
            Bodja
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"  />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ marginLeft: "200px"}}>
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
}

export default CustomNavbar;
