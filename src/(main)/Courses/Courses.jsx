import React from "react";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import search from "../../assets/search.svg";
import courses  from "../../data/courses";
import CourseCard from "../../components/CourseCard/CourseCard";
import Footer from "../../components/Footer/Footer";
import "./Courses.css";
const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div>
      <Navbar />

      <main>
        <div className="container">
          {/* header */}
          <div className="header">
            <h1>All Courses</h1>
            <p>
              Explore our comprehensive catalog of tech courses designed to
              advance your career
            </p>
          </div>
        </div>
        {/* search */}
        <div className="search">
          <img src={search} alt="" />
          <input
            type="text"
            placeholder="Search your course..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
        {/* courses grid*/}
        <div className="grid">
          {filteredCourses.map((course) => (
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
        {filteredCourses.length === 0 && (
          <div className="notfoundtext">
            <p>No courses found matching "{searchQuery}"</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
