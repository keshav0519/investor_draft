/// <reference types="vite/client" />

interface Window {
  gapi: {
    load: (api: string, callback: () => void) => void;
    client: {
      init: (config: {
        apiKey: string;
        discoveryDocs: string[];
      }) => Promise<void>;
      gmail: {
        users: {
          messages: {
            list: (params: {
              userId: string;
              q: string;
              maxResults: number;
            }) => Promise<any>;
            get: (params: {
              userId: string;
              id: string;
            }) => Promise<any>;
          };
        };
      };
    };
  };
}