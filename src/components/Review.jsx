import React, { useState } from "react";
import style from "../Styles/userReview.module.css";
import { ChevronLeft, ChevronRight } from "react-feather";

const Review = ({ children: reviews }) => {
  const [activeIndex, setActiveIndex] = useState(3);
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  return (
    <>
    <div className={style.chevron}>
      <div className={style.ChevronSide} onClick={handlePrev}><ChevronLeft/></div>
      <div className={style.ChevronSide} onClick={handleNext}><ChevronRight/></div>
      
    </div>
    <div className={style.carouselContainer}>
      <div className={style.rating}>
        <img
          src={
            reviews[activeIndex].rating >= 1
              ? "https://user-images.githubusercontent.com/99132893/233127177-90205a5e-dfa5-4e53-bcaf-543588570e89.png"
              : "https://user-images.githubusercontent.com/99132893/233127731-79ddaca6-7b5b-4bed-aff2-b633176a2b50.png"
          }
          alt="star1"
        />
        <img
          src={
            reviews[activeIndex].rating >= 2
              ? "https://user-images.githubusercontent.com/99132893/233127177-90205a5e-dfa5-4e53-bcaf-543588570e89.png"
              : "https://user-images.githubusercontent.com/99132893/233127731-79ddaca6-7b5b-4bed-aff2-b633176a2b50.png"
          }
          alt="star2"
        />
        <img
          src={
            reviews[activeIndex].rating >= 3
              ? "https://user-images.githubusercontent.com/99132893/233127177-90205a5e-dfa5-4e53-bcaf-543588570e89.png"
              : "https://user-images.githubusercontent.com/99132893/233127731-79ddaca6-7b5b-4bed-aff2-b633176a2b50.png"
          }
          alt="star3"
        />
        <img
          src={
            reviews[activeIndex].rating >= 4
              ? "https://user-images.githubusercontent.com/99132893/233127177-90205a5e-dfa5-4e53-bcaf-543588570e89.png"
              : "https://user-images.githubusercontent.com/99132893/233127731-79ddaca6-7b5b-4bed-aff2-b633176a2b50.png"
          }
          alt="star4"
        />
        <img
          src={
            reviews[activeIndex].rating === 5
              ? "https://user-images.githubusercontent.com/99132893/233127177-90205a5e-dfa5-4e53-bcaf-543588570e89.png"
              : "https://user-images.githubusercontent.com/99132893/233127731-79ddaca6-7b5b-4bed-aff2-b633176a2b50.png"
          }
          alt="star5"
        />
      </div>
      <div className={style.contain}>{reviews[activeIndex].review}</div>
      <div className={style.name}><b>~{reviews[activeIndex].name}</b></div>
      <div className={style.userImageList}>
        {reviews.map((review, index) => (
          <div
            key={index}
            className={
              index === activeIndex ? style.activeReview : style.inActiveReview
            }
            onClick={() => setActiveIndex(index)}
          >
            <img src={review.image} alt="reviewer-img" />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Review;
