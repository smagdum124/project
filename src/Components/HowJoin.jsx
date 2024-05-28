import React, { useEffect, useRef } from "react";
import think from "../assets/think.png";
import cardVector from "../assets/Vector.png";
import signup from "../assets/signup.png";
import "./join.css";

function HowJoin() {
  const contentRef = useRef(null);

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
        threshold: 0.1, // Adjust this value to determine when the content should become visible
      }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div className="join_container">
      <div className="Join_content" ref={contentRef}>
        <div className="join_small_txt">
          <h2>How to Join?</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            dolores beatae quisquam consequatur aut dicta provident velit non
            illo odit?
          </p>
        </div>
        <div className="join_card">
          <div className="join_card1">
            <div className="card_txt">
              <h2>Sign up</h2>
              <h2>Step:1</h2>
            </div>
            <div className="center-img">
              <img src={signup} alt="" />
              <h3>Sign Up</h3>
            </div>
            <div className="card_txt0">
              <h2>Sign up to The System</h2>
              <img src={cardVector} alt="" />
            </div>
          </div>
          <div className="join_card2">
            <div className="card_txt">
              <h2>Fill Details</h2>
              <h2>Step:2</h2>
            </div>
            <div className="center-img2">
              {/* <img src={signup} alt="" /> */}
            </div>
            <div className="card_txt1">
              <h2>Fill all your details</h2>
              <img src={cardVector} alt="" />
            </div>
          </div>
          <div className="join_card3">
            <div className="card_txt">
              <h2>Verify</h2>
              <h2>Step:3</h2>
            </div>
            <div className="center-img3">
              {/* <img src={signup} alt="" /> */}
            </div>
            <div className="card_txt1">
              <h2>Verify your email</h2>
              <img src={cardVector} alt="" />
            </div>
          </div>
          <div className="join_card4">
            <div className="card_txt">
              <h2>Done!</h2>
              <h2>Step:4</h2>
            </div>
            <div className="center-img4">
              {/* <img src={signup} alt="" /> */}
            </div>
            <div className="card_txt1">
              <h2>Successfully Registered!</h2>
              <img src={cardVector} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="join_img">
        <img src={think} alt="" />
      </div>
    </div>
  );
}

export default HowJoin;
