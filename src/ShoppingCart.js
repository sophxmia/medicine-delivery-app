import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ShopNavigation from "./ShopNavigation";

const ShoppingCart = () => {
  return (
    <Container>
      <ShopNavigation />
      <div>
        <Row>
          <Col md={6}></Col>
          <Col md={6}></Col>
        </Row>
      </div>
      <Button variant="outline-dark d-block mb-3" type="submit">
        Submit{" "}
      </Button>
    </Container>
  );
};

export default ShoppingCart;
