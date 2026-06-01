import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaBriefcase,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Glow */}
      <div className="footer-glow"></div>

      <div className="container-custom">
        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <div className="footer-newsletter-content">
            <h2>Get Job Alerts Instantly</h2>
            <p>
              Stay updated with the latest opportunities from top companies.
            </p>
          </div>

          <form className="footer-newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
            />

            <button type="submit">
              Subscribe
              <FaArrowRight />
            </button>
          </form>
        </div>

        {/* Main Footer */}
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">
                <FaBriefcase />
              </div>

              <div>
                <h2>
                  Job<span>Portal</span>
                </h2>
              </div>
            </Link>

            <p className="footer-description">
              Discover thousands of opportunities from startups,
              global enterprises, and remote-first companies.
              Build your future career with confidence.
            </p>

            <div className="footer-socials">
              <a href="/">
                <FaFacebookF />
              </a>

              <a href="/">
                <FaTwitter />
              </a>

              <a href="/">
                <FaLinkedinIn />
              </a>

              <a href="/">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3>Quick Links</h3>

            <ul>
              <li>
                <Link to="/jobs">Browse Jobs</Link>
              </li>

              <li>
                <Link to="/about">About Us</Link>
              </li>

              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>

              <li>
                <Link to="/post-job">Post a Job</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-links">
            <h3>Resources</h3>

            <ul>
              <li>
                <a href="/">Career Advice</a>
              </li>

              <li>
                <a href="/">Resume Builder</a>
              </li>

              <li>
                <a href="/">Interview Guide</a>
              </li>

              <li>
                <a href="/">Salary Insights</a>
              </li>

              <li>
                <a href="/">Remote Jobs</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h3>Contact Us</h3>

            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <FaEnvelope />
              </div>

              <span>support@jobportal.com</span>
            </div>

            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <FaPhoneAlt />
              </div>

              <span>+91 98765 43210</span>
            </div>

            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <FaMapMarkerAlt />
              </div>

              <span>Hyderabad, India</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            © 2026 JobPortal. All Rights Reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="/">Privacy Policy</a>
            <a href="/">Terms & Conditions</a>
            <a href="/">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;