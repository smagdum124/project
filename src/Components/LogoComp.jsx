import React, { useEffect, useRef } from "react";
import logo1 from "../assets/logos/logo1.png";
import logo2 from "../assets/logos/logo2.png";
import logo3 from "../assets/logos/logo3.png";
import logo4 from "../assets/logos/logo4.png";
import logo5 from "../assets/logos/logo5.png";
import "./navbar.css"; // Ensure this path is correct

function LogoComp() {
  const logosRef = useRef([]);

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
        threshold: 0.1, // Adjust this value to determine when the logos should become visible
      }
    );

    logosRef.current.forEach((logo) => {
      if (logo) {
        observer.observe(logo);
      }
    });

    return () => {
      logosRef.current.forEach((logo) => {
        if (logo) {
          observer.unobserve(logo);
        }
      });
    };
  }, []);

  return (
    <div className="logo_container">
      {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`Logo ${index + 1}`}
          ref={(el) => (logosRef.current[index] = el)}
        />
      ))}
    </div>
  );
}

export default LogoComp;
