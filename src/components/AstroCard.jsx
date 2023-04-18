import React from "react";
import style from "../Styles/astrocard.module.css";

const AstroCard = ({ children: slide }) => {
  console.log(slide.map((s) => console.log(s.props.src)));
  return (
    <>
      <div className={style.cardBox}>
        {slide.map((s) => (
          <>
            <div
              className={style.singleCard}
              style={{ backgroundImage: `url(${s.props.src})` }}
            >
              <div className={style.astroDetails}>
                <div className={style.rating}>
                  <i className="fa-solid fa-star"></i>4.5
                </div>
                <h3>Astrologer Ramraj</h3>
                <p>Specialties</p>
                <h5>Love, Business, Life </h5>
               <p>Skills</p> 
               <h5>Vedic Astrology, Kundali, </h5>
              </div>
              <div className={style.liveBox}>
                <i className="fa-regular fa-circle-play">
                  <div className={style.liveLetter}>Live</div>
                </i>
              </div>
              <div className={style.downCompo}>
                <div className={style.chat}>
                  <i className="fa-brands fa-rocketchat"></i>
                  Chat
                </div>
                <div className={style.call}>
                  <i class="fa-solid fa-phone"></i>
                  Call
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default AstroCard;
