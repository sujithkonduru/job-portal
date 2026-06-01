import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaBriefcase,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import toast from "react-hot-toast";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "candidate",
  });

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const { register } = useAuth();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      toast.error("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      toast.error(
        "Password must be at least 6 characters"
      );
      return;
    }

    setLoading(true);

    try {
      await register(formData);

      toast.success("Account created successfully!");

      navigate("/dashboard");
    } catch (error) {
      console.error("Registration failed:", error);

      toast.error("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      {/* LEFT SIDE */}

      <div className="register-left">
        <div className="register-overlay"></div>

        <div className="register-content">
          <span className="register-badge">
            Join Our Platform 🚀
          </span>

          <h1>
            Start Your
            <span> Professional Journey</span>
          </h1>

          <p>
            Create your account and connect with
            thousands of companies and opportunities
            around the world.
          </p>

          <div className="register-features">
            <div className="feature-item">
              <FaCheckCircle />
              <span>
                Access thousands of premium jobs
              </span>
            </div>

            <div className="feature-item">
              <FaCheckCircle />
              <span>
                Connect with top recruiters
              </span>
            </div>

            <div className="feature-item">
              <FaCheckCircle />
              <span>
                Build your professional profile
              </span>
            </div>

            <div className="feature-item">
              <FaCheckCircle />
              <span>
                Apply instantly with one click
              </span>
            </div>
          </div>

          <div className="register-stats">
            <div className="stat-box">
              <h3>20K+</h3>
              <p>Active Members</p>
            </div>

            <div className="stat-box">
              <h3>8K+</h3>
              <p>Companies</p>
            </div>

            <div className="stat-box">
              <h3>12K+</h3>
              <p>Jobs Posted</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}

      <div className="register-right">
        <div className="register-card">
          <div className="register-header">
            <h2>Create Account</h2>

            <p>
              Register now and unlock new career
              opportunities.
            </p>
          </div>

          {/* FORM */}

          <form onSubmit={handleSubmit}>
            {/* NAME */}

            <div className="form-group">
              <label>Full Name</label>

              <div className="input-wrapper">
                <FaUser className="input-icon" />

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* EMAIL */}

            <div className="form-group">
              <label>Email Address</label>

              <div className="input-wrapper">
                <FaEnvelope className="input-icon" />

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* ROLE */}

            <div className="form-group">
              <label>I am a</label>

              <div className="input-wrapper">
                <FaBriefcase className="input-icon" />

                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="candidate">
                    Job Seeker
                  </option>

                  <option value="employer">
                    Employer / Recruiter
                  </option>
                </select>
              </div>
            </div>

            {/* PASSWORD */}

            <div className="form-group">
              <label>Password</label>

              <div className="input-wrapper">
                <FaLock className="input-icon" />

                <input
                  type={
                    showPassword ? "text" : "password"
                  }
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>
              </div>
            </div>

            {/* CONFIRM PASSWORD */}

            <div className="form-group">
              <label>Confirm Password</label>

              <div className="input-wrapper">
                <FaLock className="input-icon" />

                <input
                  type={
                    showPassword ? "text" : "password"
                  }
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="register-btn"
            >
              {loading ? (
                "Creating Account..."
              ) : (
                <>
                  Create Account
                  <FaArrowRight />
                </>
              )}
            </button>
          </form>

          {/* FOOTER */}

          <div className="register-footer">
            <p>
              Already have an account?{" "}
              <Link to="/login">Sign In</Link>
            </p>

            <p className="terms-text">
              By creating an account, you agree to our{" "}
              <a href="/">Terms</a> and{" "}
              <a href="/">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;