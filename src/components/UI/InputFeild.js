import React from "react";
import { useState } from "react";
import "../Style/InputFeild.css";
import search from "../../public/svg/search icon.svg";

export default function InputFeild() {
  const [val, setVal] = useState("Search Talent / Project / Job");
  const changeHandler = (event) => {
    setVal(event.target.value);
  };
  const clickHandler = (event) => {
    setVal("");
  };
  const click = () => {
    alert(val);
  };
  return (
    <div className="container-fluid input-main justify-content-around">
      <div className="row">
        <div className="col px-md-0">
          <div className="input"></div>
          <img
            className="search"
            src={search}
            alt="search"
            style={{ position: "absolute", paddingTop: 15, paddingLeft: 20 }}
          />
          <input
            onChange={changeHandler}
            onClick={clickHandler}
            className="input2"
            type="text"
            value={val}
          />
        </div>
        <div className="col">
          <button className="hero-btn" onClick={click}>
            Hire Talent
          </button>
        </div>
      </div>
    </div>
  );
}
