import React, { useEffect, useRef } from "react";
import mainImg from "../assets/Group 9181.png";
import './style.css'; // Make sure this path is correct

function MainSection() {
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          contentRef.current.classList.add('visible');
        } else {
          contentRef.current.classList.remove('visible');
        }
      },
      { threshold: 0.1 }
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
    <div className="main-container">
      <div className="main-img">
        <img src={mainImg} alt="" />
      </div>
      <div className="main-content" ref={contentRef}>
        <div className="btn-group">
          <button className="activebtn">Engage</button>
          <button>Snapshot</button>
          <button>Lottery</button>
          <button>Contribution</button>
        </div>
        <div className="main-txt">
          <h2>Engage</h2>
          <span>Put all your idle coins to work.</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolor
            perspiciatis ducimus, eius totam quo. Praesentium alias iure,
            doloremque consectetur ratione ea consequuntur dignissimos. Eos
            quaerat harum consectetur aspernatur! Facere..
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
