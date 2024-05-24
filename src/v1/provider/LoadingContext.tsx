import React, { useContext, useState } from 'react';

export interface LoadingStatusContextType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingStatusContext = React.createContext<
  LoadingStatusContextType | undefined
>(undefined);

export const LoadingStatusProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <LoadingStatusContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingStatusContext.Provider>
  );
};

export const useLoadingStatus = () => {
  const context = useContext(LoadingStatusContext);
  if (!context) {
    throw new Error(
      'useLoadingStatus must be used within a LoadingStatusProvider'
    );
  }
  return context;
};
