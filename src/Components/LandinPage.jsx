import React from "react";
import Header from "./Header";
import Card from "./Card";
import MainSection from "./MainSection";
// import Achievement from "./Achievment";
import HowToJoin from "./HowJoin";
import Collaborate from "./Collaborate";
import Future from "./Future";
import Footer from "./Footer"
import "./style.css"
import Acheivement from "./Acheivement";

function LandinPage() {
  return (
    <>
      <Header />
      {/* card component  */}
      <Card />
      {/* main section  */}
      <MainSection />
      {/* Achievment section  */}
      <Acheivement/>
      {/* how to join page  */}
      <HowToJoin />
      {/* collaborate page  */}
      <Collaborate />
      {/* future section  */}
      <Future />
      {/* footer  */}
      <div className="footer">
        <Footer/>
      </div>
    </>
  );
}

export default LandinPage;
