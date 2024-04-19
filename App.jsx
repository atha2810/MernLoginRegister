import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Route
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/homePage" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
