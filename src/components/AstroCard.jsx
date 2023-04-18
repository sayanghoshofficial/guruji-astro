import React from "react";
import style from "../Styles/astrocard.module.css";

const AstroCard = ({ children: slide }) => {
  return (
    <>
      <div className={style.cardBox}>
        {slide.map((s, i) => (
          <div key={i}>
            <div
              className={style.singleCard}
              style={{ backgroundImage: `url(${s.props.src})` }}
            >
              <div className={style.expAndOnlineIndicator}>
                <span>10+ Years</span>
                <div className={style.online}>
                  <div className={style.dot}></div>
                  <p>Online</p>
                </div>
              </div>
              <div className={style.priceBox}>
                <p>price</p>
                <span>
                  <i className="fa-solid fa-indian-rupee-sign">10</i>/min
                </span>
              </div>
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
                  <i className="fa-solid fa-phone"></i>
                  Call
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AstroCard;
