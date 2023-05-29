import React, { Component } from "react";
import Slider from "react-slick";
import SliderCard from "./SliderCard";
import ImgCard1 from "../../public/assets/CCimage1.png";
import ImgCard2 from "../../public/assets/CCimage2.png";
import ImgCard3 from "../../public/assets/CCimage3.png";
import ImgCard4 from "../../public/assets/CCimage4.png";

export default class SliderSec extends Component {
  render() {
    var settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div
        className="container-fluid justify-content-around"
        style={{ color: "white" }}
      >
        <div className="row ">
          <Slider {...settings}>
            <div className="col pe-md-2">
              <SliderCard src={ImgCard1} />
            </div>
            <div className="col pe-md-2">
              <SliderCard src={ImgCard2} />
            </div>
            <div className="col pe-md-2">
              <SliderCard src={ImgCard3} />
            </div>
            <div className="col pe-md-2">
              <SliderCard src={ImgCard4} />
            </div>
            <div className="col pe-md-2">
              <SliderCard src={ImgCard1} />
            </div>
            <div className="col pe-md-2">
              {/* column padding https://www.codeply.com/p/Mvf9kSXNxH */}
              <SliderCard src={ImgCard2} />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
// export default SliderSec;

// slick - https://github.com/akiran/react-slick
