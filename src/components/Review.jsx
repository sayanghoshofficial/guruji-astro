import React, { useState } from "react";
import style from "../Styles/userReview.module.css";
import "../Styles/review.css";

const Review = ({ children: reviews }) => {
    {console.log(reviews[0].image)}
  return (
    <div className={style.carouselContainer}>
      <div className={style.rating}>
        <img
          src="https://user-images.githubusercontent.com/99132893/233127177-90205a5e-dfa5-4e53-bcaf-543588570e89.png"
          alt="star1"
        />
        <img
          src="https://user-images.githubusercontent.com/99132893/233127177-90205a5e-dfa5-4e53-bcaf-543588570e89.png"
          alt="star2"
        />
        <img
          src="https://user-images.githubusercontent.com/99132893/233127177-90205a5e-dfa5-4e53-bcaf-543588570e89.png"
          alt="star3"
        />
        <img
          src="https://user-images.githubusercontent.com/99132893/233127177-90205a5e-dfa5-4e53-bcaf-543588570e89.png"
          alt="star4"
        />
        <img
          src="https://user-images.githubusercontent.com/99132893/233127731-79ddaca6-7b5b-4bed-aff2-b633176a2b50.png"
          alt="star5"
        />
      </div>
      <div className={style.contain}>
        Explore the Mysteries of the Universe with Our Expert Astrology Services
        Explore the Mysteries of the Universe with Our Expert Astrology
        ServicesExplore the Mysteries of the Universe with
      </div>
      <div className={style.userImageList}>
        <div className={style.inActiveReview}>
            <img src={reviews[0].image}/>
        </div>
        <div className={style.inActiveReview}></div>
        <div className={style.inActiveReview}></div>
        <div className={style.activeReview}></div>
        <div className={style.inActiveReview}></div>
        <div className={style.inActiveReview}></div>
        <div className={style.inActiveReview}></div>
      </div>
    </div>
  );
};

export default Review;
