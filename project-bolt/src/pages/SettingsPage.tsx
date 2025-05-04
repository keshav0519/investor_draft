import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { ExternalLink, AlertCircle, Check, X } from 'lucide-react';

interface IntegrationProps {
  name: string;
  icon: React.ReactNode;
  description: string;
  isConnected: boolean;
  lastSynced?: string;
  onConnect?: () => void;
  onDisconnect?: () => void;
}

const Integration: React.FC<IntegrationProps> = ({ 
  name, 
  icon, 
  description, 
  isConnected, 
  lastSynced,
  onConnect,
  onDisconnect
}) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center">
          <div className="mr-3 text-xl">{icon}</div>
          <div>
            <h3 className="font-medium">{name}</h3>
            {isConnected ? (
              <span className="inline-flex items-center text-xs text-green-600">
                <Check size={12} className="mr-1" />
                Connected
                {lastSynced && ` · Last synced ${lastSynced}`}
              </span>
            ) : (
              <span className="inline-flex items-center text-xs text-gray-500">
                <X size={12} className="mr-1" />
                Not connected
              </span>
            )}
          </div>
        </div>
        
        <button 
          onClick={isConnected ? onDisconnect : onConnect}
          className={`px-3 py-1.5 rounded text-sm font-medium ${
            isConnected 
              ? 'text-red-600 border border-red-200 hover:bg-red-50' 
              : 'bg-primary-600 text-white hover:bg-primary-700'
          }`}
        >
          {isConnected ? 'Disconnect' : 'Connect'}
        </button>
      </div>
      
      <div className="p-4">
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        
        {!isConnected && (
          <div className="flex items-start bg-amber-50 text-amber-800 p-3 rounded-lg text-sm mb-3">
            <AlertCircle size={16} className="mr-2 mt-0.5 flex-shrink-0" />
            <p>
              You'll need to connect this integration to automatically fetch metrics.
            </p>
          </div>
        )}
        
        <a 
          href="#" 
          className="text-sm text-primary-600 hover:text-primary-800 inline-flex items-center"
        >
          <ExternalLink size={14} className="mr-1" />
          {isConnected ? 'View Dashboard' : 'Learn how to connect'}
        </a>
      </div>
    </div>
  );
};

const SettingsPage: React.FC = () => {
  const sheetsLogin = useGoogleLogin({
    onSuccess: (response) => {
      console.log('Google Sheets connected:', response);
    },
    scope: 'https://www.googleapis.com/auth/spreadsheets.readonly',
  });

  const integrations = [
    {
      name: 'Google Analytics',
      icon: <span className="text-orange-500">📊</span>,
      description: 'Connect Google Analytics to automatically pull user engagement metrics like DAU, MAU, and session data.',
      isConnected: true,
      lastSynced: '6 hours ago'
    },
    {
      name: 'GitHub',
      icon: <span className="text-gray-700">🐙</span>,
      description: 'Connect GitHub to pull PR velocity, commit activity, and other engineering team metrics.',
      isConnected: true,
      lastSynced: '3 hours ago'
    },
    {
      name: 'Google Sheets',
      icon: <span className="text-green-500">📝</span>,
      description: 'Connect Google Sheets to pull financial metrics like burn rate and runway calculations.',
      isConnected: false,
      onConnect: () => sheetsLogin()
    }
  ];

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">
          Manage your integrations, preferences, and account settings.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-card border border-gray-200 overflow-hidden mb-8">
        <div className="border-b border-gray-200 px-6 py-4">
          <h2 className="text-lg font-medium">Integrations</h2>
        </div>
        
        <div className="p-6 space-y-6">
          {integrations.map((integration, index) => (
            <Integration
              key={index}
              name={integration.name}
              icon={integration.icon}
              description={integration.description}
              isConnected={integration.isConnected}
              lastSynced={integration.lastSynced}
              onConnect={integration.onConnect}
              onDisconnect={integration.onDisconnect}
            />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-card border border-gray-200 overflow-hidden mb-8">
        <div className="border-b border-gray-200 px-6 py-4">
          <h2 className="text-lg font-medium">Account Settings</h2>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <input 
              type="text" 
              id="name"
              defaultValue="Acme, Inc."
              className="w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input 
              type="email" 
              id="email"
              defaultValue="founder@acme.com"
              className="w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="investor-list" className="block text-sm font-medium text-gray-700 mb-1">
              Default Investor Recipients
            </label>
            <textarea 
              id="investor-list"
              rows={3}
              defaultValue="investors@acme.com, john@vc.com, sarah@angelinvestor.com"
              className="w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 focus:border-primary-500 focus:ring-primary-500"
              placeholder="Enter email addresses separated by commas"
            />
            <p className="text-xs text-gray-500 mt-1">
              These recipients will be pre-filled when generating updates.
            </p>
          </div>
          
          <div>
            <button className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors">
              Save Settings
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-card border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200 px-6 py-4">
          <h2 className="text-lg font-medium">Update Preferences</h2>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Monthly Update Schedule</h3>
              <p className="text-sm text-gray-600 mt-1">Automatically prepare drafts on a schedule</p>
            </div>
            <div className="relative">
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Citation Links</h3>
              <p className="text-sm text-gray-600 mt-1">Include source links in your updates</p>
            </div>
            <div className="relative">
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Email Notifications</h3>
              <p className="text-sm text-gray-600 mt-1">Receive notifications for update activity</p>
            </div>
            <div className="relative">
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;