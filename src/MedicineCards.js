import React from "react";
import { Card, Button } from "react-bootstrap";

const MedicineCards = (props) => {
  return (
    <Card style={{ width: "18rem" }} className="md-3">
      <Card.Img
        variant="top"
        src="https://www.kernpharma.com/sites/default/files/styles/product_full_715x/public/productos/imagenes/paracetamol-kern-pharma-efg-500-mg-20-compr-0_0.jpg?itok=ZVqNNZ_V"
      />
      <Card.Body>
        <Card.Title>{props.data}</Card.Title>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default MedicineCards;
