
import Navigation from '@/components/Navigation';

const Season = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold">24-25 Season</h1>
        <p className="mt-4">Current season information will be displayed here.</p>
      </div>
    </div>
  );
};

export default Season;
