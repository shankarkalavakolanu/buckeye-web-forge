
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const JoinSection = () => {
  return (
    <div className="relative w-full py-32">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-black bg-opacity-60"
        style={{ backgroundImage: "url('/placeholder.svg')" }}
      ></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-6xl font-bold text-white mb-10">INTERESTED IN JOINING?</h2>
        <p className="text-xl text-white mb-12 max-w-4xl mx-auto">
          Are you ready to challenge yourself? Whether you're skilled in 
          engineering or are interested in Drones/Unmanned Aerial Systems, 
          there's a place for you here.
        </p>
        
        <Link to="/get-involved">
          <Button className="bg-red-600 hover:bg-red-700 text-white text-lg py-6 px-10">
            Get Involved
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default JoinSection;
