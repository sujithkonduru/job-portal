import React from 'react';
import {
  FaBullseye,
  FaLightbulb,
  FaHandshake,
  FaUsers,
  FaRocket,
  FaHeart,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <FaBullseye />,
      title: 'Mission',
      description:
        'Connecting talented professionals with dream opportunities and helping companies build exceptional teams.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description:
        'Building modern recruitment solutions that simplify hiring and job searching.'
    },
    {
      icon: <FaHandshake />,
      title: 'Integrity',
      description:
        'Creating trust through transparency, honesty, and meaningful relationships.'
    },
    {
      icon: <FaUsers />,
      title: 'Community',
      description:
        'Supporting career growth through collaboration and professional networking.'
    },
    {
      icon: <FaRocket />,
      title: 'Growth',
      description:
        'Empowering professionals and companies to reach their full potential.'
    },
    {
      icon: <FaHeart />,
      title: 'Passion',
      description:
        'Driven by our passion to create life-changing career opportunities.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image:
        'https://ui-avatars.com/api/?name=Sarah+Johnson&background=2563eb&color=fff&size=200'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      image:
        'https://ui-avatars.com/api/?name=Michael+Chen&background=2563eb&color=fff&size=200'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      image:
        'https://ui-avatars.com/api/?name=Emily+Rodriguez&background=2563eb&color=fff&size=200'
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      image:
        'https://ui-avatars.com/api/?name=David+Kim&background=2563eb&color=fff&size=200'
    }
  ];

  const highlights = [
    'AI-powered job matching',
    'Trusted by top companies',
    'Fast & secure hiring process',
    'Career growth resources'
  ];

  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="container-custom">
          <div className="about-hero-content">
            <span className="about-badge">About Our Platform</span>

            <h1>
              Transforming The Future Of
              <span> Hiring & Careers</span>
            </h1>

            <p>
              JobPortal is a modern recruitment platform helping talented
              professionals connect with leading companies worldwide.
            </p>

            <div className="about-hero-actions">
              <button className="about-btn-primary">
                Explore Jobs
                <FaArrowRight />
              </button>

              <button className="about-btn-secondary">
                Learn More
              </button>
            </div>

            <div className="about-highlight-grid">
              {highlights.map((item, index) => (
                <div key={index} className="about-highlight-item">
                  <FaCheckCircle />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="about-story-section">
        <div className="container-custom">
          <div className="about-story-grid">
            <div className="about-story-left">
              <span className="section-subtitle">Our Journey</span>
              <h2>Building Careers With Technology & Innovation</h2>

              <p>
                Founded in 2020, JobPortal was created with a vision to simplify
                recruitment and help professionals discover meaningful career
                opportunities.
              </p>

              <p>
                Today, we proudly connect thousands of companies with skilled
                professionals using smart technology, seamless experiences, and
                modern hiring tools.
              </p>
            </div>

            <div className="about-story-card">
              <div className="story-stat">
                <h3>50K+</h3>
                <span>Professionals Hired</span>
              </div>

              <div className="story-stat">
                <h3>10K+</h3>
                <span>Companies Trust Us</span>
              </div>

              <div className="story-stat">
                <h3>98%</h3>
                <span>Client Satisfaction</span>
              </div>

              <div className="story-stat">
                <h3>24/7</h3>
                <span>Platform Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="about-values-section">
        <div className="container-custom">
          <div className="section-heading">
            <span className="section-subtitle">Core Values</span>
            <h2>What Drives Us Forward</h2>
            <p>
              Our values shape every decision we make and every experience we
              create.
            </p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>

                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="about-stats-section">
        <div className="container-custom">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>50K+</h3>
              <p>Happy Candidates</p>
            </div>

            <div className="stat-card">
              <h3>10K+</h3>
              <p>Companies</p>
            </div>

            <div className="stat-card">
              <h3>30K+</h3>
              <p>Jobs Filled</p>
            </div>

            <div className="stat-card">
              <h3>120+</h3>
              <p>Countries Reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="about-team-section">
        <div className="container-custom">
          <div className="section-heading">
            <span className="section-subtitle">Leadership Team</span>
            <h2>Meet The Experts Behind JobPortal</h2>
            <p>
              Passionate innovators building the future of recruitment.
            </p>
          </div>

          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image-wrapper">
                  <img src={member.image} alt={member.name} />
                </div>

                <div className="team-content">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;