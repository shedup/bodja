import Link from "next/link";
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
                <Nav.Link className="litems" href="/">
                  Merch
                </Nav.Link>
                <Nav.Link className="litems" href="/team">
                  Team
                </Nav.Link>
                <Nav.Link className="litems" href="/about">
                  About
                </Nav.Link>
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