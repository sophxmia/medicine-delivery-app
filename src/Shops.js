import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Navbar,
  Nav,
} from "react-bootstrap";

const Shops = () => {
  return (
    <Container>
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
      <div>
        <h2 className="mt-3">Choose a Drug store:</h2>
        <Row>
          <Col md={4}>
            <Button variant="outline-primary d-block mb-3">Shop 1</Button>
            <Button variant="outline-primary d-block mb-3">Shop 2</Button>
            <Button variant="outline-primary d-block mb-3">Shop 3</Button>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem" }} className="md-3">
              <Card.Img
                variant="top"
                src="https://www.kernpharma.com/sites/default/files/styles/product_full_715x/public/productos/imagenes/paracetamol-kern-pharma-efg-500-mg-20-compr-0_0.jpg?itok=ZVqNNZ_V"
              />
              <Card.Body>
                <Card.Title>Paracetamol</Card.Title>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} className="md-3">
              <Card.Img
                variant="top"
                src="https://www.kernpharma.com/sites/default/files/styles/product_full_715x/public/productos/imagenes/paracetamol-kern-pharma-efg-500-mg-20-compr-0_0.jpg?itok=ZVqNNZ_V"
              />
              <Card.Body>
                <Card.Title>Paracetamol</Card.Title>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card style={{ width: "18rem" }} className="md-3">
              <Card.Img
                variant="top"
                src="https://www.kernpharma.com/sites/default/files/styles/product_full_715x/public/productos/imagenes/paracetamol-kern-pharma-efg-500-mg-20-compr-0_0.jpg?itok=ZVqNNZ_V"
              />
              <Card.Body>
                <Card.Title>Paracetamol</Card.Title>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} className="md-3">
              <Card.Img
                variant="top"
                src="https://www.kernpharma.com/sites/default/files/styles/product_full_715x/public/productos/imagenes/paracetamol-kern-pharma-efg-500-mg-20-compr-0_0.jpg?itok=ZVqNNZ_V"
              />
              <Card.Body>
                <Card.Title>Paracetamol</Card.Title>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Shops;
