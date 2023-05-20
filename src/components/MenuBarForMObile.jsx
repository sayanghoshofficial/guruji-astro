import React, { useState } from "react";

const MenuBarForMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="mobile-container">
      <div className="topnav">
        <a href="#home" className="active">
          <i
            className="fa fa-bars"
            style={{ display: isMenuOpen ? "none" : "inline" }}
          ></i>
        </a>
        <div
          id="myLinks"
          className={isMenuOpen ? "topnav-links show" : "topnav-links hide"}
        >
          <a href="#">Home</a>
          <a href="#">Call with Astrologer</a>
          <a href="#">live(Coming Soon)</a>
        </div>
        <a href="#" className="icon" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </div>
  );
};

export default MenuBarForMobile;
