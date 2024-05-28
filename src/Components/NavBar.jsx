import React from "react";
import {
    FaTelegramPlane,
    FaTwitter,
    FaDiscord,
    FaEnvelope,
  } from "react-icons/fa";
  
import logo from "../assets/Group 8763.png";
import "./style.css";

function NavBar() {
  return (
    <div className="header">
      <a href="#" className="icon">
        <FaEnvelope />
      </a>
      <div className="logo">
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="social-icons">
        <a href="#" className="icon">
          <FaTelegramPlane />
        </a>
        <a href="#" className="icon">
          <FaTwitter />
        </a>
        <a href="#" className="icon">
          <FaDiscord />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
