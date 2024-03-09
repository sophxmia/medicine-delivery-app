import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const ShopNavigation = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Medicine Delivery App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#shop">Shop</Nav.Link>
          <Nav.Link href="#shopping-cart">Shopping Cart</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ShopNavigation;
