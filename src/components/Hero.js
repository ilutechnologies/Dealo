import React, { useState } from "react";
import videoSrc from '../assets/videos/Dealo Web Video_Final_ HD.m4v';
import Sidebar from './Sidebar';

const Hero = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSecondaryButtonClick = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="relative w-full h-screen flex flex-col  items-left overflow-hidden py-4">
      <div className="px-4 py-2 container mx-auto relative h-auto">
        <video autoPlay loop muted playsInline className="w-full h-auto object-cover">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="mt-8 justify-center flex gap-4">
        <button className="px-6 py-2 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-700 transition">
          Primary Button
        </button>
        <button onClick={handleSecondaryButtonClick} className="px-6 py-2 bg-gray-500 text-white font-bold rounded-full hover:bg-gray-700 transition">
          Secondary Button
        </button>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </div>
  );
};

export default Hero;