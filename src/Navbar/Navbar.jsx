import React from "react";
import logo from "../images/logo.png";
import destination from "../images/destination.png";
import holiday from "../images/holidays.png";
import activity from "../images/activity.png";
import transfer from "../images/transfer.png";
import "./Navbar.css";
function Navbar({ setShowLogin, handleNavigation }) {
  return (
    <div className="navbar-main">
      <img src={logo} onClick={() => handleNavigation("holiday")} alt="Logo" className="navbar-logo" />
      <div className="navbar-center">
        <img src={holiday} alt="Holiday" className="navbar-icon" />
        <a href="#holidays" onClick={() => handleNavigation("holiday")}>Holiday</a>
         
        <img src={activity} alt="Activity" className="navbar-icon" />
        <a href="#activity" onClick={() => handleNavigation("activity")}>Activity</a>
        
        <img src={destination} alt="Destination" className="navbar-icon" />
        <a href="#destination" onClick={() => handleNavigation("destination")}>Destination</a>
        
        <img src={transfer} alt="Transfer" className="navbar-icon" />
        <a href="#transfer" onClick={() => handleNavigation("transfer")}>Transfer</a>
      </div>
      <div className="navbar-end">
        <a href="#blogs" onClick={() => handleNavigation("blog")}>Blogs</a>
        <a href="#about-us" onClick={() => handleNavigation("about")}>About Us</a>
        <a href="#contact-us">Contact Us</a>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
}
export default Navbar;





