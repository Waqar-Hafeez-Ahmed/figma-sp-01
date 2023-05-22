import React from "react";

function CategoryCard(props) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: 10,
          cursor: "pointer  ",
        }}
      >
        <img src={props.src} alt="img" />
      </div>
      <p>{props.desc}</p>
    </div>
  );
}

export default CategoryCard;
