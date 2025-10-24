import React from "react";
import "./Online.css";
import Navbar from "../../components/Navbar/Navbar";
import wifi from "../../assets/wifi.svg";
import courses from "../../data/courses";
import CourseCard from "../../components/CourseCard/CourseCard";
import Footer from "../../components/Footer/Footer";

const Online = () => {
  const onlinecourses = courses.filter((course) => course.mode === "Online");
  return (
    <div>
      <Navbar />
      <main className="main">
        <div className="container">
          {/* Headerr */}
          <div className="header">
            <div className="title">
              <img src={wifi} alt="" />
              <span>Online Training</span>
            </div>
            <h1>Learn From Anywhere</h1>
            <p>
              Join our interactive online courses with live sessions, recorded
              content, and hands-on projects. Learn at your own pace with expert
              support.
            </p>
          </div>

          {/* courses */}
          {onlinecourses.length > 0 ? (
            <div className="courses">
              {onlinecourses.map((course) => (
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
              <p>No online courses available at the moment. Check back soon!</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Online;
