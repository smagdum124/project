import React from "react";
import Header from "./Header";
import Card from "./Card";
import MainSection from "./MainSection";
// import Achievement from "./Achievment";
import HowToJoin from "./HowJoin";
import Collaborate from "./Collaborate";
import Future from "./Future";
import NavBar from "./NavBar";
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
      {/* <Achievement /> */}
      <Acheivement/>
      {/* how to join page  */}
      <HowToJoin />
      {/* collaborate page  */}
      <Collaborate />
      {/* future section  */}
      <Future />
      {/* footer  */}
      <div className="footer">
        <NavBar />
      </div>
    </>
  );
}

export default LandinPage;
