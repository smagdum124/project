import React, { useEffect, useRef } from "react";
import pose2 from "../assets/flying.png";
import know from "../assets/Group 9222.png";
import arrow from "../assets/Group 9268.png";
import rectangle from "../assets/Rectangle 4058.png";

function Achievement() {
  const achievementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
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
    <div className="achievement-container" ref={achievementRef}>
      <h2 className="achievement-txt">We're Not new,</h2>
      <div className="achievement-main">
        <div className="achievement-img">
          <img className="modelPose" src={pose2} alt="" />
          <img className="know" src={know} alt="" />
          <span>Know more</span>
        </div>
        <div className="achievement-containt">
          <h2 className="achiev-txt2">Already above</h2>
          <h2 className="achiev-txt3">
            <span>the</span> <span className="highlight">Surface</span>
          </h2>
          <div className="achievement-inner">
            <div className="img-txt">
              <img src={rectangle} alt="" />
              <div className="inner-txt">
                <h2>24K</h2>
                <p>Projects Launched</p>
              </div>
            </div>
            <div className="img-txt">
              <img src={rectangle} alt="" />
              <div className="inner-txt">
                <h2>24K</h2>
                <p>Projects Launched</p>
              </div>
            </div>

            <div className="img-txt1">
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievement;
