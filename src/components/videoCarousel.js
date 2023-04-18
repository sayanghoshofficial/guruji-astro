import React from "react";
import { videoSlide } from "../data/data";
import Carousel from "./Carousel";

const VideoCarousel = () => {
  return (
    <>
      <div className="max-w-lg p-3">
        <Carousel>
          {videoSlide.map((v,i)=>(
            <video className="rounded-2xl" src={v} key={i} autoPlay muted loop/>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default VideoCarousel;
