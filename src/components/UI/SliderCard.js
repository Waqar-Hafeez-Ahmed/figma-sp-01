import React from "react";

function SliderCard(props) {
  return (
    <div
      className="card text-center"
      style={{ marginTop: 50, marginBottom: 50, borderRadius: 16 }}
    >
      <div className="overflow">
        <img src={props.src} alt="cardss" className="card-img-top" />
      </div>
      <div className="card-body">
        <h4 className="card-title">Title</h4>
        <p className="card-text text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          ipsam nobis consequatur odit ipsa culpa debitis tempore nemo vitae
          quae.
        </p>
        <a href="/" className="btn btn-outline-success">
          View Profiless
        </a>
      </div>
    </div>
  );
}

export default SliderCard;
