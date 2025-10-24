import { useState } from "react";
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo1.png";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div
        className={`menu-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`menu ${isOpen ? "active" : ""}`}>
        <ul>
          {["Home", "Courses", "Online", "Offline", "Contact"].map((item) => (
            <li
              key={item}
              onClick={() => {
                setMenu(item);
                setIsOpen(false);
              }}
              className={menu === item ? "active" : ""}
            >
              <Link
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
