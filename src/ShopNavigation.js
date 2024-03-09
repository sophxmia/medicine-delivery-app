import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const ShopNavigation = () => {
  return (
    <Navbar className="fixed-top ps-5" bg="light-subtle" expand="lg">
      <Navbar.Brand href="#home">Medicine Delivery App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="./Shops.js">Shop</Nav.Link>
          <Nav.Link href="./ShopingCart.js">Shopping Cart</Nav.Link>
          <Nav.Link href="#history" className="disabled">
            History
          </Nav.Link>
          <Nav.Link href="#coupons" className="disabled">
            Coupons
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ShopNavigation;
