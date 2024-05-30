import React, { useEffect, useRef, useState } from "react";
import pose2 from "../assets/flying.png";
import know from "../assets/Group 9222.png";
import whiteVector from "../assets/WhiteVector.png";

function Achievement() {
  const achievementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.1, // Adjust this value to determine when the section should become visible
      }
    );

    if (achievementRef.current) {
      observer.observe(achievementRef.current);
    }

    return () => {
      if (achievementRef.current) {
        observer.unobserve(achievementRef.current);
      }
    };
  }, []);

  return (
    <div className={`achievement-container ${isVisible ? "visible" : ""}`} ref={achievementRef}>
      <h2 className="achievement-txt">We're Not new,</h2>
      <div className="achievement-main">
        <div className="achievement-img">
          <img className={`modelPose ${isVisible ? "visible" : ""}`} src={pose2} alt="" />
          <img className={`know ${isVisible ? "visible" : ""}`} src={know} alt="" />
          <span className={`know ${isVisible ? "visible" : ""}`}>Know more</span>
        </div>
        <div className={`achievement-containt ${isVisible ? "visible" : ""}`}>
          <h2 className="achiev-txt2">Already above</h2>
          <h2 className="achiev-txt3">
            the <span className="highlight">Surface</span>
          </h2>
          <div className="achievement-inner">
            <div className="inner-txt">
              <h2>24K</h2>
              <p>Projects <br /> Launched</p>
            </div>
            <div className="inner-txt">
              <h2>2.3M</h2>
              <p>Members in Community</p>
            </div>

            <div className="img-txt1">
              <img src={whiteVector} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievement;
