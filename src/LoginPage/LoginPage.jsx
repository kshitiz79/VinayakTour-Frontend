import React, { useState } from "react";
import "./LoginPage.css";
import cross_icon from "../images/cross_icon.png";

function LoginPage({ setShowLogin }) {
  const [currState, setCurrState] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // Only for Sign Up

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = currState === "Sign Up" ? "/api/auth/signup" : "/api/auth/login";
    const payload = {
      email,
      password,
      ...(currState === "Sign Up" && { name }), // Include `name` only for Sign Up
    };

    try {
      const response = await fetch(`http://localhost:4000${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      alert(currState === "Sign Up" ? "Account created successfully!" : "Logged in successfully!");
      setShowLogin(false);
    } catch (error) {
      console.error("Error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={cross_icon}
            alt="Close"
            className="close-icon"
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            By continuing, I agree to the <a href="#">terms of use</a> &{" "}
            <a href="#">privacy policy</a>.
          </p>
        </div>
        <div className="login-click-button">
          {currState === "Login" ? (
            <p>
              Create a new account?{" "}
              <button
                type="button"
                onClick={() => setCurrState("Sign Up")}
                className="toggle-link"
              >
                Click here
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setCurrState("Login")}
                className="toggle-link"
              >
                Login here
              </button>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
