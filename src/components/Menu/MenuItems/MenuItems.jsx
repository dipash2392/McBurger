import React, { useState } from "react";
import vegImg from "../../../assets/Menu/veg.png";
import "./menuItems.css";
import menuImg from "../../../assets/Menu/Tikki.png";
import Buttons from "../IncrementDecrementButtons/Buttons";

export default function MenuItems({ data }) {
 

  
  return (
    <div className="row">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div>
              <img src={vegImg} className="vegImage" alt="vegetarian" />
            </div>

            <h3>{data.item_name}</h3>

            <span>₹ {data.price}</span>
            <p className="aboutText">
              The perfect, taste bud tingling partner for our World Famous
              Fries. Shake Shake, and dive in!
            </p>
          </div>
          <div className="col-4 text-center">
            <img src={menuImg} className="menuImg mt-3" alt={data.item_name} />
           
            <Buttons cartMenu={data} />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
