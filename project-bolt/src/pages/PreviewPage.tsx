import React, { useState } from 'react';
import { Copy, CheckCheck, ExternalLink, Send, Edit, Download } from 'lucide-react';

const PreviewPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [viewSource, setViewSource] = useState(false);
  
  // Sample generated update text
  const generatedUpdate = `
Dear Investors,

Here's our monthly update for June 2025:

**Key Metrics:**
- MRR: $34,700 (+11%) [Stripe]
- DAU: 1,283 (+25%) [GA4]
- Merged PRs: 23 [GitHub]
- Cash Runway: 11.2 months [Google Sheets]

**Highlights:**
- Closed two enterprise deals with total ACV of $120k
- Successfully launched our new analytics dashboard, increasing user engagement by 15%
- Completed SOC 2 Type 1 certification ahead of schedule
- Engineering team shipped 23 PRs, improving platform stability by 32%

**Lowlights:**
- One customer downgraded from enterprise to team plan ($15k ARR impact)
- Runway decreased by 0.8 months due to increased marketing spend
- Key engineering hire fell through at the final stage

**Customer Quote:**
"Your platform helped us turn off $35k in monthly Snowflake costs by identifying unused queries." - John Smith, CTO at BetaCo [Slack]

**Cash Position:**
We currently have 11.2 months of runway at current burn. We're increasing spend on marketing while maintaining a 10+ month cushion.

**Asks:**
- Looking for 2 intros to fintech security buyers
- Recommendations for experienced product designers

Best regards,
The Founding Team
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedUpdate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Preview Your Update</h1>
        <p className="text-gray-600">
          Review, edit, and export your investor update before sending.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-card border border-gray-200 overflow-hidden mb-8">
        <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-lg font-medium">June 2025 Investor Update</h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewSource(!viewSource)}
              className={`text-sm px-3 py-1.5 rounded ${
                viewSource 
                  ? 'bg-primary-100 text-primary-700' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {viewSource ? 'Hide Sources' : 'Show Sources'}
            </button>
            <button
              onClick={handleCopy}
              className="text-sm text-gray-600 hover:text-gray-900 flex items-center px-3 py-1.5 rounded hover:bg-gray-100"
            >
              {copied ? (
                <>
                  <CheckCheck size={16} className="mr-1.5 text-green-600" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy size={16} className="mr-1.5" />
                  Copy
                </>
              )}
            </button>
          </div>
        </div>
        
        <div className="p-6 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-sm font-medium text-gray-700">To: </span>
              <span className="text-sm text-gray-600">investors@company.com</span>
            </div>
            <button className="text-sm text-primary-600 hover:text-primary-800 flex items-center">
              <Edit size={14} className="mr-1" />
              Edit Recipients
            </button>
          </div>
          <div className="mb-2">
            <span className="text-sm font-medium text-gray-700">Subject: </span>
            <span className="text-sm text-gray-600">Company Name - June 2025 Investor Update</span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="prose max-w-none">
            {viewSource ? (
              <div className="whitespace-pre-wrap bg-white p-4 rounded-lg border border-gray-200 text-sm font-mono">
                {generatedUpdate}
              </div>
            ) : (
              <div className="whitespace-pre-wrap">
                {generatedUpdate.replace(/\[.*?\]/g, '')}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-card border border-gray-200 overflow-hidden mb-8">
        <div className="border-b border-gray-200 px-6 py-4">
          <h2 className="text-lg font-medium">Citation Sources</h2>
        </div>
        
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="text-blue-500 mr-3 mt-1">💳</div>
              <div>
                <h3 className="font-medium">Stripe</h3>
                <p className="text-sm text-gray-600 mt-1">
                  MRR: $34,700 (+11%) - Last updated June 5, 2025
                </p>
                <a 
                  href="#" 
                  className="text-sm text-primary-600 hover:text-primary-800 inline-flex items-center mt-1"
                >
                  <ExternalLink size={14} className="mr-1" />
                  View in Stripe Dashboard
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="text-orange-500 mr-3 mt-1">📊</div>
              <div>
                <h3 className="font-medium">Google Analytics</h3>
                <p className="text-sm text-gray-600 mt-1">
                  DAU: 1,283 (+25%) - Last updated June 5, 2025
                </p>
                <a 
                  href="#" 
                  className="text-sm text-primary-600 hover:text-primary-800 inline-flex items-center mt-1"
                >
                  <ExternalLink size={14} className="mr-1" />
                  View in Google Analytics
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="text-gray-700 mr-3 mt-1">🐙</div>
              <div>
                <h3 className="font-medium">GitHub</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Merged PRs: 23 - Last updated June 5, 2025
                </p>
                <a 
                  href="#" 
                  className="text-sm text-primary-600 hover:text-primary-800 inline-flex items-center mt-1"
                >
                  <ExternalLink size={14} className="mr-1" />
                  View in GitHub
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="text-green-500 mr-3 mt-1">📝</div>
              <div>
                <h3 className="font-medium">Google Sheets</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Cash Runway: 11.2 months - Manual input
                </p>
                <a 
                  href="#" 
                  className="text-sm text-primary-600 hover:text-primary-800 inline-flex items-center mt-1"
                >
                  <ExternalLink size={14} className="mr-1" />
                  View Spreadsheet
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center"
        >
          <Edit size={18} className="mr-2" />
          Edit Update
        </button>
        
        <div className="flex space-x-3">
          <button
            className="px-5 py-2.5 border border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors flex items-center"
          >
            <Download size={18} className="mr-2" />
            Export PDF
          </button>
          
          <button
            className="px-5 py-2.5 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center"
          >
            <Send size={18} className="mr-2" />
            Send to Gmail
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;