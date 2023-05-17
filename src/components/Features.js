import React from "react";
import Img1 from "../public/svg/daimond icon.svg";
import Img2 from "../public/svg/USDC icon.svg";
import Img3 from "../public/svg/users icon.svg";
import Img4 from "../public/svg/opportunities icon.svg";

function Features() {
  const arr = [
    {
      img: Img1,
      heading: "World-Class Talent",
      description:
        "Find great talent. Build your business. Finance experts, product managers, and project managers in the world.",
    },
    {
      img: Img2,
      heading: "Get paid in USDC instantly",
      description:
        "Once offer is accepted, founds will be locked in an escrow account until completion. ",
    },
    {
      img: Img3,
      heading: "Confidence back into Decentralised work space",
      description:
        "Find freelance in confidence using our ratings and review system. ",
    },
    {
      img: Img4,
      heading: "Stake your Jobless Tokens to open more opportunities",
      description:
        "Staking your Jobless tokens will allow you to apply to jobs hours before your competitors does. ",
    },
  ];

  return (
    <div className="container">
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#292A33",
          marginTop: -250,
          marginBottom: 20,
          color: "white",
          border: "1px solid #35363D",
          borderRadius: 20,
          paddingTop: 30,
          paddingBottom: 15,
          paddingLeft: 0,
        }}
      >
        {arr.map((data) => (
          <div className="col-5" style={{ padding: 30, paddingRight: 40 }}>
            <img src={data.img} alt="" style={{ paddingBottom: 10 }} />
            <h1 style={{ fontSize: 30 }}>{data.heading}</h1>
            <p
              style={{
                color: "rgba(209, 209, 210, 1)",
                opacity: 0.8,
                paddingBottom: 20,
              }}
            >
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
