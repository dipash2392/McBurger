import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import "./buttons.css";

export default function Buttons({ cartMenu }) {
  const [counter, setCounter] = useState(0);
  const [cart, setCart] = useState([]);

  const handleIncrement = async () => {
    setCounter(counter + 1);
    await _processData(counter + 1);
  };

  const handleDecrement = async () => {
    setCounter(counter - 1);
    await _processData(counter - 1);
  };

  const _processData = (quantity) => {
    let index;

    index = cart.findIndex((e) => e.id === cartMenu.id);

    if (index === -1) {
      cartMenu.quantity = quantity;
      cart.push(cartMenu);
      setCart(cart);
      console.log(cart);
      return;
    } else {
      cartMenu.quantity = quantity;
      cart[index] = cartMenu;
      setCart(cart);
      console.log(cart);
      return;
    }

    // if (cart.length === 0) {
    //   let menus = [];
    //   cartMenu.quantity = quantity;
    //   menus.push(cartMenu);
    //   setCart(menus);
    //   console.log(menus);
    //   return;
    // } else if (cart.length > 0) {
    //     let menus = [...cart];
    //     var result = cart.filter(function (c) {
    //         return  c.id===cartMenu.id// return the ones with equal id

    //     });
    //     cartMenu.quantity = quantity;
    //     menus.push(cartMenu);
    //     setCart(menus);
    //     console.log(menus)
    // }
  };
  return (
    <ButtonGroup size="small" aria-label="small outlined button group">
      <Button className="plus" onClick={handleIncrement}>
        +
      </Button>
      <Button className="countText" disabled>
        {counter}
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
