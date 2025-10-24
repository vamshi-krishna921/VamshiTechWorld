import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import "./Home.css";
import { ReactComponent as Users } from "../../assets/users.svg";
import { ReactComponent as Target } from "../../assets/target.svg";
import { ReactComponent as Award } from "../../assets/success.svg";
import { Link } from "react-router-dom";
import courses from "../../data/courses";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const whoWeAreRef = useRef(null);
  const [isSectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.unobserve(entry.target); // Stop observing after it's visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (whoWeAreRef.current) {
      observer.observe(whoWeAreRef.current);
    }

    return () => {
      if (whoWeAreRef.current) {
        observer.unobserve(whoWeAreRef.current);
      }
    };
  }, []);

  return (
    <div>
      <Navbar />
      <main className="home-container">
        <section className="hero">
          <HeroSlider />
        </section>
        <section
          ref={whoWeAreRef}
          className={`who-we-are ${isSectionVisible ? "is-visible" : ""}`}
        >
          <div className="container">
            <div className="text-container">
              <h2 className="heading">Who We Are</h2>
              <p className="subheading">
                We are a team of developers and mentors providing both online
                and offline training for students to master real-world tech
                skills. Our mission is to help you learn by building projects
                and mastering interview-level knowledge. With hands-on
                experience and industry-relevant curriculum, we prepare you for
                success in the tech industry.
              </p>

              <div className="grid-container">
                <div className="grid-item">
                  <div className="icon-wrapper bg-primary">
                    <Users className="icon text-primary" />
                  </div>
                  <h3 className="item-heading">Expert Mentors</h3>
                  <p className="item-text">
                    Learn from industry professionals with years of real-world
                    experience
                  </p>
                </div>
                <div className="grid-item" style={{ animationDelay: "0.1s" }}>
                  <div className="icon-wrapper bg-accent">
                    <Target className="icon text-accent" />
                  </div>
                  <h3 className="item-heading">Project-Based Learning</h3>
                  <p className="item-text">
                    Build real-world projects that you can showcase in your
                    portfolio
                  </p>
                </div>
                <div className="grid-item" style={{ animationDelay: "0.2s" }}>
                  <div className="icon-wrapper bg-success">
                    <Award className="icon text-success" />
                  </div>
                  <h3 className="item-heading">Interview Ready</h3>
                  <p className="item-text">
                    Master the skills and confidence needed to ace technical
                    interviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  Featured Courses Section  */}
        <section className="home-courses-section">
          <div className="container">
            <h2 className="heading" style={{ textAlign: "center" }}>
              Featured Courses
            </h2>
            <div className="course-grid">
              {courses.map((course) => (
                <div key={course.id} className="course-card">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="course-image"
                  />
                  {course.mode && (
                    <span
                      className={`course-status ${course.mode
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {course.mode}
                    </span>
                  )}
                  <div className="course-content">
                    <h3 className="course-title">{course.title}</h3>
                    <p className="course-description">{course.description}</p>
                    <Link
                      to={`/course/${course.id}`}
                      className={`course-button ${
                        course.status === "Coming Soon" ? "notify-me" : ""
                      }`}
                    >
                      {course.status === "Coming Soon"
                        ? "Notify Me"
                        : "view details"}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
