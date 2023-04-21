import React from 'react'
import Style from '../Styles/testimonial.module.css'
import style from '../Styles/userReview.module.css';
import { reviews } from '../data/data';
import Review from './Review';


const UserReview = () => {
  return (
    <div className={style.userReviewOuterDiv}>
        <div className={Style.heading}>
        <img
          src="https://user-images.githubusercontent.com/99132893/232488929-b1d3abc9-f299-4e1a-a6fa-689bce962175.png"
          alt="star"
        />
        <span>User Review</span>
        <img
          src="https://user-images.githubusercontent.com/99132893/232488929-b1d3abc9-f299-4e1a-a6fa-689bce962175.png"
          alt="star"
        />
      </div>
      <div className={style.reviewBox}>
        
        <Review>
            {reviews.map((r,i)=>(r))}
        </Review>
      </div>
      
    </div>
  )
}

export default UserReview
