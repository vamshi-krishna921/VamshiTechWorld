import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import courses from "../../data/courses";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./CourseDetail.css";
import clock from "../../assets/clock.svg";
import barchart from "../../assets/barchart.svg";

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return <PageNotFound />;
  }

  return (
    <div className="coursedetails">
      <Navbar />
      <main className="main">
        <div className="container">
          <div className="grid">
            <div className="left-column">
              {/* Left Side - Course Image & Quick Info */}
              <div className="leftimg">
                <div className="img">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="imgtag"
                  />
                </div>
                <div className="tag">
                  <p>{course.mode}</p>
                </div>
              </div>
              <div className="card">
                <div className="cardcontent">
                  <div className="time">
                    <img src={clock} alt="clock" className="clock" />
                    <div>
                      <p>Duration</p>
                      <p>{course.duration}</p>
                    </div>
                  </div>
                  <div className="level">
                    <img src={barchart} alt="barchart" className="barchart" />
                    <div>
                      <p>Level</p>
                      <p>{course.level}</p>
                    </div>
                  </div>
                </div>
              </div>
              {course.status === "Active" ? (
                <button
                  onClick={() =>
                    window.open("https://forms.gle/E7kszxvgRiBDjjVM6", "_blank")
                  }
                  className="button"
                >
                  Enroll now
                </button>
              ) : (
                <button
                  className="button"
                  onClick={() => {
                    // Note: The phone number might have a typo. Please double-check it.
                    const phoneNumber = "9182053783"; // Corrected from "91820n53783"
                    const message = "Hi, I'm interested to join!";
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                      message
                    )}`;
                    window.open(whatsappUrl, "_blank");
                  }}
                >
                  Notify Me
                </button>
              )}
            </div>
            {/* right side - course description*/}
            <div className="right-container">
              <div className="title">
                <h1 className="course-title">{course.title}</h1>
                {course.status === "Coming Soon" && <p>Coming Soon</p>}
              </div>
              <div className="description">
                <p>{course.description}</p>
              </div>

              {/* syllabus */}
              {course.syllabus && (
                <div className="card2">
                  <div className="cardcontent2">
                    <h1>Course Syllabus</h1>
                    <div className="points">
                      {course.syllabus.map((item, index) => (
                        <div key={index} className="point">
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {/* what you get */}
              <div className="card3">
                <div className="card3content">
                  <h2>What You'll Learn</h2>
                  <p>
                    By the end of this course, you'll have mastered the skills
                    needed to build production-ready applications and ace
                    technical interviews. Our hands-on approach ensures you gain
                    practical experience with real-world projects.
                  </p>
                  <p>
                    Join hundreds of students who have successfully launched
                    their tech careers with our comprehensive training programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
