import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, HelpCircle, Bell } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center">
          <Link to="/" className="md:hidden flex items-center">
            <span className="text-xl font-semibold text-primary-800">Update Drafter</span>
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-1.5 text-gray-500 hover:text-primary-600 transition-colors">
            <Bell size={20} />
          </button>
          <button className="p-1.5 text-gray-500 hover:text-primary-600 transition-colors">
            <HelpCircle size={20} />
          </button>
          <Link to="/settings" className="p-1.5 text-gray-500 hover:text-primary-600 transition-colors">
            <Settings size={20} />
          </Link>
          <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 font-medium">
            JD
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;