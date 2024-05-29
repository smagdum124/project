import React from "react";
import {
  FaTelegramPlane,
  FaTwitter,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";

import logo from "../assets/Group 8763.png";
import "./footer.css";

function Footer() {
  return (
      <div className="headerf">
        <a href="#" className="iconf">
          <FaEnvelope />
        </a>
        <div className="logof">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="social-iconsf">
          <a href="#" className="iconf">
            <FaTelegramPlane />
          </a>
          <a href="#" className="iconf">
            <FaTwitter />
          </a>
          <a href="#" className="iconf">
            <FaDiscord />
          </a>
        
        </div>
        <a href="#" className="rightsf">
            All rights reserved
          </a>
      </div>
  );
}

export default Footer;
