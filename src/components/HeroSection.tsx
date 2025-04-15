
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen bg-gray-400 bg-blend-overlay bg-opacity-20">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/lovable-uploads/cf45be80-44b7-44c3-b116-7d16c79fb0ae.png')" }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="mb-12">
          <img 
            src="/lovable-uploads/5e6cbe4e-5ddc-4aae-9236-9396f7bb7ee5.png" 
            alt="Buckeye Vertical Logo" 
            className="w-64 h-auto"
          />
        </div>
        <div className="text-center">
          <h1 className="text-6xl font-bold text-zinc-800 uppercase">Buckeye Vertical</h1>
          <p className="text-xl text-zinc-800 mt-2">AT THE OHIO STATE UNIVERSITY®</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
