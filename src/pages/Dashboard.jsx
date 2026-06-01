import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaBriefcase,
  FaSave,
  FaChartLine,
  FaBell,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaClock,
  FaTrash,
  FaArrowRight,
} from "react-icons/fa";

import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import "./Dashboard.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Dashboard = () => {
  const { user } = useAuth();

  const [activeTab, setActiveTab] = useState("overview");
  const [applications, setApplications] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setApplications([
        {
          id: 1,
          jobTitle: "Senior Frontend Developer",
          company: "Tech Corp",
          status: "Under Review",
          appliedDate: new Date().toISOString(),
        },
        {
          id: 2,
          jobTitle: "Backend Engineer",
          company: "Innovate Inc",
          status: "Interview",
          appliedDate: new Date(
            Date.now() - 5 * 24 * 60 * 60 * 1000
          ).toISOString(),
        },
      ]);

      setSavedJobs([
        {
          id: 3,
          jobTitle: "UI/UX Designer",
          company: "Creative Studio",
          location: "Remote",
          salary: "$90k - $110k",
        },
      ]);

      setLoading(false);
    }, 1000);
  }, []);

  const tabs = [
    { id: "overview", label: "Overview", icon: <FaChartLine /> },
    { id: "applications", label: "Applications", icon: <FaBriefcase /> },
    { id: "saved", label: "Saved Jobs", icon: <FaSave /> },
    { id: "profile", label: "Profile", icon: <FaUser /> },
  ];

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

    datasets: [
      {
        label: "Applications",
        data: [3, 5, 8, 7, 12, 15],
        borderColor: "#2563eb",
        backgroundColor: "rgba(37,99,235,0.15)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Interviews",
        data: [1, 2, 3, 3, 5, 6],
        borderColor: "#10b981",
        backgroundColor: "rgba(16,185,129,0.12)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "under review":
        return "status-review";

      case "interview":
        return "status-interview";

      case "accepted":
        return "status-accepted";

      case "rejected":
        return "status-rejected";

      default:
        return "status-default";
    }
  };

  return (
    <div className="dashboard-page">
      <div className="container-custom">
        {/* HEADER */}

        <div className="dashboard-header">
          <div className="dashboard-user">
            <img
              src={user?.avatar}
              alt={user?.name}
              className="dashboard-avatar"
            />

            <div>
              <h1>Welcome back, {user?.name}</h1>

              <p>
                {user?.role === "employer"
                  ? "Employer Dashboard"
                  : "Job Seeker Dashboard"}
              </p>
            </div>
          </div>

          <button className="notification-btn">
            <FaBell />
          </button>
        </div>

        {/* MAIN GRID */}

        <div className="dashboard-layout">
          {/* SIDEBAR */}

          <div className="dashboard-sidebar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`sidebar-tab ${
                  activeTab === tab.id ? "active" : ""
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* CONTENT */}

          <div className="dashboard-content">
            {loading ? (
              <div className="dashboard-loader">
                <div className="loader-spinner"></div>
              </div>
            ) : (
              <>
                {/* OVERVIEW */}

                {activeTab === "overview" && (
                  <>
                    <div className="stats-grid">
                      <div className="stat-card blue">
                        <h2>{applications.length}</h2>
                        <p>Total Applications</p>
                      </div>

                      <div className="stat-card green">
                        <h2>
                          {
                            applications.filter(
                              (a) => a.status === "Interview"
                            ).length
                          }
                        </h2>
                        <p>Interviews</p>
                      </div>

                      <div className="stat-card purple">
                        <h2>{savedJobs.length}</h2>
                        <p>Saved Jobs</p>
                      </div>
                    </div>

                    <div className="chart-card">
                      <div className="card-header">
                        <div>
                          <h3>Application Activity</h3>
                          <p>Your monthly job activity insights</p>
                        </div>
                      </div>

                      <div className="chart-wrapper">
                        <Line data={chartData} options={chartOptions} />
                      </div>
                    </div>
                  </>
                )}

                {/* APPLICATIONS */}

                {activeTab === "applications" && (
                  <div className="dashboard-card">
                    <div className="card-header">
                      <div>
                        <h3>My Applications</h3>
                        <p>Track your applied jobs</p>
                      </div>
                    </div>

                    <div className="applications-list">
                      {applications.map((app) => (
                        <div className="application-card" key={app.id}>
                          <div className="application-top">
                            <div>
                              <h4>{app.jobTitle}</h4>

                              <p>{app.company}</p>
                            </div>

                            <span
                              className={`status-badge ${getStatusClass(
                                app.status
                              )}`}
                            >
                              {app.status}
                            </span>
                          </div>

                          <div className="application-bottom">
                            <span>
                              <FaClock />
                              Applied on{" "}
                              {new Date(
                                app.appliedDate
                              ).toLocaleDateString()}
                            </span>

                            <Link to={`/jobs/${app.id}`}>
                              View Details <FaArrowRight />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SAVED JOBS */}

                {activeTab === "saved" && (
                  <div className="dashboard-card">
                    <div className="card-header">
                      <div>
                        <h3>Saved Jobs</h3>
                        <p>Your bookmarked opportunities</p>
                      </div>
                    </div>

                    <div className="saved-jobs-grid">
                      {savedJobs.map((job) => (
                        <div className="saved-job-card" key={job.id}>
                          <h4>{job.jobTitle}</h4>

                          <p>{job.company}</p>

                          <div className="saved-meta">
                            <span>
                              <FaMapMarkerAlt />
                              {job.location}
                            </span>

                            <span>
                              <FaMoneyBillWave />
                              {job.salary}
                            </span>
                          </div>

                          <div className="saved-actions">
                            <Link to={`/jobs/${job.id}`}>
                              View Job
                            </Link>

                            <button>
                              <FaTrash />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* PROFILE */}

                {activeTab === "profile" && (
                  <div className="dashboard-card">
                    <div className="card-header">
                      <div>
                        <h3>Profile Information</h3>
                        <p>Manage your account details</p>
                      </div>
                    </div>

                    <form className="profile-form">
                      <div className="form-grid">
                        <div className="form-group">
                          <label>Full Name</label>

                          <input
                            type="text"
                            defaultValue={user?.name}
                          />
                        </div>

                        <div className="form-group">
                          <label>Email Address</label>

                          <input
                            type="email"
                            defaultValue={user?.email}
                            readOnly
                          />
                        </div>

                        <div className="form-group">
                          <label>Role</label>

                          <input
                            type="text"
                            defaultValue={
                              user?.role === "employer"
                                ? "Employer"
                                : "Job Seeker"
                            }
                            readOnly
                          />
                        </div>

                        <div className="form-group">
                          <label>Resume/CV</label>

                          <input type="file" />
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Skills</label>

                        <textarea
                          rows="5"
                          placeholder="React, Node.js, UI/UX..."
                        ></textarea>
                      </div>

                      <button className="save-profile-btn">
                        Update Profile
                      </button>
                    </form>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;