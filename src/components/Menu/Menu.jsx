import React, { useEffect, useState } from "react";
import NavBar from "./NavBar/NavBar";
import MenuItems from "./MenuItems/MenuItems";
import axios from "axios";
import Cart from "./Cart/Cart" 

export default function Menu() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    let data = axios
      .get(`https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7`)
      .then((res) => {
        console.log(res);
        setMenus(res.data);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {menus.map((menu) => (
              <MenuItems data={menu} />
            ))}
          </div>
          <div className="col-md-4">
           <Cart/>
          </div>
        </div>
      </div>
    </div>
  );
}
