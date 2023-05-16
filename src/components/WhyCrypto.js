import { Button } from "bootstrap";
import React from "react";

function WhyCrypto() {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-6"
          style={{
            background: "#292A33",
            color: "white",
            border: "1px solid #35363D",
            borderRadius: 20,
            paddingTop: 60,
            paddingLeft: 40,
            marginBottom: 20,
          }}
        >
          <h1
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff96a, #90ffca, #00ffd1)",
              webkitBackgroundClip: "text" /* clip the gradient to the text */,
              webkitTextFillColor:
                "transparent" /* make the text transparent */,
              fontSize: 30,
              fontWeight: 700,
              width: 330,
            }}
          >
            Why businesses turn to We are Jobless?
          </h1>
          <p
            style={{
              color: "rgba(209, 209, 210, 1)",
              opacity: 0.8,
              paddingBottom: 5,
              width: 440,
              marginTop: 15,
            }}
          >
            Find great talent. Build your business. Finance experts, product
            managers, and pro ject managers in the world.Find great talent.
            Build your business.
          </p>
          <ul
            style={{
              display: "flex",
              paddingLeft: 0,
              paddingRight: 10,
              maxWidth: 440,
              color: "#00DF9A",
              opacity: 0.8,
            }}
          >
            <div className="col-6">
              <li>
                <span style={{ color: " #D1D1D2" }}>Ratings & Reviews</span>
              </li>
              <li>
                <span style={{ color: " #D1D1D2" }}>Escrow System </span>
              </li>
            </div>
            <div className="col-6">
              <li>
                <span style={{ color: " #D1D1D2" }}>Dispute Management</span>
              </li>
              <li>
                <span style={{ color: " #D1D1D2" }}>Booking Management </span>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WhyCrypto;
