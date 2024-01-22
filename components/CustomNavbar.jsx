import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineShoppingCart } from "react-icons/ai";

function CustomNavbar() {
  return (
    <>
      <Navbar className="navbarStyle" expand="lg">
        <Container>
          <Navbar.Brand className="bodjaTitle" href="/">
            Bodja
          </Navbar.Brand>
          <div className="navCollapse">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" style={{ marginLeft: "200px" }}>
                <a className="litems" href="/">
                  Merch
                </a>
                <a className="litems" href="#">
                  Team
                </a>
                <a className="litems" href="#">
                  About
                </a>
              </Nav>
            </Navbar.Collapse>
          </div>
          <button type="button" className="cart-icon">
            <AiOutlineShoppingCart />
            <span className="cart-item-qty">93</span>
          </button>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
