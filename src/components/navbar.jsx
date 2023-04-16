import React from "react";
import Style from '../Styles/navbar.module.css';

const Navbar = () => {
  return (
    <div className={Style.navbar}>
      <div className={Style.navbarLogo}>
        <img
          src="https://media.glassdoor.com/sqll/4755382/guruji-astro-squarelogo-1645176134551.png"
          alt="web-logo"
        />
       <span>Guruji</span> 
      </div>
      <div className={Style.menu}>
        <p>Home</p>
        <p>Call with Astrologer</p>
        <p>live(Comming Soon)</p>
      </div>
      <div className={Style.user}><img src=""/></div>
    </div>
  );
};

export default Navbar;
