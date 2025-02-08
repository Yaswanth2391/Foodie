import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginStatus } from "../App";
import './AdminLogin.css'; // Import the CSS file

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Login, setLogin] = useContext(loginStatus);
  const navigate = useNavigate();

  const loginCheck = (e) => {
    e.preventDefault();
    if (username === "Yaswanth" && password === "12345") {
      setLogin(true);
      navigate("/dashboardaabbccdd");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 p-5 shadow">
          <form onSubmit={loginCheck}>
            <h3>Admin Login</h3>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;