import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import JobCard from "../components/JobCard";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import {
  FaChartLine,
  FaShieldAlt,
  FaHeadset,
  FaArrowRight,
  FaBriefcase,
  FaUsers,
  FaBuilding,
} from "react-icons/fa";
import "./Home.css";

const Home = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const mockJobs = [
        {
          id: 1,
          title: "Senior Frontend Developer",
          company: "Tech Corp",
          location: "New York, NY",
          salary: "$120k - $150k",
          type: "Full-Time",
          description:
            "We are looking for an experienced frontend developer with React expertise to join our dynamic team...",
          skills: ["React", "TypeScript", "TailwindCSS"],
          postedDate: new Date().toISOString(),
        },
        {
          id: 2,
          title: "Backend Engineer",
          company: "Innovate Inc",
          location: "San Francisco, CA",
          salary: "$130k - $160k",
          type: "Full-Time",
          description:
            "Seeking a backend engineer to build scalable APIs and microservices...",
          skills: ["Node.js", "Python", "PostgreSQL"],
          postedDate: new Date(
            Date.now() - 2 * 24 * 60 * 60 * 1000
          ).toISOString(),
        },
        {
          id: 3,
          title: "UI/UX Designer",
          company: "Creative Studio",
          location: "Remote",
          salary: "$90k - $110k",
          type: "Remote",
          description:
            "Join our design team to create beautiful and intuitive user experiences...",
          skills: ["Figma", "Adobe XD", "User Research"],
          postedDate: new Date(
            Date.now() - 5 * 24 * 60 * 60 * 1000
          ).toISOString(),
        },
      ];

      setFeaturedJobs(mockJobs);
      setLoading(false);
    }, 1000);
  }, []);

  const features = [
    {
      icon: <FaChartLine />,
      title: "Career Growth",
      description:
        "Access thousands of jobs from top companies and grow your career.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Verified Companies",
      description:
        "Every employer is verified for trusted and legitimate opportunities.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      description:
        "Our support team is always available to help job seekers and recruiters.",
    },
  ];

  const stats = [
    {
      icon: <FaBriefcase />,
      value: "25K+",
      label: "Jobs Posted",
    },
    {
      icon: <FaUsers />,
      value: "18K+",
      label: "Active Candidates",
    },
    {
      icon: <FaBuilding />,
      value: "5K+",
      label: "Companies",
    },
  ];

  return (
    <div className="home-page">
      <Hero />

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container-custom stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-icon">{stat.icon}</div>
              <h2>{stat.value}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container-custom">
          <div className="section-header">
            <span className="section-badge">Why Choose Us</span>

            <h2>Find Your Dream Job Faster</h2>

            <p>
              Connect with top companies, explore thousands of opportunities,
              and take your career to the next level.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">{feature.icon}</div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="featured-jobs-section">
        <div className="container-custom">
          <div className="jobs-header">
            <div>
              <span className="section-badge">Latest Openings</span>

              <h2>Featured Jobs</h2>

              <p>Explore the latest high-paying opportunities</p>
            </div>

            <Link to="/jobs" className="view-all-btn">
              View All Jobs <FaArrowRight />
            </Link>
          </div>

          {loading ? (
            <Loader />
          ) : (
            <div className="jobs-grid">
              {featuredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container-custom">
          <div className="cta-card">
            <h2>Ready to Start Your Career Journey?</h2>

            <p>
              Create your profile today and get discovered by top recruiters.
            </p>

            <div className="cta-buttons">
              <Link to="/jobs" className="primary-btn">
                Explore Jobs
              </Link>

              <Link to="/register" className="secondary-btn">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;