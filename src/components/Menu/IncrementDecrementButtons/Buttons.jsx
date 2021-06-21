import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import "./buttons.css";

export default function Buttons({ cartMenu, selectedMenu,quantity }) {
  const [counter, setCounter] = useState(0);

  const handleIncrement = async () => {
    setCounter(counter + 1);
    await _processData(counter + 1);
  };

  const handleDecrement = async () => {
    setCounter(counter - 1);
    await _processData(counter - 1);
  };

  const _processData = (quantity) => {
    cartMenu.quantity = quantity;
    selectedMenu(cartMenu)
  };

  return (
    <ButtonGroup size="small" aria-label="small outlined button group">
      <Button className="plus" onClick={handleIncrement}>
        +
      </Button>
      <Button className="countText" disabled>
        {counter||quantity || 0}
      </Button>
      <Button
        className="minus"
        onClick={handleDecrement}
        disabled={counter === 0 ? true : false}
      >
        -
      </Button>
    </ButtonGroup>
  );
}
