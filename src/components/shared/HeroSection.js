import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12 bg-gray-800 px-32 pt-32 pb-20">
      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img
          src={
            "https://github.com/mdalmamunit427/build-full-stack-book-store-mern-app/blob/main/frontend/src/assets/banner.png?raw=true"
          }
          alt=""
        />
      </div>

      <div className="md:w-1/2 w-full text-white">
        <h1 className="md:text-6xl text-2xl font-semibold mb-7">
          New Releases This Week
        </h1>
        <p className="mb-10">
          It's time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this week's new releases offer something for
          everyone
        </p>

        <button class="overflow-hidden relative w-44 p-2 h-12 bg-white text-gray-900 border-none rounded-md text-xl font- cursor-pointer relative z-10 group">
          Explore Now
          <span class="absolute w-48 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
          <span class="absolute w-48 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
          <span class="absolute w-48 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
          <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
          Explore Now
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
