import { useStateContext } from "@/context/StateContext";
import { Cart } from "@/components";
import Link from "next/link";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineShoppingCart } from "react-icons/ai";

function CustomNavbar() {
  const { totalQuantities, showCart, setShowCart } = useStateContext();
  return (
    <>
      <Navbar className="navbarStyle" expand="lg">
        <Container>
          <Link className="bodjaTitle" href="/">
            Bodja
          </Link>
          <div className="navCollapse">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" style={{ marginLeft: "200px" }}>
                <Link className="litems" href="/">
                  Merch
                </Link>
                <Link className="litems" href="/team">
                  Team
                </Link>
                <Link className="litems" href="/about">
                  About
                </Link>
              </Nav>
            </Navbar.Collapse>
          </div>
          <button
            type="button"
            className="cart-icon"
            onClick={() => {
              setShowCart(true);
            }}
          >
            <AiOutlineShoppingCart />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>
          {showCart && <Cart />}
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
