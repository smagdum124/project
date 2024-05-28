import React, { useEffect, useRef } from "react";
import logo1 from "../assets/logos/logo1.png";
import logo2 from "../assets/logos/logo2.png";
import logo3 from "../assets/logos/logo3.png";
import logo4 from "../assets/logos/logo4.png";
import logo5 from "../assets/logos/logo5.png";

function LogoComp() {
  const logoRef = useRef(null);

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

    if (logoRef.current) {
      observer.observe(logoRef.current);
    }

    return () => {
      if (logoRef.current) {
        observer.unobserve(logoRef.current);
      }
    };
  }, []);

  return (
    <div className="logo_container visible" ref={logoRef}>
      <img src={logo1} alt="Logo 1" />
      <img src={logo2} alt="Logo 2" />
      <img src={logo3} alt="Logo 3" />
      <img src={logo4} alt="Logo 4" />
      <img src={logo5} alt="Logo 5" />
    </div>
  );
}

export default LogoComp;
