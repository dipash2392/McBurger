import React, { useEffect, useState } from "react";
import axios from "axios";
import CartItems from "../CartItems/CartItems";

export default function Cart() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    let data = axios
      .get(`https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7`)
      .then((res) => {
        console.log(res);
        setMenus(res.data.splice(0, 3));
      });
  }, []);
  return (
    <div>
      <h2>Cart</h2>
      <p>2 ITEMS</p>
      <br />
      <CartItems data={menus} />
    </div>
  );
}
