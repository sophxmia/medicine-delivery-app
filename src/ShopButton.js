import React from "react";
import { Button } from "react-bootstrap";

const ShopButtons = (props) => {
  return (
    <Button variant="outline-dark btn-lg" className="d-block mx-auto mb-3">
      {props.data}
    </Button>
  );
};

export default ShopButtons;
