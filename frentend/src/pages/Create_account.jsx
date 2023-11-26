import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/Login.css";

export const Create_account = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          password,
        }),
      });

      if (response.ok) {
        navigate(`/select_allergies/${email}`);
      } else {
        const data = await response.json();
        console.error("Failed to register user:", data.message);

        if (data.message === "Email already exists") {
          setError(
            "This email is already registered. Please use a different email."
          );
        } else {
          setError("Registration failed. Please try again.");
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setError("Email already exists.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="form-box">
        <div className="form-value">
          <form action="" className="form-ac">
            <h2 className="form-title">Create your Account</h2>
            <div className="inputbox">
              <input
                placeholder="Full Name"
                type="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="inputbox">
              <input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="inputbox">
              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              className="button"
              onClick={handleRegistration}
              disabled={loading}
            >
              {loading ? "Loading..." : "Continue"}
            </button>
            {error && <p className="error-message">{error}</p>}
            <div className="register">
              <p>
                Already Have an account? <NavLink to="/login">Login</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
