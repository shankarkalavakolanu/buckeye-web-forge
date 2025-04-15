
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface OfferCardProps {
  title: string;
  image: string;
  description: string;
}

const OfferCard: React.FC<OfferCardProps> = ({ title, image, description }) => {
  return (
    <Card className="border-none shadow-none">
      <AspectRatio ratio={4/3} className="mb-4">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full rounded-md"
        />
      </AspectRatio>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <CardContent className="p-0">
        <p className="text-gray-800">{description}</p>
      </CardContent>
    </Card>
  );
};

const OfferSection = () => {
  return (
    <div className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12">WHAT WE OFFER</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <OfferCard 
            title="ENGINEERING EXPERIENCE"
            image="/lovable-uploads/ceeb9bb9-69c3-4c22-b81d-6390df029027.png"
            description="Across our sub teams, invaluable expertise is readily accessible at every stage of development, spanning software engineering, structural design, and electrical systems. This ensures a robust support network, fostering comprehensive project growth and innovation."
          />
          
          <OfferCard 
            title="PROFESSIONAL DEVELOPMENT PROGRAM"
            image="/lovable-uploads/0ad8d9d2-283d-48bb-8aa7-0ddfc3d61508.png"
            description="By engaging with industry mentors and companies, members can showcase their contributions, receive referrals to top firms, and enhance their networking skills during lecture series events. This fosters professional growth and opens doors to prestigious career opportunities."
          />
          
          <OfferCard 
            title="SOCIAL EVENTS"
            image="/lovable-uploads/0353419a-e136-4dbb-a214-077f62a40fe4.png"
            description="Throughout the year, social events like bowling and Top Golf will be organized to foster healthier relationships among team members and mentors. These activities aim to strengthen bonds and enhance team cohesion."
          />
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8">
          <img 
            src="/lovable-uploads/53aa652d-fe29-45ef-9a63-8160bf4ef62e.png" 
            alt="The Ohio State University College of Engineering" 
            className="h-16 object-contain"
          />
          
          <div className="flex gap-4">
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
            >
              X
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
