import React from "react";
import "../css/Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/user/register", {
        username,
        email,
        password,
      })
      .then(res => {
        if (res.data.registered) {
          navigate("/login");
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="main">
      <form className="form">
        <p className="title">Sign Up </p>
        <p className="message">Sign up To Get User Access!</p>

        <label>
          <input
            className="input"
            type="text"
            placeholder=""
            onChange={e => setUsername(e.target.value)}
            required
          />
          <span>username</span>
        </label>
        <label>
          <input
            className="input"
            type="email"
            placeholder=""
            onChange={e => setEmail(e.target.value)}
            required
          />
          <span>Email</span>
        </label>
        <label>
          <input
            className="input"
            type="password"
            placeholder=""
            onChange={e => setPassword(e.target.value)}
            required
          />
          <span>Password</span>
        </label>
        <button className="submit" onClick={handleSubmit}>
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Register;
