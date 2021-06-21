import React from "react";
import vegImg from "../../../assets/Menu/veg.png";
import Buttons from "../IncrementDecrementButtons/Buttons";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

export default function CartItems({ data ,price}) {


  return (
    <>
      {data.map((menu) => (
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-1">
                <img src={vegImg} className="vegImage" />
              </div>

              <div className="col-4">
                <span>{menu.item_name}</span>
              </div>
              <div className="col-4">
                <Buttons quantity={menu.quantity}/>
              </div>
              <div className="col-3 text-right">
                <h6 className="">₹{menu.price}</h6>
              </div>
            </div>
          </div>
        </div>
      ))}
      <br />
      <br />
      <div className="row">
        <div className="col-9">
          <h4>Subtotal</h4>
          <p>Extra charges may apply</p>
        </div>
        <div className="col-3 text-right">
          <h5>₹{price}</h5>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-12">
          <button className="btn btn-warning w-100">View Cart<AddShoppingCartIcon /></button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <button className="btn btn-success w-100">Checkout <ArrowRightAltIcon /></button>
        </div>
      </div>
    </>
  );
}
