import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, FileText, Clock, ArrowRightCircle } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-xl p-8 text-white">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold mb-4">Welcome to Investor Update Auto-Drafter</h1>
          <p className="text-lg opacity-90 mb-6">
            Automatically generate investor updates using real metrics from your favorite tools,
            complete with verifiable citations. Save hours every month.
          </p>
          <Link 
            to="/generate" 
            className="inline-flex items-center px-5 py-2.5 bg-white text-primary-800 rounded-lg font-medium hover:bg-primary-50 transition-colors"
          >
            Create Your First Update
            <ArrowRightCircle size={18} className="ml-2" />
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow border border-gray-100 animate-slide-up">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
            <BarChart size={24} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Metrics Fetching</h3>
          <p className="text-gray-600">
            Automatically pull in data from Stripe, GitHub, Google Analytics, and Slack to back up your claims.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow border border-gray-100 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center text-secondary-600 mb-4">
            <FileText size={24} />
          </div>
          <h3 className="text-lg font-semibold mb-2">AI-Powered Drafting</h3>
          <p className="text-gray-600">
            Our AI crafts a professional update using your data, saving you hours of work each month.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow border border-gray-100 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center text-accent-600 mb-4">
            <Clock size={24} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Time Saving</h3>
          <p className="text-gray-600">
            What used to take 1-2 hours now takes just minutes. Focus on building, not reporting.
          </p>
        </div>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-card border border-gray-100">
        <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
        <div className="flex flex-col space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4">
              1
            </div>
            <div>
              <h3 className="font-medium">Connect your data sources</h3>
              <p className="text-gray-600 mt-1">Link your Stripe, GitHub, Google Analytics, and Slack accounts</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4">
              2
            </div>
            <div>
              <h3 className="font-medium">Configure your update</h3>
              <p className="text-gray-600 mt-1">Select the metrics to include and any custom fields</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4">
              3
            </div>
            <div>
              <h3 className="font-medium">Generate your investor update</h3>
              <p className="text-gray-600 mt-1">Review, edit, and export to Gmail or copy for your email client</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <Link 
            to="/settings" 
            className="inline-flex items-center px-4 py-2 border border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors"
          >
            Configure Integrations
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;