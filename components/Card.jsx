import React from "react";
import "../css/Card.css";

const Card = ({ title, subtitle, image }) => {
  return (
    <div className="card">
      <div className="left">
        <img
          src={image}
          alt="catimg"
          style={{ height: "115px", width: "115px", marginLeft: "78px" }}
        ></img>
      </div>
      <div className="right">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
