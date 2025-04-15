
import Navigation from '@/components/Navigation';

const LectureSeries = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold">Lecture Series</h1>
        <p className="mt-4">Lecture series information will be displayed here.</p>
      </div>
    </div>
  );
};

export default LectureSeries;
