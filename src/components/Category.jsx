import React from "react";
import Img1 from "../public/svg/Development & IT.svg";
import Img2 from "../public/svg/Design & Creative.svg";
import Img3 from "../public/svg/Digital Marketing.svg";
import Img4 from "../public/svg/Group (2).svg";
import Img5 from "../public/svg/Group (3).svg";
import Img6 from "../public/svg/Group (4).svg";
import Img7 from "../public/svg/XMLID_324_.svg";
import Img8 from "../public/svg/Architecture.svg";
import Img9 from "../public/svg/Music & Audio.svg";
import CategoryCard from "./CategoryCard";

function Category() {
  return (
    <div className="container" style={{ color: "white" }}>
      <h2 style={{ paddingBottom: 30, paddingTop: 100 }}>
        Get work done in different category
      </h2>
      <hr />
      <div
        className="row"
        style={{
          textAlign: "center",
          alignItems: "center",
          paddingTop: 50,
          display: "flex",
          flexDirection: "row",
          gap: 20,
          paddingBottom: 50,
          paddingLeft: 50,
          margin: "auto",
        }}
      >
        <div className="col-2">
          <CategoryCard src={Img1} desc={"Development and It"} />
        </div>
        <div className="col-2">
          <CategoryCard src={Img2} desc={"Design and Creative"} />
        </div>
        <div className="col-2">
          <CategoryCard src={Img3} desc={"Digital Marketing"} />
        </div>
        <div className="col-2">
          <CategoryCard src={Img4} desc={"Writing and Translation"} />
        </div>
        <div className="col-2">
          <CategoryCard src={Img5} desc={"Programming and Tech"} />
        </div>
        <div className="col-2">
          <CategoryCard src={Img6} desc={"Finance and Accounting"} />
        </div>
        <div className="col-2">
          <CategoryCard src={Img7} desc={"Video and Annimation"} />
        </div>
        <div className="col-2">
          <CategoryCard src={Img8} desc={"Architecture"} />
        </div>
        <div className="col-2">
          <CategoryCard src={Img9} desc={"Music and Audio"} />
        </div>
      </div>
    </div>
  );
}

export default Category;
