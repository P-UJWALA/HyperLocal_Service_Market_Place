import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}
        <div className="footer-column">

          <h2 className="footer-logo">
            🏠 HomeFix
          </h2>

          <p>
            Connecting customers with trusted
            home service professionals for
            quality, reliable and affordable
            solutions.
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTwitter /></a>
          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact</a>

        </div>

        {/* Services */}

        <div className="footer-column">

          <h3>Services</h3>

          <a href="#">Plumbing</a>
          <a href="#">Electrician</a>
          <a href="#">Cleaning</a>
          <a href="#">Painting</a>
          <a href="#">Carpenter</a>
          <a href="#">AC Repair</a>

        </div>

        {/* Contact */}

        <div className="footer-column">

          <h3>Contact</h3>

          <p>
            <FaMapMarkerAlt /> Hyderabad, India
          </p>

          <p>
            <FaEnvelope /> support@homefix.com
          </p>

          <p>
            <FaPhoneAlt /> +91 98765 43210
          </p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 HomeFix. All Rights Reserved.
        </p>

        <div className="footer-policy">

          <a href="#">Privacy Policy</a>

          <a href="#">Terms & Conditions</a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;