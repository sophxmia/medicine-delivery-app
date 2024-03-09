import React from "react";
import { Button } from "react-bootstrap";

const ShopButtons = (props) => {
  return <Button variant="outline-primary d-block mb-3">{props.data}</Button>;
};

export default ShopButtons;
