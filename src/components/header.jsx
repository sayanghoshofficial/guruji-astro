import React from "react";
import Navbar from "./navbar";
import Style from "../Styles/header.module.css";

const Header = () => {
  return (
    <div className={Style.mainHeader}>
      <Navbar />
      <div className={Style.header}>
        <h1>"Astrology for Clarity"</h1>
        <p>
          Your Name is a Vedic Astrologer and has expertise in Vaastu and Mantra
          Theraphy{" "}
        </p>
        <br />
        <button>Contact Now</button>
      </div>
      <div className={Style.headerFooter}>
        <div className={Style.iconBox}>
          <i className="fa-solid fa-headset"></i> <p>24x7 Cutomer Support</p>
        </div>
        <div className={Style.iconBox}>
          <i className="fa-solid fa-wallet"></i> <p>100% Refund if Unsatisfied</p>
        </div>
        <div className={Style.iconBox}>
          <i className="fa-solid fa-lock"></i> <p>Private & Confidential</p>
        </div>
        <div className={Style.iconBox}>
          <img
            src="https://user-images.githubusercontent.com/99132893/232265600-5a03d185-1c89-4dd4-9d02-491565d80add.png"
            alt="verified"
          />{" "}
          <p>Verified Astrologer</p>
        </div>
        <div className={Style.iconBox}>
          <img
            src="https://user-images.githubusercontent.com/99132893/232265922-d99b86ce-4eb8-4277-9ea3-4de68c7783ae.png"
            alt="verified"
          />{" "}
          <p>Secure Payment</p>
        </div>
      </div>
      <br />
      <div className={Style.pageIndicator}>
        <div className={Style.div1}></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
