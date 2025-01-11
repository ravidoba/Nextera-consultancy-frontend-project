// Footer.jsx
import React from 'react';
import './Footer.css';  // Import the custom CSS file

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="intro-section">
          <h2 className="footer-heading">Lets Create remarkable results</h2>
          <p className="footer-description">Unlock your projects potential with our technology expertise</p>
          <button className="cta-button">Start A Project</button>
        </div>

<div className="tile">
<h3 className="footer-subheading">EffiWork</h3>
</div>
        <div className="footer-grid">
          {/* Company Info */}
          <div className="company-info">
            <div>
              <div className="address-info">
                <p className="address-location">Groton, USA</p>
                <div className="line_footer" />
                <p>360, Route 12,</p>
                <p>Groton, CT 06340</p>
                <p>Email: <a href="mailto:effiwork@gmail.com" className="footer-link">effiwork@gmail.com</a></p>
              </div>
            </div>
            <div className="address-info">
              <p className="address-location">Surat, India</p>
              <div className="line_footer" />
              <p>3002, Silver Business Point,</p>
              <p>Uttran, Surat, GJ 394105</p>
              <p>Email: <a href="mailto:effiwork@gmail.com" className="footer-link">effiwork@gmail.com</a></p>
            </div>
          </div>

          {/* Services Links */}
          <div className="footer-links">
            <ul>
              <li><a href="#" className="footer-link">Digital Product Design</a></li>
              <li><a href="#" className="footer-link">Mobile Development</a></li>
              <li><a href="#" className="footer-link">Web Development</a></li>
              <li><a href="#" className="footer-link">Backend Development</a></li>
              <li><a href="#" className="footer-link">AI Development</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer-links">
            <ul>
              <li><a href="#" className="footer-link">Portfolio</a></li>
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Contact Us</a></li>
              <li><a href="#" className="footer-link">Terms and Conditions</a></li>
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
