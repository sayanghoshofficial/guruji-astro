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
          <img
            src="https://user-images.githubusercontent.com/99132893/232845278-39876f4c-e0dc-4a2c-a893-8f5a9135d9bd.png"
            alt="support"
          />{" "}
          <p>24x7 Cutomer Support</p>
        </div>
        <div className={Style.iconBox}>
          <img
            src="https://user-images.githubusercontent.com/99132893/232846080-fd5c7bee-8421-4e1e-beb9-10a0df569600.png"
            alt="refund"
          />
          <p>100% Refund if Unsatisfied</p>
        </div>
        <div className={Style.iconBox}>
          <img
            src="https://user-images.githubusercontent.com/99132893/232846584-39cd7085-180a-4ddd-8fc0-eba2a4ab918f.png"
            alt="secure"
          />{" "}
          <p>Private & Confidential</p>
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
