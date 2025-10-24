import React from "react";
import "./CourseCard.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CourseCard = ({ id, title, mode, image, status, description }) => {
  return (
    <div className="course-card group">
      <div className="course-card-image-container">
        <img src={image} alt={title} className="course-card-image" />
        <div className="course-card-image-gradient" />
        <span
          className={`course-card-badge course-card-mode-badge ${
            mode === "ONLINE" ? "badge-default" : "badge-secondary"
          }`}
        >
          {mode}
        </span>
        {status === "Coming Soon" && (
          <div className="course-card-coming-soon-overlay">
            <span className="course-card-badge badge-outline coming-soon-text">
              Coming Soon
            </span>
          </div>
        )}
      </div>
      <div className="course-card-content">
        <h3 className="course-card-title">{title}</h3>
        {description && (
          <p className="course-card-description">{description}</p>
        )}
      </div>
      <div className="course-card-footer">
        {status === "Active" ? (
          <Link
            to={`/course/${id}`}
            className="course-card-button button-success group/btn"
          >
            View Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="course-card-button-icon"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        ) : (
          <button
            type="button"
            className="course-card-button button-outline"
          >
            Coming soon
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseCard;

CourseCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  description: PropTypes.string, // description can be optional
};
