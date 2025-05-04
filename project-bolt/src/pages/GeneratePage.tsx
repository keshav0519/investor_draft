import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, AlertCircle, ArrowRight, Check, Mail } from 'lucide-react';
import { useGoogleLogin } from '@react-oauth/google';
import GmailIntegration from '../components/GmailIntegration';

interface MetricSource {
  name: string;
  id: string;
  connected: boolean;
  icon: React.ReactNode;
  metricName: string;
  sampleValue: string;
  manualInputEnabled: boolean;
  onConnect?: () => void;
}

const GeneratePage: React.FC = () => {
  const navigate = useNavigate();
  const [manualInputs, setManualInputs] = useState<Record<string, string>>({});
  const [askInput, setAskInput] = useState('');
  const [isGmailConnected, setIsGmailConnected] = useState(false);

  const sheetsLogin = useGoogleLogin({
    onSuccess: async (response) => {
      console.log('Google Sheets connected:', response);
    },
    scope: 'https://www.googleapis.com/auth/spreadsheets.readonly',
  });
  
  const metricSources: MetricSource[] = [
    {
      name: 'Gmail',
      id: 'gmail',
      connected: isGmailConnected,
      icon: <Mail className="text-blue-500" size={24} />,
      metricName: 'Previous Updates',
      sampleValue: isGmailConnected ? 'Connected' : 'Connect to view updates',
      manualInputEnabled: false,
      onConnect: () => {} // Handled by GmailIntegration component
    },
    {
      name: 'Google Analytics',
      id: 'ga4',
      connected: true,
      icon: <span className="text-orange-500">📊</span>,
      metricName: 'Daily Active Users (DAU)',
      sampleValue: '1,283 (+25%)',
      manualInputEnabled: false
    },
    {
      name: 'GitHub',
      id: 'github',
      connected: true,
      icon: <span className="text-gray-700">🐙</span>,
      metricName: 'Merged PRs (Last 30 days)',
      sampleValue: '23',
      manualInputEnabled: false
    },
    {
      name: 'Google Sheets',
      id: 'gsheets',
      connected: false,
      icon: <span className="text-green-500">📝</span>,
      metricName: 'Cash Runway (months)',
      sampleValue: '11.2 months',
      manualInputEnabled: true,
      onConnect: () => sheetsLogin()
    }
  ];

  const handleManualInputChange = (id: string, value: string) => {
    setManualInputs({
      ...manualInputs,
      [id]: value
    });
  };

  const handleGenerate = () => {
    navigate('/preview');
  };

  const handleGmailConnectionChange = (connected: boolean) => {
    setIsGmailConnected(connected);
  };

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Generate Investor Update</h1>
        <p className="text-gray-600">
          Pull data from your connected sources or add metrics manually to create your investor update.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-card border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200 px-6 py-4">
          <h2 className="text-lg font-medium">Data Sources & Metrics</h2>
        </div>
        
        <div className="p-6 space-y-6">
          {metricSources.map((source) => (
            <div key={source.id} className="border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200 rounded-t-lg">
                <div className="flex items-center">
                  <div className="mr-3">{source.icon}</div>
                  <div>
                    <h3 className="font-medium">{source.name}</h3>
                    {source.connected ? (
                      <span className="inline-flex items-center text-xs text-green-600">
                        <Check size={12} className="mr-1" />
                        Connected
                      </span>
                    ) : (
                      <span className="inline-flex items-center text-xs text-gray-500">
                        Not connected
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="mb-2">
                  <label htmlFor={source.id} className="block text-sm font-medium text-gray-700 mb-1">
                    {source.metricName}
                  </label>
                  
                  {source.id === 'gmail' ? (
                    <GmailIntegration onConnectionChange={handleGmailConnectionChange} />
                  ) : source.connected && !source.manualInputEnabled ? (
                    <div className="flex items-center">
                      <input 
                        type="text" 
                        id={source.id}
                        value={source.sampleValue}
                        readOnly
                        className="w-full rounded-md border-gray-300 bg-gray-50 py-2 px-3 text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      />
                      <div className="ml-2 text-xs text-green-600 whitespace-nowrap">
                        Auto-fetched
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start">
                      <input 
                        type="text" 
                        id={source.id}
                        placeholder={source.sampleValue}
                        value={manualInputs[source.id] || ''}
                        onChange={(e) => handleManualInputChange(source.id, e.target.value)}
                        className="w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                      />
                      {!source.connected && (
                        <div className="ml-2 text-amber-500 flex items-start mt-2">
                          <AlertCircle size={16} className="mr-1" />
                          <span className="text-xs">Manual input required</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          <div className="border border-gray-200 rounded-lg">
            <div className="p-4 bg-gray-50 border-b border-gray-200 rounded-t-lg">
              <h3 className="font-medium">Additional Information</h3>
            </div>
            <div className="p-4">
              <div>
                <label htmlFor="asks" className="block text-sm font-medium text-gray-700 mb-1">
                  Asks/Help Needed
                </label>
                <textarea
                  id="asks"
                  rows={3}
                  placeholder="e.g., Looking for 2 intros to fintech security buyers"
                  value={askInput}
                  onChange={(e) => setAskInput(e.target.value)}
                  className="w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 px-6 py-4 flex justify-end">
          <button
            onClick={handleGenerate}
            className="inline-flex items-center px-5 py-2.5 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Generate Update
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneratePage;