import React from "react";
import { useState } from "react";
import "./InputFeild.css";
import search from "../public/svg/search icon.svg";

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
    <div>
      <div className="input"></div>
      <img className="search" src={search} alt="search" />
      <input
        onChange={changeHandler}
        onClick={clickHandler}
        className="input2"
        type="text"
        value={val}
      />
      <button className="hero-btn" onClick={click}>
        Hire Talent
      </button>
    </div>
  );
}
