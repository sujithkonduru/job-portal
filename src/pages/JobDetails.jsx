import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Loader from "../components/Loader";

import {
  FaMapMarkerAlt,
  FaClock,
  FaDollarSign,
  FaBuilding,
  FaShareAlt,
  FaBookmark,
  FaBriefcase,
  FaGraduationCap,
  FaUsers,
  FaGlobe,
  FaCalendarAlt,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import toast from "react-hot-toast";
import "./JobDetails.css";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);
  const [applying, setApplying] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const mockJob = {
        id: parseInt(id),

        title: "Senior Frontend Developer",

        company: "Tech Corp",

        location: "New York, NY",

        salary: "$120k - $150k",

        type: "Full-Time",

        experience: "5+ Years",

        description: `We are looking for an experienced Frontend Developer to join our growing team. You will be responsible for building and maintaining modern web applications while collaborating with designers and backend engineers.

Responsibilities:
• Build reusable React components
• Optimize applications for maximum performance
• Work closely with product and design teams
• Maintain scalable frontend architecture
• Ensure responsive and accessible UI development`,

        requirements: [
          "Bachelor’s degree in Computer Science or related field",
          "5+ years of experience with React.js",
          "Strong understanding of JavaScript/TypeScript",
          "Experience with Redux and REST APIs",
          "Knowledge of modern frontend tooling",
          "Excellent communication skills",
        ],

        benefits: [
          "Competitive salary package",
          "Remote & hybrid work options",
          "Health insurance coverage",
          "Learning & development budget",
          "Flexible working hours",
          "Annual performance bonus",
        ],

        skills: [
          "React",
          "TypeScript",
          "Redux",
          "TailwindCSS",
          "Jest",
          "Webpack",
        ],

        postedDate: new Date().toISOString(),

        applicants: 45,

        companyInfo: {
          name: "Tech Corp",
          website: "https://techcorp.com",
          size: "200-500 employees",
          founded: "2015",
          industry: "Software Development",
          description:
            "Tech Corp is a leading technology company building innovative digital products for global businesses.",
        },
      };

      setJob(mockJob);
      setLoading(false);
    }, 1000);
  }, [id]);

  const handleSave = () => {
    setSaved(!saved);

    toast.success(
      saved
        ? "Removed from saved jobs"
        : "Job saved successfully"
    );
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);

    toast.success("Link copied to clipboard");
  };

  const handleApply = () => {
    if (!user) {
      toast.error("Please login to apply");

      navigate("/login");

      return;
    }

    setApplying(true);

    setTimeout(() => {
      setApplying(false);

      toast.success("Application submitted successfully!");
    }, 1500);
  };

  if (loading) return <Loader />;

  if (!job)
    return (
      <div className="job-not-found">
        <h2>Job Not Found</h2>
      </div>
    );

  return (
    <div className="job-details-page">
      <div className="container-custom">
        <div className="job-layout">
          {/* MAIN CONTENT */}

          <div className="job-main-content">
            {/* HERO CARD */}

            <div className="job-hero-card">
              <div className="job-top">
                <div className="company-logo">
                  {job.company.charAt(0)}
                </div>

                <div className="job-title-section">
                  <h1>{job.title}</h1>

                  <div className="company-row">
                    <FaBuilding />
                    <span>{job.company}</span>
                  </div>
                </div>

                <div className="job-actions">
                  <button
                    onClick={handleSave}
                    className={`action-btn ${
                      saved ? "saved" : ""
                    }`}
                  >
                    <FaBookmark />
                  </button>

                  <button
                    onClick={handleShare}
                    className="action-btn"
                  >
                    <FaShareAlt />
                  </button>
                </div>
              </div>

              {/* META */}

              <div className="job-meta-grid">
                <div className="meta-item">
                  <FaMapMarkerAlt />
                  <span>{job.location}</span>
                </div>

                <div className="meta-item">
                  <FaDollarSign />
                  <span>{job.salary}</span>
                </div>

                <div className="meta-item">
                  <FaClock />
                  <span>{job.type}</span>
                </div>

                <div className="meta-item">
                  <FaUsers />
                  <span>{job.applicants} Applicants</span>
                </div>

                <div className="meta-item">
                  <FaBriefcase />
                  <span>{job.experience}</span>
                </div>

                <div className="meta-item">
                  <FaCalendarAlt />
                  <span>
                    Posted{" "}
                    {new Date(
                      job.postedDate
                    ).toLocaleDateString()}
                  </span>
                </div>
              </div>

              {/* SKILLS */}

              <div className="skills-wrapper">
                {job.skills.map((skill, index) => (
                  <span key={index} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* DESCRIPTION */}

            <div className="job-card">
              <div className="section-heading">
                <h2>Job Description</h2>
              </div>

              <div className="description-content">
                {job.description
                  .split("\n")
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>
            </div>

            {/* REQUIREMENTS */}

            <div className="job-card">
              <div className="section-heading">
                <h2>Requirements</h2>
              </div>

              <div className="requirements-list">
                {job.requirements.map((req, index) => (
                  <div className="list-item" key={index}>
                    <div className="list-icon blue">
                      <FaCheckCircle />
                    </div>

                    <p>{req}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* BENEFITS */}

            <div className="job-card">
              <div className="section-heading">
                <h2>Benefits & Perks</h2>
              </div>

              <div className="benefits-grid">
                {job.benefits.map((benefit, index) => (
                  <div className="benefit-card" key={index}>
                    <FaGraduationCap />

                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SIDEBAR */}

          <div className="job-sidebar">
            {/* APPLY CARD */}

            <div className="sidebar-card sticky-card">
              <button
                onClick={handleApply}
                disabled={applying}
                className="apply-btn"
              >
                {applying ? "Submitting..." : "Apply Now"}
              </button>

              <p>
                Be among the first{" "}
                {50 - job.applicants} applicants
              </p>

              <div className="quick-info">
                <div>
                  <span>Job Type</span>
                  <strong>{job.type}</strong>
                </div>

                <div>
                  <span>Experience</span>
                  <strong>{job.experience}</strong>
                </div>

                <div>
                  <span>Salary</span>
                  <strong>{job.salary}</strong>
                </div>
              </div>
            </div>

            {/* COMPANY INFO */}

            <div className="sidebar-card">
              <div className="company-info-top">
                <div className="mini-logo">
                  {job.company.charAt(0)}
                </div>

                <div>
                  <h3>{job.companyInfo.name}</h3>

                  <p>{job.companyInfo.industry}</p>
                </div>
              </div>

              <p className="company-description">
                {job.companyInfo.description}
              </p>

              <div className="company-details">
                <div className="company-detail">
                  <span>Company Size</span>
                  <strong>{job.companyInfo.size}</strong>
                </div>

                <div className="company-detail">
                  <span>Founded</span>
                  <strong>{job.companyInfo.founded}</strong>
                </div>

                <div className="company-detail">
                  <span>Industry</span>
                  <strong>{job.companyInfo.industry}</strong>
                </div>
              </div>

              <a
                href={job.companyInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-site-btn"
              >
                <FaGlobe />
                Visit Website
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;