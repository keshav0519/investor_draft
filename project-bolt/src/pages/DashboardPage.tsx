import React from 'react';
import { BarChart3, TrendingUp, Users, GitPullRequest, Clock } from 'lucide-react';

const DashboardPage: React.FC = () => {
  // Sample data for demonstration
  const updateHistory = [
    { id: 1, date: 'June 5, 2025', metrics: 5, wordCount: 312, recipientCount: 8 },
    { id: 2, date: 'May 5, 2025', metrics: 5, wordCount: 287, recipientCount: 8 },
    { id: 3, date: 'April 5, 2025', metrics: 4, wordCount: 265, recipientCount: 7 },
    { id: 4, date: 'March 5, 2025', metrics: 3, wordCount: 227, recipientCount: 7 },
  ];

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">
          Overview of your investor update metrics and history.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-card border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-3">
              <TrendingUp size={20} />
            </div>
            <span className="text-sm font-medium text-gray-500">Current MRR</span>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-2xl font-bold">$34,700</p>
              <p className="text-green-600 text-sm">+11% from last month</p>
            </div>
            <div className="text-xs text-gray-500">
              Updated 2h ago
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-card border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center text-secondary-600 mr-3">
              <Users size={20} />
            </div>
            <span className="text-sm font-medium text-gray-500">Active Users</span>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-2xl font-bold">1,283</p>
              <p className="text-green-600 text-sm">+25% from last month</p>
            </div>
            <div className="text-xs text-gray-500">
              Updated 6h ago
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-card border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center text-accent-600 mr-3">
              <GitPullRequest size={20} />
            </div>
            <span className="text-sm font-medium text-gray-500">Merged PRs</span>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-2xl font-bold">23</p>
              <p className="text-gray-500 text-sm">Last 30 days</p>
            </div>
            <div className="text-xs text-gray-500">
              Updated 3h ago
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-card border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mr-3">
              <Clock size={20} />
            </div>
            <span className="text-sm font-medium text-gray-500">Cash Runway</span>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-2xl font-bold">11.2 months</p>
              <p className="text-amber-600 text-sm">-0.8 from last month</p>
            </div>
            <div className="text-xs text-gray-500">
              Manual input
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-card border border-gray-200">
          <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
            <h2 className="text-lg font-medium">Metric Trends</h2>
            <select className="text-sm border-gray-300 rounded-md focus:border-primary-500 focus:ring-primary-500">
              <option>Last 3 months</option>
              <option>Last 6 months</option>
              <option>Last year</option>
            </select>
          </div>
          <div className="p-6">
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-100">
              <div className="text-center text-gray-500">
                <BarChart3 size={36} className="mx-auto mb-2 opacity-50" />
                <p className="font-medium">Chart placeholder</p>
                <p className="text-sm mt-1">Monthly growth metrics would display here</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-card border border-gray-200">
          <div className="border-b border-gray-200 px-6 py-4">
            <h2 className="text-lg font-medium">Connected Sources</h2>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                <div className="flex items-center">
                  <span className="text-blue-500 mr-3">💳</span>
                  <span className="font-medium">Stripe</span>
                </div>
                <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">Connected</span>
              </div>
              
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                <div className="flex items-center">
                  <span className="text-orange-500 mr-3">📊</span>
                  <span className="font-medium">Google Analytics</span>
                </div>
                <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">Connected</span>
              </div>
              
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                <div className="flex items-center">
                  <span className="text-gray-700 mr-3">🐙</span>
                  <span className="font-medium">GitHub</span>
                </div>
                <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">Connected</span>
              </div>
              
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                <div className="flex items-center">
                  <span className="text-purple-500 mr-3">💬</span>
                  <span className="font-medium">Slack</span>
                </div>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">Disconnected</span>
              </div>
              
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">📝</span>
                  <span className="font-medium">Google Sheets</span>
                </div>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">Disconnected</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-card border border-gray-200">
        <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-lg font-medium">Update History</h2>
          <button className="text-sm text-primary-600 hover:text-primary-800">
            View All
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Metrics Included
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Word Count
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Recipients
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {updateHistory.map((update) => (
                <tr key={update.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {update.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {update.metrics}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {update.wordCount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {update.recipientCount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-primary-600 hover:text-primary-800">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;