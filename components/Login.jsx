import React, { useState } from "react";
import "../css/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = () => {
    setLoading(true);
    axios
      .post("http://localhost:3000/auth/login", {
        username,
        password,
        role,
      })
      .then(res => {
        if (res.data.login && res.data.role === "admin") {
          navigate("/dashboard");
        } else if (res.data.login && res.data.role === "user") {
          navigate("/homePage"); // Assuming "/home" is the route for the HomePage component
        }
      })
      .catch(err => console.log(err))
      .finally(() => {
        setLoading(false); // Set loading back to false
      });
  };
  return (
    <div className="main">
      <div className="form">
        <p className="title">
          Login to
          <h1 style={{ fontSize: "28px", color: "white" }}>
            <b style={{ color: "#7678E1" }}>&nbsp;Read</b>Right
          </h1>
        </p>
        <p className="message">Login For Full Access Of Our App! </p>

        <label>
          <input
            className="input"
            type="username"
            placeholder=""
            required
            onChange={e => setUsername(e.target.value)}
          />
          <span>Username</span>
        </label>
        <label>
          <input
            className="input"
            type="password"
            placeholder=""
            required
            onChange={e => setPassword(e.target.value)}
          />
          <span>Password</span>
        </label>

        <select
          value={role}
          className="form-group"
          name="role"
          id="role"
          onChange={e => setRole(e.target.value)}
        >
          <option value="student">User</option>
          <option value="admin"> SuperAdmin</option>
        </select>

        <button className="submit" onClick={handleSubmit}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
}

export default Login;
