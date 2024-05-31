import React, { useEffect, useRef } from "react";
import vector from "../assets/Group 9222.png";
import pose4 from "../assets/pose9 1.png";
import "./style.css"; // Ensure the CSS file is imported

function Collaborate() {
  const formRef = useRef(null);

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
        threshold: 0.1, // Adjust this value to determine when the form should become visible
      }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  return (
    <div className="collaborate_container">
      <div className="collab_img">
        <div className="collab-mail">
          <img className="vector" src={vector} alt="Vector Graphic" />
          <h3>Grab Mail</h3>
        </div>
        <img className="pose4" src={pose4} alt="Pose Graphic" />
      </div>
      <div className="collab_form" ref={formRef}>
        <h2>Let's Collaborate</h2>
        <form action="">
          <div className="input_row">
            <div className="input_group grid-item-1">
              <label htmlFor="name">NAME</label>
              <input id="name" type="text" placeholder="Your Name" />
            </div>
            <div className="input_group grid-item-2">
              <label htmlFor="subject">SUBJECT</label>
              <input id="subject" type="text" placeholder="Choose Subject" />
            </div>

            <div className="input_group grid-row2-item-1">
              <label htmlFor="email">BEHALF OF</label>
              <input id="email" type="email" placeholder="Personal" />
            </div>
            <div className="input_group grid-row2-item-2">
              <label htmlFor="phone">EMAIL</label>
              <input id="phone" type="text" placeholder="Email Address" />
            </div>
            <div className="input_group grid-row2-item-3">
              <label htmlFor="company">BEHALF OF</label>
              <input id="company" type="text" placeholder="Personal" />
            </div>

            <div className="input_group grid-item-1 wide">
              <label htmlFor="message">MESSAGE</label>
              <input id="message" type="text" placeholder="Start Typing here" />
            </div>
            <div className="input_group  button_group grid-item-2">
              <button type="submit">Submit now </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Collaborate;
