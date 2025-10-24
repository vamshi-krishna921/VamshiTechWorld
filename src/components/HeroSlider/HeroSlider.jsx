import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import "./HeroSlider.css";
import java from "../../assets/java-course.jpg";
import git from "../../assets/git-course.jpg";
import docker from "../../assets/devops-course.jpg";

const slides = [
  {
    id: "java",
    title: "Master Java + DSA + Automation",
    description:
      "Build production-ready applications with comprehensive Java training",
    image: java,
  },
  {
    id: "git",
    title: "Git and GitHub Mastery",
    description: "Learn version control and collaboration workflows",
    image: git,
  },
  {
    id: "devops",
    title: "DevOps Engineering",
    description: "Master CI/CD, containers, and cloud infrastructure",
    image: docker,
  },
];
const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <>
      <div className="image-container">
        {slides.map((slide, index) => (
          <React.Fragment key={index}>
            <div
              className="slide"
              style={{ opacity: index === currentSlide ? 1 : 0 }}
            >
              <div
                className="image"
                style={{
                  transform:
                    index === currentSlide ? "scale(1)" : "scale(1.05)",
                }}
              >
                <img src={slide.image} alt={slide.title} />
              </div>
              <div className="transparent-layer"></div>
              <div className="content">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <Link to="/courses" className="cta-button">
                  Explore Courses
                </Link>
              </div>
            </div>
          </React.Fragment>
        ))}
        <button
          onClick={prevSlide}
          className="slider-button prev-button"
          aria-label="Previous Slide"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="slider-button next-button"
          aria-label="Next Slide"
        >
          &gt;
        </button>
      </div>
    </>
  );
};

export default HeroSlider;
