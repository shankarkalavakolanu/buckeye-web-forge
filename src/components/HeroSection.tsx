import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background image without effects */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/lovable-uploads/drone_background_edited.JPG')" }}
      ></div>

      {/* Positioned Transparent BV Logo */}
      <div className="absolute left-0 right-0 z-10" style={{ top: "5%" }}>
        <div className="flex justify-center">
          <img
            src="/lovable-uploads/BV Transparent Logo.png"
            alt="Buckeye Vertical Logo"
            className="w-64 sm:w-80"
          />
        </div>
      </div>

      {/* Motto text positioned at the bottom */}
      <div className="absolute bottom-8 left-0 right-0 text-center z-10">
        <p className="text-white text-base sm:text-lg">
          Soaring beyond boundaries. Engineering tomorrow&apos;s skies.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
