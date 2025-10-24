import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Offline.css";
import courses from "../../data/courses";
import CourseCard from "../../components/CourseCard/CourseCard";
import building from "../../assets/building.svg";

const Offline = () => {
  const offlineCourses = courses.filter((course) => course.mode === "Offline");

  return (
    <div className="offline-container">
      <Navbar />
      <main className="main">
        <div className="container">
          {/* Headerr */}
          <div className="header">
            <img src={building} alt="building" />
            <span>Offline Training</span>
            <h1>In-Person Learning Experience</h1>
            <p>
              Join our immersive classroom sessions with direct mentor
              interaction, collaborative projects, and hands-on practical
              training in a professional environment.
            </p>
          </div>

          {/* course grid */}
          {offlineCourses.length > 0 ? (
            <div className="grid">
              {offlineCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  mode={course.mode}
                  image={course.image}
                  status={course.status}
                  description={course.description}
                />
              ))}
            </div>
          ) : (
            <div className="notfound">
              <p>
                No offline courses available at the moment. Check back soon!
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Offline;
