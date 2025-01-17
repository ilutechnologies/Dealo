import React from "react";
import videoSrc from '../assets/videos/Dealo_hero_video_preview 01.mp4';

const Hero = () => {
  return (
    <div className="video-container relative w-full h-screen overflow-hidden py-4">
      <div className="relative w-full h-full">
        <div className="w-full h-full ">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {/* <div className="content-overlay absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-80">
      </div> */}
    </div>
  );
};

export default Hero;