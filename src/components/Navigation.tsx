import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="absolute top-0 w-full z-10 px-6">
      <div className="relative container mx-auto flex items-center justify-center py-4">
        {/* Logo on the left (larger size) with top padding */}
        <Link to="/" className="absolute left-0 top-6 hover:opacity-80">
          <img
            src="/lovable-uploads/BV Transparent Cropped.png"
            alt="Buckeye Vertical Logo"
            className="h-20 w-auto"
          />
        </Link>

        {/* Navigation Links (centered) */}
        <ul className="flex space-x-6 text-white uppercase tracking-wider text-sm font-medium">
          <li className="hover:opacity-80">
            <Link to="/leadership">LEADERSHIP</Link>
          </li>
          <li className="flex items-center hover:opacity-80">
            <Link to="/subteams" className="flex items-center">
              SUBTEAMS <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
          </li>
          <li className="hover:opacity-80">
            <Link to="/lecture-series">LECTURE SERIES</Link>
          </li>
          <li className="flex items-center hover:opacity-80">
            <Link to="/season" className="flex items-center">
              24-25 SEASON <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
          </li>
          <li className="hover:opacity-80">
            <Link to="/past-seasons">PAST SEASONS</Link>
          </li>
          <li className="hover:opacity-80">
            <Link to="/industry-partners">INDUSTRY PARTNERS</Link>
          </li>
          <li className="hover:opacity-80">
            <Link to="/get-involved">GET INVOLVED</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
