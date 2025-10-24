import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import mail from "../../assets/mail.svg"
import location from "../../assets/location.svg"
import phone from "../../assets/phone.svg"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="grid1">
          <div className="logo">
            vk
          </div>
          <p>Empowering developers with real-world tech skills through expert-led training.</p>
        </div>
        <div className="grid2">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/online">Online</Link>
            </li>
            <li>
              <Link to="/offline">Offline</Link>
            </li>
          </ul>
        </div>
        {/* Courses */}
        <div className="grid3">
          <h3>Popular Courses</h3>
          <ul className="space">
              <li >Java + DSA + Automation</li>
              <li>Git and GitHub</li>
              <li>Docker</li>
          </ul>
        </div>
        {/* Contact */}
        <div className="grid4">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <img src={mail} alt="" />
              <span>vamshitechworld@gmail.com</span>
            </li>
            <li>
              <img src={phone} alt="" />
              <span>91820 53783</span>
            </li>
            <li>
              <img src={location} alt="" />
              <span>lmd colony,thimmapur,karimnagar</span>
            </li>
          </ul>
        </div>
        <div className="right">
          <p>© 2025 Vamshi — All Rights Reserved</p>
        </div>
      </div>
      

    </footer>
  )
}

export default Footer
