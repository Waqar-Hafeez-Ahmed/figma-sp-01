import React from "react";
import { Button } from "react-bootstrap";
import Img1 from "../public/assets/illustration image.png";

function JoinUs() {
  return (
    <div
      className="row"
      style={{
        background: "#F4F4F4",
        padding: 70,
        paddingLeft: 0,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="col-6" style={{ alignSelf: "center", paddingLeft: 40 }}>
        <h1
          style={{
            fontFamily: "Sora",
            fontSize: 56,
            fontWeight: 700,
            color: "#18181F",
            maxWidth: 599,
            paddingTop: 30,
          }}
        >
          Grow your Business & your Career
        </h1>
        <p
          style={{
            color: "#4F5054",
            opacity: 0.8,
            fontSize: 18,
            maxWidth: 659,
            paddingTop: 20,
            fontWeight: 500,
          }}
        >
          Find great talent. Build your business. Take your career to the next
          level. finance experts, product managers, and project managers in the
          world. Check any pro’s work samples, client reviews.
        </p>
        <div className="row" style={{ paddingTop: 10, maxWidth: "90%" }}>
          <div className="col-6" style={{ alignSelf: "center" }}>
            <h3
              style={{ fontWeight: 700, color: "#18181F", paddingBottom: 10 }}
            >
              Hire top talent
            </h3>
            <p
              style={{
                color: "#4F5054",
                opacity: 0.8,
                paddingBottom: 10,
                fontWeight: 500,
              }}
            >
              Find great talent. Build your business. Finance experts, product
              managers, and project managers in the world.
            </p>
            <Button
              variant="outline-success"
              style={{
                fontFamily: "Roboto",
                height: 53,
                width: 138,
                marginBottom: 70,
                border: "1px solid #4F5054",
                // background: "#fffff",
                alignItems: "center",
                color: "#18181F",
                backgroundColor: "#ffff",
                fontWeight: 700,
              }}
            >
              Hire Talent
              <i
                class="fa fa-angle-right"
                style={{
                  fontSize: 20,
                  position: "absolute",
                  marginTop: 1.4,
                  paddingLeft: 5,
                }}
              ></i>
            </Button>
          </div>
          <div className="col-6" style={{ alignSelf: "center" }}>
            <h3
              style={{ fontWeight: 700, color: "#18181F", paddingBottom: 10 }}
            >
              Join as a Freelancers
            </h3>
            <p
              style={{
                color: "#4F5054",
                opacity: 0.8,
                paddingBottom: 10,
                fontWeight: 500,
              }}
            >
              Find great talent. Build your business. Finance experts, product
              managers, and project managers in the world.
            </p>
            <Button
              variant="outline-success"
              style={{
                fontFamily: "Roboto",
                height: 53,
                // width: 200,
                paddingRight: 20,
                marginBottom: 70,
                border: "1px solid #4F5054",
                alignItems: "center",
                color: "#18181F",
                backgroundColor: "#ffff",
                fontWeight: 700,
              }}
            >
              Join as a Freelancers
              <i
                class="fa fa-angle-right"
                style={{
                  fontSize: 20,
                  position: "absolute",
                  marginTop: 1.4,
                  paddingLeft: 5,
                }}
              ></i>
            </Button>
          </div>
        </div>
      </div>
      <div className="col-5">
        <img src={Img1} alt="" />
      </div>
    </div>
  );
}

export default JoinUs;
