import React from "react";
import "../css/Footer.css";
import { ReactComponent as Twitter } from "../Images/twitter.svg";
import { ReactComponent as Instagram } from "../Images/instagram.svg";
import { ReactComponent as Github } from "../Images/github.svg";
import { ReactComponent as Linkedin } from "../Images/linkedin-in.svg";

export const Footer = () => {
  return (
    <footer id="footer">
      <div id="inner-container">
        <div className="footer-column">
          <h3>About Us</h3>
          <p className="footer-text">Learn more about our mission and team.</p>
          <a
            href="/about-us"
            style={{ textDecoration: "none", color: "#555555" }}
          >
            About Us Page
          </a>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <div className="quick-links-container">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="about-us">About us</a>
              </li>
              <li>
                <a href="contact-us">Contact us</a>
              </li>
              <li>
                <a href="/">Terms of Service</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">CA Notice at Collection</a>
              </li>
              <li>
                <a href="/">Cookie Settings</a>
              </li>
              <li>
                <a href="/">Accessibility</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-column">
          <h3>Connect With Us</h3>
          <p className="footer-text">Follow us on social media for updates.</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/" target="_blank">
              <Instagram className="contact-icon" />
            </a>

            <a href="https://twitter.com/" target="_blank">
              <Twitter className="contact-icon" />
            </a>

            <a href="https://www.linkedin.com/" target="_blank">
              <Linkedin className="contact-icon" />
            </a>

            <a
              href="https://github.com/yassineerrakkas/allergy_alert_fe"
              target="_blank"
            >
              <Github className="contact-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright-container">
        <p className="footer-text">
          © 2023 Allergy Alert. All rights reserved.
        </p>
      </div>
    </footer>
  );
};