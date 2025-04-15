
import React from "react";

const AboutSection = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img 
              src="/lovable-uploads/50061e60-cdb8-4a4c-a32f-7e4663d0dcd7.png" 
              alt="Buckeye Vertical Team" 
              className="w-full h-auto rounded"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-black mb-6">WE ARE BUCKEYE VERTICAL</h2>
            <p className="text-lg mb-4">
              Buckeye Vertical is Ohio State University's drone competition team. 
              We are committed to providing a comprehensive platform for members to 
              acquire knowledge and skills in <span className="font-bold">Unmanned Aerial Systems</span> while 
              developing cutting-edge technologies in <span className="font-bold">aerospace</span>, <span className="font-bold">robotics</span>, 
              and <span className="font-bold">computer science</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
