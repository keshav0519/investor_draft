import React from 'react';
import { NavLink } from 'react-router-dom';
import { BarChart3, Home, FileText, Settings, MessageSquareQuote, LogOut, Mail } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden md:flex md:w-64 lg:w-72 flex-col bg-white border-r border-gray-200">
      <div className="p-6">
        <NavLink to="/" className="flex items-center">
          <Mail className="text-primary-600 mr-2" size={24} />
          <span className="text-xl font-semibold text-gray-900">Update Drafter</span>
        </NavLink>
        <p className="text-xs text-gray-500 mt-1">Investor updates with receipts</p>
      </div>
      
      <nav className="flex-1 px-4 pb-4">
        <div className="space-y-1">
          <p className="px-2 pt-5 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Main
          </p>
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => 
              `flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                isActive 
                  ? 'bg-primary-50 text-primary-700' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            <Home size={18} className="mr-3" />
            <span>Home</span>
          </NavLink>
          
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => 
              `flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                isActive 
                  ? 'bg-primary-50 text-primary-700' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            <BarChart3 size={18} className="mr-3" />
            <span>Dashboard</span>
          </NavLink>
          
          <NavLink 
            to="/generate" 
            className={({ isActive }) => 
              `flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                isActive 
                  ? 'bg-primary-50 text-primary-700' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            <FileText size={18} className="mr-3" />
            <span>Generate Update</span>
          </NavLink>
          
          <NavLink 
            to="/preview" 
            className={({ isActive }) => 
              `flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                isActive 
                  ? 'bg-primary-50 text-primary-700' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            <MessageSquareQuote size={18} className="mr-3" />
            <span>Preview</span>
          </NavLink>
        </div>
        
        <div className="space-y-1 mt-8">
          <p className="px-2 pt-5 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Settings
          </p>
          <NavLink 
            to="/settings" 
            className={({ isActive }) => 
              `flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                isActive 
                  ? 'bg-primary-50 text-primary-700' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`
            }
          >
            <Settings size={18} className="mr-3" />
            <span>Settings</span>
          </NavLink>
        </div>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center px-3 py-2 w-full text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <LogOut size={18} className="mr-3" />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;