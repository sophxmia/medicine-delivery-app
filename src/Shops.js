import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MedicineCards from "./MedicineCards";
import ShopButtons from "./ShopButton";
import ShopNavigation from "./ShopNavigation";

const Shops = () => {
  const generateShopData = () => {
    const shops = [];
    for (let i = 1; i <= 6; i++) {
      shops.push(`Shop ${i}`);
    }
    return shops;
  };

  const renderShopButtons = () => {
    const shops = generateShopData();
    return shops.map((shop, index) => <ShopButtons key={index} data={shop} />);
  };

  return (
    <Container>
      <ShopNavigation />
      <div>
        <Row className="mt-3">
          <Col md={4} className="pt-3">
            <p>
              <b>Choose a Drug store:</b>
            </p>
            {renderShopButtons()}
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
