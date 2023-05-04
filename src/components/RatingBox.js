import "./RatingBox.css";
import box from "../public/assets/Rectangle.png";
import star from "../public/svg/star.svg";
import btc from "../public/svg/bitcoin.svg";
import box2 from "../public/assets/Rectangle2.png";

const RatingBox = () => {
  return (
    <>
      <div className="ratings">
        <div>
          <img className="rectangle" src={box} alt="rectangle" />
        </div>
        <p className="text1">Project done</p>
        <p className="text2">55+</p>
        <img className="star" src={star} alt="star" />
        <p className="text3">4.9/5</p>
        <p className="text4">Total Earning</p>
        <img className="btc" src={btc} alt="btc" />
        <p className="text5">0.56</p>
      </div>
      <div className="name-tag">
        <img className="rectangle2" src={box2} alt="rectangle2" />
        <p className="text6">Leslie Alexandar</p>
        <p className="text7">Product Designer</p>
      </div>
    </>
  );
};

export default RatingBox;
