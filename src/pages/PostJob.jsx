import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import toast from "react-hot-toast";

import {
  FaBriefcase,
  FaBuilding,
  FaMapMarkerAlt,
  FaDollarSign,
  FaCode,
  FaClipboardList,
  FaGift,
  FaArrowRight,
} from "react-icons/fa";

import "./PostJob.css";

const PostJob = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full-Time",
    salary: "",
    description: "",
    requirements: "",
    benefits: "",
    skills: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || user.role !== "employer") {
      toast.error("Only employers can post jobs");
      navigate("/");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      toast.success("Job posted successfully!");
      navigate("/dashboard");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="post-job-page">
      <div className="post-job-container">
        {/* LEFT SIDE */}

        <div className="post-job-left">
          <span className="job-badge">
            Hire Top Talent 🚀
          </span>

          <h1>
            Post Jobs &
            <span> Find Perfect Candidates</span>
          </h1>

          <p>
            Reach thousands of skilled professionals
            and hire faster with our smart recruiting
            platform.
          </p>

          <div className="job-stats">
            <div className="job-stat-card">
              <h3>25K+</h3>
              <p>Job Seekers</p>
            </div>

            <div className="job-stat-card">
              <h3>8K+</h3>
              <p>Companies</p>
            </div>

            <div className="job-stat-card">
              <h3>95%</h3>
              <p>Hiring Success</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="post-job-card">
          <div className="post-job-header">
            <h2>Post a New Job</h2>

            <p>
              Fill in the details below to attract the
              best candidates.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              {/* JOB TITLE */}

              <div className="form-group">
                <label>Job Title *</label>

                <div className="input-wrapper">
                  <FaBriefcase className="input-icon" />

                  <input
                    type="text"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Senior Frontend Developer"
                  />
                </div>
              </div>

              {/* COMPANY */}

              <div className="form-group">
                <label>Company Name *</label>

                <div className="input-wrapper">
                  <FaBuilding className="input-icon" />

                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                  />
                </div>
              </div>

              {/* LOCATION */}

              <div className="form-group">
                <label>Location *</label>

                <div className="input-wrapper">
                  <FaMapMarkerAlt className="input-icon" />

                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Remote / City"
                  />
                </div>
              </div>

              {/* TYPE */}

              <div className="form-group">
                <label>Job Type *</label>

                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="Full-Time">
                    Full-Time
                  </option>

                  <option value="Part-Time">
                    Part-Time
                  </option>

                  <option value="Remote">
                    Remote
                  </option>

                  <option value="Contract">
                    Contract
                  </option>

                  <option value="Internship">
                    Internship
                  </option>
                </select>
              </div>

              {/* SALARY */}

              <div className="form-group">
                <label>Salary Range</label>

                <div className="input-wrapper">
                  <FaDollarSign className="input-icon" />

                  <input
                    type="text"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    placeholder="$80k - $120k"
                  />
                </div>
              </div>

              {/* SKILLS */}

              <div className="form-group">
                <label>Skills Required *</label>

                <div className="input-wrapper">
                  <FaCode className="input-icon" />

                  <input
                    type="text"
                    name="skills"
                    required
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="React, Node.js, Python"
                  />
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}

            <div className="form-group">
              <label>Job Description *</label>

              <div className="textarea-wrapper">
                <FaClipboardList className="textarea-icon" />

                <textarea
                  name="description"
                  rows="5"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe the role and responsibilities..."
                ></textarea>
              </div>
            </div>

            {/* REQUIREMENTS */}

            <div className="form-group">
              <label>Requirements *</label>

              <div className="textarea-wrapper">
                <FaClipboardList className="textarea-icon" />

                <textarea
                  name="requirements"
                  rows="4"
                  required
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Required qualifications and experience..."
                ></textarea>
              </div>
            </div>

            {/* BENEFITS */}

            <div className="form-group">
              <label>Benefits</label>

              <div className="textarea-wrapper">
                <FaGift className="textarea-icon" />

                <textarea
                  name="benefits"
                  rows="3"
                  value={formData.benefits}
                  onChange={handleChange}
                  placeholder="Health insurance, remote work..."
                ></textarea>
              </div>
            </div>

            {/* ACTIONS */}

            <div className="post-job-actions">
              <button
                type="button"
                className="cancel-btn"
                onClick={() =>
                  navigate("/dashboard")
                }
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={loading}
                className="submit-btn"
              >
                {loading ? (
                  "Posting..."
                ) : (
                  <>
                    Post Job
                    <FaArrowRight />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJob;