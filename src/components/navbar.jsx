import React from "react";
import Style from "../Styles/navbar.module.css";
import MenuBarForMobile from "./MenuBarForMObile";

const Navbar = () => {
  return (
    <div className={Style.navbar}>
      <div className={Style.menuIcon}>
        {/* <i className="fa-solid fa-bars"></i> */}
        <MenuBarForMobile />
      </div>
      <div className={Style.navbarLogo}>
        <img
          src="https://user-images.githubusercontent.com/99132893/232487978-470f10f8-1077-4fc2-b691-c9ed4859dd21.jpg"
          alt="web-logo"
        />&nbsp;
        <span>Guruji</span>
      </div>
      <div className={Style.menu}>
        <p>Home</p>
        <p>Call with Astrologer</p>
        <p>Live(Comming Soon)</p>
      </div>
      <div className={Style.user}>
        <img
          src="https://avatars.githubusercontent.com/u/99132893?s=400&u=e3458f17919693e71c9ad3530dfc732edb092213&v=4"
          alt="user-profile-pic"
        />
      </div>
    </div>
  );
};

export default Navbar;
