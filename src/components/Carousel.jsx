import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({ children: slide }) => {
  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slide.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slide.length - 1 ? 0 : curr + 1));
  return (
    <>
      {" "}
      <div className="overflow-hidden relative">
        <div
          className="w-56 rounded-lg  flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slide}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white w-12"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white w-12"
          >
            <ChevronRight size={40} />
          </button>
        </div>

        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {slide.map((_, i) => (
              <div key={i}
                className={`
            transition-all w-3 h-3 bg-white rounded-full
            ${curr === i ? "p-2" : "bg-opacity-50"}
          `}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
