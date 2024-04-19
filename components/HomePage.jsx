import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";

import boook from "../assets/multi.png";
import journal from "../assets/thotjournal.png";

const HomePage = () => {
  return (
    <div style={{ fontFamily: "Comfortaa, sans-serif" }}>
      <Navbar />
      <Hero />
      <div
        style={{
          display: "flex",
          margin: "10px",
          marginTop: "18px",
        }}
      >
        <Card
          title="Book Categories"
          subtitle="Tailored Selections for Every Topic"
          image={boook}
        />
        <Card
          title=" Journaling Questions"
          subtitle="Reflective Queries for Personal Growth"
          image={journal}
        />
      </div>
    </div>
  );
};

export default HomePage;
