  import React from "react";
  import message from "../assets/message.png"
  import telegram from "../assets/telegram.png";
  import twitter from "../assets/twitter.png";
  import discord from "../assets/discord.png";
  import logo from "../assets/Group 8763.png";
  import "./navbar.css";

  function NavBar() {
    return (
      <div className="header">
        <a href="#" className="icon">
          {/* <FaEnvelope /> */}
          <img src={message} alt="" />
        </a>
        <div className="logo">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="social-icons">
          <a href="#" className="icon">
            <img src={telegram} alt="" />
          </a>
          <a href="#" className="icon">
            <img src={twitter} alt="" />
          </a>
          <a href="#" className="icon">
            <img src={discord} alt="" />
          </a>
        </div>
      </div>
    );
  }

  export default NavBar;
