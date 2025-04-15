
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import AboutSection from '@/components/AboutSection';
import SubteamsSection from '@/components/SubteamsSection';
import JoinSection from '@/components/JoinSection';
import OfferSection from '@/components/OfferSection';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <HeroSection />
      <MissionSection />
      <AboutSection />
      <SubteamsSection />
      <JoinSection />
      <OfferSection />
    </div>
  );
};

export default Index;
