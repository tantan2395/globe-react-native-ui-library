import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react';

export interface ConnectivityStatusContextType {
  isOffline: boolean;
  offlineText: string;
  setOfflineStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setOfflineText: React.Dispatch<React.SetStateAction<string>>;
}

const ConnectivityStatusContext = createContext<
  ConnectivityStatusContextType | undefined
>(undefined);

export const ConnectivityStatusProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [isOffline, setOfflineStatus] = useState(false);
  const [offlineText, setOfflineText] = useState(
    'You are currently in offline mode'
  );

  return (
    <ConnectivityStatusContext.Provider
      value={{ isOffline, offlineText, setOfflineStatus, setOfflineText }}
    >
      {children}
    </ConnectivityStatusContext.Provider>
  );
};

export const useConnectivityStatus = () => {
  const context = useContext(ConnectivityStatusContext);
  if (!context) {
    throw new Error(
      'useConnectivityStatus must be used within a ConnectivityStatusProvider'
    );
  }
  return context;
};
