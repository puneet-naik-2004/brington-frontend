import React from "react";
import "../Style/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Title at very top */}
      <h2 className="footer-title">
        Be the First to Receive <br /> the Latest News
      </h2>

      {/* Signup Button */}
      <button className="signup-btn">Sign Up →</button>

      {/* Top Section */}
      <div className="footer-top">
        {/* Left Side - Brand */}
        <div className="footer-left">
          <div className="brand">
            <div className="logo-circle"></div>
            <span className="brand-name">Brington</span>
          </div>
        </div>

        {/* Right Side - Columns */}
        <div className="footer-right">
          <div className="footer-col">
            <h3>Navigation</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Social</h3>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Youtube</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact</h3>
            <ul>
              <li><a href="mailto:info@mysite.com">info@mysite.com</a></li>
              <li><a href="tel:1234567890">Tel. 123-456-7890</a></li>
              <li>India</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2035 by Brington Inc</p>
        <p>Built with love and caffeine ☕</p>
        <button className="chat-btn">Chat with AI</button>
      </div>
    </footer>
  );
}
