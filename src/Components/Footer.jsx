  import React from "react";
  import message from "../assets/message.png";
  import telegram from "../assets/telegram.png";
  import twitter from "../assets/twitter.png";
  import discord from "../assets/discord.png";
  import logo from "../assets/Group 8763.png";
  import "./footer.css";

  function Footer() {
    return (
      <div className="headerf">
        <a href="#" className="iconf">
          <img src={message} alt="Description" className="hover-effect" />
        </a>

        <div className="logof">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        <div className="social-iconsf">
          <a href="#" className="iconf">
            <img style={{marginRight:"0.5rem"}}  src={telegram} alt="" className="hover-effect" />
          </a>
          <a href="#" className="iconf">
            <img src={twitter} alt="" className="hover-effect" />
          </a>
          <a href="#" className="iconf">
            <img src={discord} alt="" className="hover-effect" />
          </a>
        </div>
        
        <a href="#" className="rightsf">
          All rights reserved
        </a>
      </div>
    );
  }

  export default Footer;
