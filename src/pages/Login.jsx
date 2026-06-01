import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
} from "react-icons/fa";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await login(email, password);

      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      {/* LEFT SIDE */}

      <div className="login-left">
        <div className="login-overlay"></div>

        <div className="login-left-content">
          <span className="login-badge">
            Welcome Back 👋
          </span>

          <h1>
            Find Your Dream Job &
            <span> Build Your Career</span>
          </h1>

          <p>
            Join thousands of professionals discovering
            opportunities from top companies worldwide.
          </p>

          <div className="login-stats">
            <div className="stat-card">
              <h3>10K+</h3>
              <p>Jobs Posted</p>
            </div>

            <div className="stat-card">
              <h3>5K+</h3>
              <p>Companies</p>
            </div>

            <div className="stat-card">
              <h3>20K+</h3>
              <p>Active Users</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}

      <div className="login-right">
        <div className="login-card">
          <div className="login-header">
            <h2>Sign In</h2>

            <p>
              Access your account and continue your
              journey.
            </p>
          </div>

          {/* FORM */}

          <form onSubmit={handleSubmit}>
            {/* EMAIL */}

            <div className="form-group">
              <label>Email Address</label>

              <div className="input-wrapper">
                <FaEnvelope className="input-icon" />

                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                />
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
                  placeholder="••••••••"
                  required
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
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

            {/* OPTIONS */}

            <div className="login-options">
              <div className="remember-me">
                <input type="checkbox" id="remember" />

                <label htmlFor="remember">
                  Remember me
                </label>
              </div>

              <Link
                to="/forgot-password"
                className="forgot-link"
              >
                Forgot Password?
              </Link>
            </div>

            {/* BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="login-btn"
            >
              {loading ? (
                "Signing In..."
              ) : (
                <>
                  Sign In
                  <FaArrowRight />
                </>
              )}
            </button>
          </form>

          {/* DIVIDER */}

          <div className="divider">
            <span>Demo Credentials</span>
          </div>

          {/* DEMO */}

          <div className="demo-box">
            <p>
              <strong>Email:</strong>{" "}
              demo@example.com
            </p>

            <p>
              <strong>Password:</strong> any password
            </p>
          </div>

          {/* FOOTER */}

          <div className="login-footer">
            <p>
              Don’t have an account?{" "}
              <Link to="/register">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;