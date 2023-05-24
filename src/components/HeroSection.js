import banner from "../public/assets/woman image.png";
import ellipse from "../public/assets/Ellipse 39.png";
// import ellipse2 from "../public/assets/Ellipse 40.png";
import eth from "../public/svg/Union.svg";
// import image from "../public/assets/hero image (2).png";
// import image2 from "../public/assets/image 7.png";
// import pattern from "../public/assets/Vector.png";
// import pattern2 from "../public/assets/Vector (1).png";

import "./Style/HeroSection.css";
// import Card from "./UI/HeroCard";
import RatingBox from "./UI/RatingBox";
import InputFeild from "./UI/InputFeild";
import NavBar from "./UI/NavBar";
const HeroSection = () => {
  return (
    <>
      <div className="background">
        <NavBar />
        <img className="ellipse" src={ellipse} alt="" />
        {/* <img className="ellipse2" src={ellipse2} alt="" /> */}

        <div className="container">
          <div className="row" style={{ paddingTop: 50, paddingBottom: 50 }}>
            <div
              className="col-md-6"
              style={{
                alignSelf: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                className="hero-text"
                style={{
                  fontFamily: "Sora, sans-serif",
                }}
              >
                <h1>
                  Hire top freelancers in <br />
                  confidence using <img className="union" src={eth} alt="" />
                  <br /> <span>BlockChain </span>
                  technology
                </h1>
                <p>
                  Find great talent. Build your business.
                  <br /> Take your career to the next level. finance experts,
                  <br /> product managers, and project managers in the world.
                </p>
                <InputFeild />
              </div>
            </div>
            <div className="col-md-6" style={{ alignSelf: "center" }}>
              <div className="banner-image">
                <img src={banner} alt="women" />
              </div>
            </div>
          </div>
        </div>

        <RatingBox />

        {/* <div className="flex-container">
        <Card className="banner-image2" img={image} />
        <Card className="banner-image2" img={image2} />
      </div> */}
        {/* <Card className="banner-image3" img={image} /> */}
        {/* 
      <img className="vector" src={pattern} alt="women" />
      <img className="vector2" src={pattern2} alt="women" />
       */}
      </div>
    </>
  );
};

export default HeroSection;
