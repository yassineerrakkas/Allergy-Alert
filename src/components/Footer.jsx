import React from "react";
import "../css/Footer.css";

export const Footer = () => {
  return (
    <footer id="footer">
      <div id="inner-container">
        <p className="footer-text">
          © 2023 Allergy Alert. All rights reserved.
        </p>
        <p className="footer-text">Contact us at: contact@allergyalert.com</p>
        <p className="footer-text">Follow us on social media: @allergy_alert</p>
      </div>
    </footer>
  );
};
