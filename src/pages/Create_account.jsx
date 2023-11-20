import React from "react";
import "../css/Login.css";
import { NavLink } from "react-router-dom";

export const Create_account = () => {
  return (
    <div className="login-container">
      <div className="form-box">
        <div className="form-value">
          <form action="" className="form-ac">
            <h2 className="form-title">Create your Account</h2>
            <div className="inputbox">
              <input placeholder="Full Name" type="name" required />
            </div>
            <div className="inputbox">
              <input placeholder="Email" type="email" required />
            </div>
            <div className="inputbox">
              <input placeholder="Password" type="password" required />
            </div>
            {/* Use NavLink for the "Continue" button */}
            <NavLink to="/select_allergies">
              <button className="button">Continue</button>
            </NavLink>
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
