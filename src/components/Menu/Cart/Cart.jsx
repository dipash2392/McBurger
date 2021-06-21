import React, { useEffect, useState } from "react";
import axios from "axios";
import CartItems from "../CartItems/CartItems";
import { useDispatch, useSelector } from "react-redux";


export default function Cart({data,price,quantity}) {
  const Dispatch = useDispatch()
  const myCart = useSelector((state) => state.myCartMenu)
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    console.log(myCart)
    // let data = axios
    //   .get(`https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7`)
    //   .then((res) => {
    //     console.log(res);
    //     setMenus(res.data.splice(0, 3));
    //   });

  }, []);
  return (
    <div>
      <h2>Cart</h2>
      <p>{quantity} ITEMS</p>
      <br />
      <CartItems data={data} price={price}/>
    </div>
  );
}
