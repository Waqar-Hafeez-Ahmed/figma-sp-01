import React from "react";
import Button from "react-bootstrap/Button";

function CCard(props) {
  return (
    <div
      className="card text-center"
      style={{ marginBottom: 50, border: "none" }}
    >
      <div className="overflow">
        <img src={props.src} alt="cardss" className="card-img-top" />
      </div>
      <div>
        <Button
          variant="outline-dark"
          size="sm"
          style={{
            border: "1px solid #ECECEC",
            marginTop: 20,
            display: "flex",
            alignItems: "flex-start",
            borderRadius: 6,
            fontSize: 12,
            fontFamily: "Roboto",
            background: " #ECECEC",
            color: "#4F5054",
          }}
        >
          Data Guide
        </Button>
        <h2
          className="card-title"
          style={{
            fontFamily: "Sora",
            fontWeight: "700",
            fontSize: 22,
            textAlign: "left",
            paddingTop: 10,
          }}
        >
          {props.desc}
        </h2>

        <ul
          className="card-text text-secondary"
          style={{ textAlign: "left", fontSize: 12, display: "flex", gap: 30 }}
        >
          <li>July 20, 2022</li>
          <li>7 min read</li>
        </ul>
      </div>
    </div>
  );
}

export default CCard;
