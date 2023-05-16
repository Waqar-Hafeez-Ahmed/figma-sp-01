import banner from "../public/assets/woman image.png";
import ellipse from "../public/assets/Ellipse 39.png";
// import ellipse2 from "../public/assets/Ellipse 40.png";
import eth from "../public/svg/Union.svg";
import image from "../public/assets/hero image (2).png";
import image2 from "../public/assets/image 7.png";
import pattern from "../public/assets/Vector.png";
import pattern2 from "../public/assets/Vector (1).png";

import "./HeroSection.css";
import Card from "./Card";
import RatingBox from "./RatingBox";
import InputFeild from "./InputFeild";
import NavBar from "./NavBar";
const HeroSection = () => {
  return (
    <>
      <div className="background">
        <NavBar />
        <img className="ellipse" src={ellipse} alt="" />
        {/* <img className="ellipse2" src={ellipse2} alt="" /> */}
        <div className="hero-text">
          <h2>
            Hire top freelancers in <br />
            confidence using <img className="union" src={eth} alt="" />
            <br /> <span>BlockChain </span>
            technology
          </h2>
          <p>
            Find great talent. Build your business.
            <br /> Take your career to the next level. finance experts,
            <br /> product managers, and project managers in the world.
          </p>
        </div>
      </div>

      <div className="banner-image">
        <img src={banner} alt="women" />
      </div>
      <RatingBox />

      <div className="flex-container">
        <Card className="banner-image2" img={image} />
        <Card className="banner-image2" img={image2} />
      </div>
      {/* <Card className="banner-image3" img={image} /> */}

      <img className="vector" src={pattern} alt="women" />
      <img className="vector2" src={pattern2} alt="women" />
      <InputFeild />
    </>
  );
};

export default HeroSection;
