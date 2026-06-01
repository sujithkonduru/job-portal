import React, { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  useNavigate,
} from 'react-router-dom';

import {
  FaBriefcase,
  FaUserTie,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
  FaChevronDown,
  FaSignOutAlt,
  FaUserCircle,
  FaPlusCircle,
  FaSearch,
  FaBell,
  FaBookmark,
} from 'react-icons/fa';

import { useAuth } from '../contexts/AuthContext';
import './Navbar.css';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () =>
      document.removeEventListener(
        'mousedown',
        handleOutsideClick
      );
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
    setShowDropdown(false);
    setIsOpen(false);
  };

  const navLinks = [
    {
      label: 'Jobs',
      path: '/jobs',
    },
    {
      label: 'Companies',
      path: '/companies',
    },
    {
      label: 'Services',
      path: '/services',
    },
    {
      label: 'Career Advice',
      path: '/career-advice',
    },
  ];

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <div className="container-custom navbar-container">
          {/* ================= LOGO ================= */}
          <Link to="/" className="navbar-logo">
            <div className="logo-icon">
              <FaBriefcase />
            </div>

            <div className="logo-text">
              Job<span>Portal</span>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <div className="desktop-navbar">
            {/* NAV LINKS */}
            <div className="navbar-links">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'navbar-link active'
                      : 'navbar-link'
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              {user?.role === 'employer' && (
                <NavLink
                  to="/post-job"
                  className={({ isActive }) =>
                    isActive
                      ? 'navbar-link active'
                      : 'navbar-link'
                  }
                >
                  Post Job
                </NavLink>
              )}
            </div>

            {/* SEARCH BAR */}
            <div className="navbar-search">
              <FaSearch className="search-icon" />

              <input
                type="text"
                placeholder="Search jobs, companies, skills..."
              />
            </div>

            {/* RIGHT SIDE */}
            <div className="navbar-actions">
              {/* DARK MODE */}
              <button
                className="theme-btn"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>

              {!user ? (
                <div className="auth-section">
                  <Link to="/login" className="login-btn">
                    Login
                  </Link>

                  <Link
                    to="/register"
                    className="register-btn"
                  >
                    Register
                  </Link>

                  <Link
                    to="/post-job"
                    className="employer-btn"
                  >
                    For Employers
                  </Link>
                </div>
              ) : (
                <>
                  {/* NOTIFICATION */}
                  <button className="icon-btn">
                    <FaBell />
                    <span className="notification-dot"></span>
                  </button>

                  {/* SAVED JOBS */}
                  <Link
                    to="/saved-jobs"
                    className="icon-btn"
                  >
                    <FaBookmark />
                  </Link>

                  {/* USER PROFILE */}
                  <div
                    className="profile-wrapper"
                    ref={dropdownRef}
                  >
                    <button
                      className="profile-btn"
                      onClick={() =>
                        setShowDropdown(!showDropdown)
                      }
                    >
                      <img
                        src={
                          user?.avatar ||
                          'https://i.pravatar.cc/150?img=12'
                        }
                        alt={user?.name}
                        className="profile-avatar"
                      />

                      <div className="profile-info">
                        <span>Hello,</span>
                        <h4>{user?.name}</h4>
                      </div>

                      <FaChevronDown
                        className={`dropdown-arrow ${
                          showDropdown ? 'rotate' : ''
                        }`}
                      />
                    </button>

                    {/* DROPDOWN */}
                    <div
                      className={`profile-dropdown ${
                        showDropdown ? 'show-dropdown' : ''
                      }`}
                    >
                      <Link
                        to="/dashboard"
                        className="dropdown-item"
                        onClick={() =>
                          setShowDropdown(false)
                        }
                      >
                        <FaUserCircle />
                        Dashboard
                      </Link>

                      <Link
                        to="/profile"
                        className="dropdown-item"
                        onClick={() =>
                          setShowDropdown(false)
                        }
                      >
                        <FaUserTie />
                        My Profile
                      </Link>

                      {user?.role === 'employer' && (
                        <Link
                          to="/post-job"
                          className="dropdown-item"
                          onClick={() =>
                            setShowDropdown(false)
                          }
                        >
                          <FaPlusCircle />
                          Post Job
                        </Link>
                      )}

                      <button
                        className="dropdown-item logout-btn"
                        onClick={handleLogout}
                      >
                        <FaSignOutAlt />
                        Logout
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* ================= MOBILE ACTIONS ================= */}
          <div className="mobile-actions">
            <button
              className="theme-btn"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            <button
              className="menu-btn"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`mobile-menu ${
            isOpen ? 'mobile-open' : ''
          }`}
        >
          <div className="mobile-inner">
            <div className="mobile-search">
              <FaSearch className="search-icon" />

              <input
                type="text"
                placeholder="Search jobs..."
              />
            </div>

            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="mobile-link"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}

            {user?.role === 'employer' && (
              <NavLink
                to="/post-job"
                className="mobile-link"
                onClick={() => setIsOpen(false)}
              >
                Post Job
              </NavLink>
            )}

            {!user ? (
              <div className="mobile-auth">
                <Link
                  to="/login"
                  className="mobile-login"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="mobile-register"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </div>
            ) : (
              <>
                <Link
                  to="/dashboard"
                  className="mobile-link"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>

                <button
                  className="mobile-logout"
                  onClick={handleLogout}
                >
                  <FaSignOutAlt />
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;