import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaMapMarkerAlt,
  FaClock,
  FaDollarSign,
  FaBuilding,
  FaArrowRight,
  FaBookmark,
  FaBriefcase,
} from 'react-icons/fa';
import { formatDistance } from 'date-fns';
import './JobCard.css';

const JobCard = ({ job }) => {
  const getJobTypeClass = (type) => {
    switch (type?.toLowerCase()) {
      case 'full-time':
        return 'job-type full-time';
      case 'part-time':
        return 'job-type part-time';
      case 'contract':
        return 'job-type contract';
      case 'remote':
        return 'job-type remote';
      default:
        return 'job-type default';
    }
  };

  return (
    <div className="job-card">
      {/* Top Section */}
      <div className="job-card-top">
        <div className="job-company-section">
          <div className="job-company-logo">
            {job.company?.charAt(0) || 'J'}
          </div>

          <div className="job-company-info">
            <h3 className="job-title">
              {job.title}
            </h3>

            <div className="job-company-name">
              <FaBuilding size={13} />
              <span>{job.company}</span>
            </div>
          </div>
        </div>

        <button className="bookmark-btn">
          <FaBookmark />
        </button>
      </div>

      {/* Type Badge */}
      <div className="job-badge-row">
        <span className={getJobTypeClass(job.type)}>
          <FaBriefcase size={11} />
          {job.type || 'Full-Time'}
        </span>
      </div>

      {/* Job Meta */}
      <div className="job-meta-grid">
        <div className="job-meta-item">
          <FaMapMarkerAlt className="meta-icon" />
          <span>{job.location}</span>
        </div>

        <div className="job-meta-item">
          <FaDollarSign className="meta-icon" />
          <span>{job.salary || 'Competitive Salary'}</span>
        </div>

        <div className="job-meta-item">
          <FaClock className="meta-icon" />
          <span>
            Posted{' '}
            {formatDistance(
              new Date(job.postedDate),
              new Date(),
              { addSuffix: true }
            )}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="job-description">
        {job.description}
      </p>

      {/* Skills */}
      <div className="job-skills">
        {job.skills?.slice(0, 4).map((skill, index) => (
          <span key={index} className="skill-chip">
            {skill}
          </span>
        ))}

        {job.skills?.length > 4 && (
          <span className="skill-more">
            +{job.skills.length - 4}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="job-card-footer">
        <div className="job-posted">
          Active Hiring
        </div>

        <Link
          to={`/jobs/${job.id}`}
          className="view-job-btn"
        >
          View Details
          <FaArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
};

export default JobCard;