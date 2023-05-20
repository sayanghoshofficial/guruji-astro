import React from "react";
import { slide } from "../data/data";
import AstroCard from "./AstroCard";

const Astrologer = () => {
 
  return (
    <div className="w-full ">
      <AstroCard >
        {slide.map((s, i) => (
          <img src={s} alt="astologer" key={i} />
        ))}
      </AstroCard>
    </div>
  );
};

export default Astrologer;
