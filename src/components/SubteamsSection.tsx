
import React from "react";
import { Button } from "@/components/ui/button";

interface SubteamCardProps {
  title: string;
  image: string;
  caption: string;
  description: React.ReactNode;
}

const SubteamCard: React.FC<SubteamCardProps> = ({ title, image, caption, description }) => {
  return (
    <div className="bg-gray-100 rounded-sm">
      <h3 className="text-2xl font-bold text-center py-6">{title}</h3>
      <div className="bg-white p-4">
        <img src={image} alt={title} className="w-full h-64 object-contain mb-4" />
        <p className="text-center text-lg mb-4">{caption}</p>
        <div className="min-h-48 mb-6">
          {description}
        </div>
        <Button variant="outline" className="w-full py-6 rounded-none border-black">
          Learn More
        </Button>
      </div>
    </div>
  );
};

const SubteamsSection = () => {
  return (
    <div className="w-full py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12">SUBTEAMS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SubteamCard 
            title="STRUCTURES"
            image="/lovable-uploads/df303ba3-1acc-4732-b4a6-5bea4e9a0cee.png"
            caption="CAD of Air Brutus 1"
            description={
              <p>
                <span className="font-bold">Designing, manufacturing,</span> and <span className="font-bold">assembling</span> autonomous vehicle using <span className="font-bold">CAD/CAM/Simulation</span> and <span className="font-bold">advanced manufacturing techniques</span>
              </p>
            }
          />
          
          <SubteamCard 
            title="SOFTWARE"
            image="/placeholder.svg"
            caption="Object Detection Model"
            description={
              <p>
                Developing robust <span className="font-bold">AI, computer vision,</span> and <span className="font-bold">autonomous navigation algorithms</span> using advanced sensor technologies.
              </p>
            }
          />
          
          <SubteamCard 
            title="AVIONICS"
            image="/placeholder.svg"
            caption="Soldering Avionics System"
            description={
              <p>
                Concentrate on configuring <span className="font-bold">electronic systems</span>(GPS, telemetry, power distribution, propulsion, etc) on autonomous vehicle.
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SubteamsSection;
