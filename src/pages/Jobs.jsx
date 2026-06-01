import React, { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import Loader from "../components/Loader";

import {
  FaSearch,
  FaFilter,
  FaTimes,
  FaMapMarkerAlt,
  FaBriefcase,
  FaDollarSign,
  FaSlidersH,
} from "react-icons/fa";

import "./Jobs.css";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");

  const [filters, setFilters] = useState({
    type: "",
    location: "",
    salary: "",
  });

  const [showFilters, setShowFilters] = useState(false);

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
            "We are looking for an experienced frontend developer with React expertise...",
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
            "Seeking a backend engineer to build scalable APIs...",
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
            "Join our design team to create beautiful user experiences...",
          skills: ["Figma", "Adobe XD", "User Research"],
          postedDate: new Date(
            Date.now() - 5 * 24 * 60 * 60 * 1000
          ).toISOString(),
        },
        {
          id: 4,
          title: "DevOps Engineer",
          company: "Cloud Solutions",
          location: "Austin, TX",
          salary: "$140k - $170k",
          type: "Full-Time",
          description:
            "Looking for DevOps engineer with AWS and Kubernetes experience...",
          skills: ["AWS", "Kubernetes", "Docker", "Terraform"],
          postedDate: new Date(
            Date.now() - 1 * 24 * 60 * 60 * 1000
          ).toISOString(),
        },
        {
          id: 5,
          title: "Data Scientist",
          company: "AI Analytics",
          location: "Boston, MA",
          salary: "$125k - $155k",
          type: "Full-Time",
          description:
            "Join our data science team to work on cutting-edge ML models...",
          skills: ["Python", "TensorFlow", "SQL", "Statistics"],
          postedDate: new Date(
            Date.now() - 3 * 24 * 60 * 60 * 1000
          ).toISOString(),
        },
        {
          id: 6,
          title: "Product Manager",
          company: "ProductLabs",
          location: "Seattle, WA",
          salary: "$130k - $160k",
          type: "Full-Time",
          description:
            "Lead product development for our flagship SaaS product...",
          skills: ["Agile", "Roadmapping", "Analytics"],
          postedDate: new Date(
            Date.now() - 4 * 24 * 60 * 60 * 1000
          ).toISOString(),
        },
      ];

      setJobs(mockJobs);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      job.company
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesType =
      !filters.type || job.type === filters.type;

    const matchesLocation =
      !filters.location ||
      job.location
        .toLowerCase()
        .includes(filters.location.toLowerCase());

    return (
      matchesSearch &&
      matchesType &&
      matchesLocation
    );
  });

  const clearFilters = () => {
    setFilters({
      type: "",
      location: "",
      salary: "",
    });

    setSearchTerm("");
  };

  return (
    <div className="jobs-page">
      {/* HERO */}

      <div className="jobs-hero">
        <div className="container-custom">
          <div className="jobs-hero-content">
            <span className="hero-badge">
              Find Your Dream Career
            </span>

            <h1>Explore Top Job Opportunities</h1>

            <p>
              Discover remote, full-time, and high-paying
              jobs from leading companies worldwide.
            </p>

            {/* SEARCH */}

            <div className="hero-search-box">
              <div className="search-input">
                <FaSearch />

                <input
                  type="text"
                  placeholder="Search jobs or companies..."
                  value={searchTerm}
                  onChange={(e) =>
                    setSearchTerm(e.target.value)
                  }
                />
              </div>

              <button
                onClick={() =>
                  setShowFilters(!showFilters)
                }
                className="filter-toggle-btn"
              >
                <FaSlidersH />
                Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN SECTION */}

      <div className="jobs-main-section">
        <div className="container-custom">
          {/* FILTERS */}

          <div className="jobs-topbar">
            <div>
              <h2>
                {filteredJobs.length} Jobs Available
              </h2>

              <p>
                Explore the latest opportunities matching
                your skills
              </p>
            </div>

            {(searchTerm ||
              filters.type ||
              filters.location) && (
              <button
                onClick={clearFilters}
                className="clear-filters-btn"
              >
                <FaTimes />
                Clear Filters
              </button>
            )}
          </div>

          {showFilters && (
            <div className="filters-panel">
              <div className="filter-group">
                <label>
                  <FaBriefcase />
                  Job Type
                </label>

                <select
                  value={filters.type}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      type: e.target.value,
                    })
                  }
                >
                  <option value="">All Types</option>

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
                </select>
              </div>

              <div className="filter-group">
                <label>
                  <FaMapMarkerAlt />
                  Location
                </label>

                <input
                  type="text"
                  placeholder="Enter location"
                  value={filters.location}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      location: e.target.value,
                    })
                  }
                />
              </div>

              <div className="filter-group">
                <label>
                  <FaDollarSign />
                  Salary Range
                </label>

                <select
                  value={filters.salary}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      salary: e.target.value,
                    })
                  }
                >
                  <option value="">Any Salary</option>

                  <option value="0-50k">
                    $0 - $50k
                  </option>

                  <option value="50k-100k">
                    $50k - $100k
                  </option>

                  <option value="100k-150k">
                    $100k - $150k
                  </option>

                  <option value="150k+">
                    $150k+
                  </option>
                </select>
              </div>
            </div>
          )}

          {/* JOBS GRID */}

          {loading ? (
            <Loader />
          ) : filteredJobs.length > 0 ? (
            <div className="jobs-grid">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No Jobs Found</h3>

              <p>
                Try adjusting your filters or search term.
              </p>

              <button onClick={clearFilters}>
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;