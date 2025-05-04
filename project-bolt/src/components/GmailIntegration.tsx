import React, { useEffect, useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';

interface Email {
  id: string;
  subject: string;
  snippet: string;
  date: string;
}

interface GmailIntegrationProps {
  onConnectionChange?: (connected: boolean) => void;
}

const GmailIntegration: React.FC<GmailIntegrationProps> = ({ onConnectionChange }) => {
  const [emails, setEmails] = useState<Email[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isGapiLoaded, setIsGapiLoaded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Initialize GAPI when component mounts
    const initGapi = () => {
      if (!window.gapi) {
        setTimeout(initGapi, 100);
        return;
      }
      window.gapi.load('client', () => {
        setIsGapiLoaded(true);
      });
    };
    initGapi();
  }, []);

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      if (!isGapiLoaded) {
        setError('Google API client not loaded yet. Please try again.');
        onConnectionChange?.(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);
        
        // Initialize the Gmail API client
        await window.gapi.client.init({
          apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
          discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],
        });

        // Set the access token in the Authorization header
        window.gapi.client.setToken({
          access_token: response.access_token
        });
        
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        
        const result = await window.gapi.client.gmail.users.messages.list({
          userId: 'me',
          q: `subject:"investor update" OR label:investor OR is:starred after:${thirtyDaysAgo.getTime() / 1000}`,
          maxResults: 20
        });

        if (!result.result.messages) {
          setEmails([]);
          setIsAuthenticated(true);
          onConnectionChange?.(true);
          return;
        }

        const emailPromises = result.result.messages.map(async (message) => {
          const email = await window.gapi.client.gmail.users.messages.get({
            userId: 'me',
            id: message.id!
          });

          const headers = email.result.payload?.headers;
          const subject = headers?.find(h => h.name === 'Subject')?.value || '';
          const date = headers?.find(h => h.name === 'Date')?.value || '';

          return {
            id: message.id!,
            subject,
            snippet: email.result.snippet || '',
            date
          };
        });

        const emailDetails = await Promise.all(emailPromises);
        setEmails(emailDetails);
        setIsAuthenticated(true);
        onConnectionChange?.(true);
      } catch (err) {
        console.error('Gmail API Error:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch emails');
        onConnectionChange?.(false);
      } finally {
        setIsLoading(false);
      }
    },
    onError: (error) => {
      console.error('Google OAuth Error:', error);
      setError(error.error_description || 'Failed to authenticate with Google');
      onConnectionChange?.(false);
    },
    scope: 'https://www.googleapis.com/auth/gmail.readonly',
    flow: 'implicit'
  });

  return (
    <div className="space-y-4">
      {!emails.length && !isLoading && !isAuthenticated && (
        <div className="space-y-4">
          <button
            onClick={() => {
              setError(null);
              login();
            }}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Connect Gmail
          </button>
          <p className="text-sm text-gray-600">
            Note: Please ensure popups are allowed for this site in your browser settings
          </p>
        </div>
      )}

      {isLoading && (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg">
          {error}
        </div>
      )}

      {isAuthenticated && !error && !isLoading && (
        <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-4">
          Successfully connected to Gmail! {emails.length ? `Found ${emails.length} investor update emails.` : 'No matching emails in the last 30 days.'}
        </div>
      )}

      {emails.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Recent Investor Updates</h3>
          <div className="divide-y divide-gray-200">
            {emails.map((email) => (
              <div key={email.id} className="py-4">
                <h4 className="font-medium">{email.subject}</h4>
                <p className="text-sm text-gray-600 mt-1">{email.snippet}</p>
                <p className="text-xs text-gray-500 mt-1">{new Date(email.date).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {emails.length === 0 && !isLoading && !error && isAuthenticated && (
        <div className="text-gray-600 text-sm">
          No investor updates found in the last 30 days.
        </div>
      )}
    </div>
  );
};

export default GmailIntegration;