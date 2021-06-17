import React from "react";
import StarIcon from "@material-ui/icons/Star";
import InputBox from "../../InputBox/InputBox";
import "./navBar.css";
export default function Navbar() {
  return (
    <div className="container-fluid navbarBackground p-2">
        <div className="container">
      <div className={`row `}>
        <h2>McDonald's</h2>
      </div>
      <div className="row">
        <StarIcon />
        <p>4.3 | 35 mins | ₹ 400 for two</p>
      </div>
      <div className="row">
        <InputBox />
      </div>
      </div>
    </div>
  );
}
