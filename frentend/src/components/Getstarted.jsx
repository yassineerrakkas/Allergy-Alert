import React from "react";
import { NavLink } from "react-router-dom";

export const Getstarted = () => {
  return (
    <>
      <p className="paragraph">
        Embark on your journey to safe and confident dining with{" "}
        <strong>AllergyAlert</strong>. Whether you have allergies or dietary
        restrictions, our platform is your trusted companion in making informed
        food choices. Simply sign up, tell us about your allergies, and start
        scanning barcodes or uploading images of food labels. We'll instantly
        analyze the ingredients and provide you with personalized safety
        assessments.
      </p>
      <div className="btns">
        <div className="get-started-btn">
          <NavLink to="/create-account"> GET STARTED</NavLink>
        </div>
        <div className="about-us-btn">
          <NavLink to="about-us">About Us</NavLink>{" "}
        </div>
      </div>
    </>
  );
};
