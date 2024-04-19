import React from "react";
import "../css/Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <h1
          style={{
            fontSize: "28px",
            color: "#FFB829 ",
            transform: "scale(1.03)",
          }}
        >
          <b style={{ color: "#7678E1" }}>&nbsp;Read</b>
          Right
        </h1>

        <div className="user-info">
          <div className="abtus">About us</div>
          <div className="logout">Logout</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
