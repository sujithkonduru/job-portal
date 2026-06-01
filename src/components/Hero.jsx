import React from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background Shapes */}
      <div className="hero-shape hero-shape-1"></div>
      <div className="hero-shape hero-shape-2"></div>
      <div className="hero-shape hero-shape-3"></div>

      <div className="container-custom hero-container">
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge">
            <FaBriefcase />
            <span>Trusted by 500+ Companies Worldwide</span>
          </div>

          {/* Heading */}
          <h1 className="hero-title">
            Find Your
            <span> Dream Job </span>
            Today
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Discover thousands of opportunities from top companies and
            take the next step in your career journey with confidence.
          </p>

          {/* Search Box */}
          <div className="hero-search-box">
            <div className="hero-search-grid">
              {/* Job Search */}
              <div className="hero-input-group">
                <FaSearch className="hero-input-icon" />

                <div className="hero-input-wrapper">
                  <label>Job Title</label>

                  <input
                    type="text"
                    placeholder="Frontend Developer"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="hero-input-group">
                <FaMapMarkerAlt className="hero-input-icon" />

                <div className="hero-input-wrapper">
                  <label>Location</label>

                  <input
                    type="text"
                    placeholder="Bangalore, India"
                  />
                </div>
              </div>

              {/* Button */}
              <button className="hero-search-btn">
                Search Jobs
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="hero-stat-card">
              <h3>10K+</h3>
              <p>Active Jobs</p>
            </div>

            <div className="hero-stat-card">
              <h3>500+</h3>
              <p>Companies</p>
            </div>

            <div className="hero-stat-card">
              <h3>50K+</h3>
              <p>Happy Candidates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;