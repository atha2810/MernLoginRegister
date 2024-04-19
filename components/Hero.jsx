import React from "react";
import "../css/Hero.css";
import greetGirl from "../assets/greetgirl.png";
import boook from "../assets/bookcat.png";

function Hero() {
  return (
    <div>
      <div className="hero-container">
        <div className="greeting-section">
          <h1 style={{ fontWeight: "1000" }}>
            Explore <br />
            Beyond{" "}
            <b className="curved-underline" style={{ color: "#FFB829" }}>
              Books
            </b>
            <br /> Discover{" "}
            <b className="curved-underline" style={{ color: "#FFB829" }}>
              Yourself
            </b>
          </h1>
          <p>Unlock Your Peak Potential</p>
        </div>
        <div className="greetImg">
          <img
            src={greetGirl}
            alt="greetimg"
            style={{ height: "300px", width: "300px", marginLeft: "78px" }}
          ></img>
        </div>
        <div className="insight-section">
          <h2>Unlock Your Reading Potential</h2>
          <p>Find Your Next Favorite Genre</p>
          <div className="discover" style={{ display: "flex" }}>
            <div className="discoverbtn">
              <button
                className="discover-button"
                style={{
                  cursor: "pointer",
                  marginTop: "50px",
                }}
              >
                Discover Books
              </button>
            </div>
            <div className="discoverimg">
              {/* <img
                src={boook}
                alt=""
                style={{
                  height: "80px",
                  width: "80px",
                  marginLeft: "30px",
                  marginTop: "20px",
                }}
              ></img> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
