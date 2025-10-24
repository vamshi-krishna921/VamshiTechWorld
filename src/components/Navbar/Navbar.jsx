import { useState } from "react";
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo1.png";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  return (
    <div className="Navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu">
        <ul>
          <li
            onClick={() => setMenu("Home")}
            className={menu === "Home" ? "active" : ""}
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
          </li>
          <li
            onClick={() => setMenu("Courses")}
            className={menu === "Courses" ? "active" : ""}
          >
            <Link
              to="/courses"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Courses
            </Link>
          </li>
          <li
            onClick={() => setMenu("Online")}
            className={menu === "Online" ? "active" : ""}
          >
            <Link
              to="/online"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Online
            </Link>
          </li>
          <li
            onClick={() => setMenu("Offline")}
            className={menu === "Offline" ? "active" : ""}
          >
            <Link
              to="/offline"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Offline
            </Link>
          </li>
          <li
            onClick={() => setMenu("Contact")}
            className={menu === "Contact" ? "active" : ""}
          >
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
