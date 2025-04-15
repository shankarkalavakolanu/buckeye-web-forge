
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Leadership from "./pages/Leadership";
import Subteams from "./pages/Subteams";
import LectureSeries from "./pages/LectureSeries";
import Season from "./pages/Season";
import PastSeasons from "./pages/PastSeasons";
import IndustryPartners from "./pages/IndustryPartners";
import GetInvolved from "./pages/GetInvolved";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/subteams" element={<Subteams />} />
          <Route path="/lecture-series" element={<LectureSeries />} />
          <Route path="/season" element={<Season />} />
          <Route path="/past-seasons" element={<PastSeasons />} />
          <Route path="/industry-partners" element={<IndustryPartners />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
