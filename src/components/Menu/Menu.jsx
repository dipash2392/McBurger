import React, { useEffect, useState } from "react";
import NavBar from "./NavBar/NavBar";
import MenuItems from "./MenuItems/MenuItems";
import axios from "axios";
import Cart from "./Cart/Cart"
import Loader from "../Utils/Loader/Loader"
import { useDispatch, useSelector } from "react-redux";

export default function Menu() {
  const Dispatch = useDispatch()
  const myCart = useSelector((state) => state.myCartMenu)
  const [menus, setMenus] = useState([]);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    let data = axios
      .get(`https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7`)
      .then((res) => {
        setLoading(false)
        setMenus(res.data);
      });
  }, []);


  const mycartFunction = (item) => {
    let myCartItem = [...cart]
    let index;
    let quantity = 0
    let price=0
    index = myCartItem.findIndex((e) => e.id === item.id);
    if (index === -1) {
      myCartItem.push(item);
    } else {
      myCartItem[index] = item;
    }

      for (let i = 0; i <myCartItem.length; i++) {
        price = myCartItem[i].quantity * myCartItem[i].price
        quantity = quantity + myCartItem[i].quantity
      }
      console.log(quantity, price)
    setPrice(price)
    setQuantity(quantity)
    setCart(myCartItem)
    Dispatch({
      type: "SET_MY_CART",
      payload: myCartItem
    })
    console.log(myCartItem)
  }
  return (
    <div>
      <Loader loading={loading} />
      <NavBar />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {menus.map((menu, index) => (
              <MenuItems key={index} data={menu} selectedMenu={mycartFunction} />
            ))}
          </div>
          <div className="col-md-4">
            <Cart data={cart} price={price} quantity={quantity}/>
          </div>
        </div>
      </div>
    </div>
  );
}
