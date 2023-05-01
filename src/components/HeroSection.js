import logo from "../public/svg/logo image.svg";
import banner from "../public/assets/woman image.png";
import ellipse from "../public/assets/Ellipse 39.png";
import ellipse2 from "../public/assets/Ellipse 40.png";
import eth from "../public/svg/Union.svg";

import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="background">
      <img className="ellipse" src={ellipse} alt="" />
      <img className="ellipse2" src={ellipse2} alt="" />

      <div className="hero-background">
        <img className="logo" src={logo} alt="logo" />
        <div></div>
        <div className="herosection">
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
          <img className="banner-image" src={banner} alt="women" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
