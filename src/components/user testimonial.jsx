import React from "react";
import Style from "../Styles/testimonial.module.css";
import VideoCarousel from "./videoCarousel";
import Astrologer from "./Astrologer";

const Testimonial = () => {
  return (
    <div className={Style.outSide}>
      <div className={Style.sun}>
        <img
          src="https://user-images.githubusercontent.com/99132893/232486732-e87e551d-1bd4-4c34-b00a-052f94ef8d75.png"
          alt="sun"
        />
      </div>
      <div className={Style.heading}>
        <img
          src="https://user-images.githubusercontent.com/99132893/232488929-b1d3abc9-f299-4e1a-a6fa-689bce962175.png"
          alt="star"
        />
        <span>User Testimonial</span>
        <img
          src="https://user-images.githubusercontent.com/99132893/232488929-b1d3abc9-f299-4e1a-a6fa-689bce962175.png"
          alt="star"
        />
      </div>
      <VideoCarousel />
      <img
        src="https://user-images.githubusercontent.com/99132893/232675632-cb398efb-c32c-4d63-ae07-caaf8ce3aeb5.jpg"
        alt="banner"
        className="w-full py-3 px-0 rounded-2xl p-3"
      />
       <div className={Style.pageIndicator}>
        <div className={Style.div1}></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={Style.outSide}>
      <div className={Style.heading}>
        <img
          src="https://user-images.githubusercontent.com/99132893/232488929-b1d3abc9-f299-4e1a-a6fa-689bce962175.png"
          alt="star"
        />
        <span>Premium Astrologers</span>
        <img
          src="https://user-images.githubusercontent.com/99132893/232488929-b1d3abc9-f299-4e1a-a6fa-689bce962175.png"
          alt="star"
        />
      </div>
      </div>
      <Astrologer/>
    </div>
  );
};

export default Testimonial;
