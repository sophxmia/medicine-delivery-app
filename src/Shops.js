import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MedicineCards from "./MedicineCards";
import ShopButtons from "./ShopButton";
import ShopNavigation from "./ShopNavigation";

const Shops = () => {
  return (
    <Container>
      <ShopNavigation />
      <div>
        <h2 className="mt-3">Choose a Drug store:</h2>
        <Row>
          <Col md={4}>
            <ShopButtons data={"Shop 1"} />
            <ShopButtons data={"Shop 2"} />
            <ShopButtons data={"Shop 3"} />
          </Col>
          <Col md={4}>
            <MedicineCards data={"Paracetamol"} />
            <MedicineCards data={"Paracetamol"} />
            <MedicineCards data={"Paracetamol"} />
          </Col>
          <Col md={4}>
            <MedicineCards data={"Paracetamol"} />
            <MedicineCards data={"Paracetamol"} />
            <MedicineCards data={"Paracetamol"} />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Shops;
