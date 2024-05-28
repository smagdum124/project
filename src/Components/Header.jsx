import React from "react";
import { FiArrowDownRight } from "react-icons/fi";
import hero from "../assets/Frame 9064.png";
import GroupImage from "../assets/Group 9188.png";
import NavBar from "./NavBar";
import LogoComp from "./LogoComp";

function Header() {
  return (
    <>
      <div className="container">
        <NavBar />
        <div className="main">
          {/* Left side section */}
          <div className="content-group">
            <div className="content">
              <h1 className="content-txt">Future</h1>
              <FiArrowDownRight className="arrow-icon" />
            </div>
            <h1 className="content-txt2">of Launch</h1>
            <div className="button-group">
              <button className="button">Join Now</button>
              <button className="button1">How to Join?</button>
            </div>
          </div>

          {/* Right side section */}
          <div className="hero-img">
            <img src={hero} alt="Hero" />
          </div>
        </div>
      </div>
      {/* <div className="group-img">
        <img src={GroupImage} alt="" />
      </div> */}
      <LogoComp/>
    </>
  );
}

export default Header;
