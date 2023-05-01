import logo from "../public/svg/logo image.svg";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="background">
      <div className="herosection">
        <img src={logo} alt="logo" />
        <div className="hero-text">
          <h2>
            Hire freelancers in confidence with <span>BlockChain </span>
            technology
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
