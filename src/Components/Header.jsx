import React, { useRef, useEffect, useState } from "react";
import { FiArrowDownRight } from "react-icons/fi";
import hero from "../assets/Frame 9064.png";
import NavBar from "./NavBar";
import LogoComp from "./LogoComp";

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5 // Change the threshold as needed
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    // Clean up the observer
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

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
              <button className="button">Join now</button>
              <button className="button1">How to Join?</button>
            </div>
          </div>

          {/* Right side section */}
          <div className="hero-img" ref={heroRef}>
            <img
              src={hero}
              alt="Hero"
              className={isVisible ? "animate" : ""}
            />
          </div>
        </div>
      </div>
      <LogoComp />
    </>
  );
}

export default Header;
