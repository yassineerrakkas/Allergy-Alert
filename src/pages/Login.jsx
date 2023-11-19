import React from "react";
import "../css/Login.css";
import { NavLink } from "react-router-dom";

export const Login = () => {
  return (
    <div className="login-container">
      <div className="form-box">
        <div className="form-value">
          <form className="form-ac" action="">
            <h2 className="form-title">Login</h2>
            <div className="inputbox">
              <input placeholder="email" type="email" required />
            </div>
            <div className="inputbox">
              <input placeholder="password" type="password" required />
            </div>
            <div className="forget">
              <NavLink to="/"> Forget Password ?</NavLink>
            </div>
            <NavLink to="/">
              <button className="button">Login</button>
            </NavLink>
            <div className="register">
              <p>
                Don't have an account?{" "}
                <NavLink to="/create-account">CREATE ACCOUNT</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};