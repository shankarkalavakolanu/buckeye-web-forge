
import Navigation from '@/components/Navigation';
import SubteamsSection from '@/components/SubteamsSection';

const Subteams = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold mb-8">Subteams</h1>
        <SubteamsSection />
      </div>
    </div>
  );
};

export default Subteams;
