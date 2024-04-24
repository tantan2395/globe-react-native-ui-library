import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react';

export interface ProgressContextType {
  totalSteps: number;
  completedSteps: number;
  setCompletedSteps: React.Dispatch<React.SetStateAction<number>>;
}

const ProgressContext = createContext<ProgressContextType | undefined>(
  undefined
);

export const ProgressProvider: React.FC<{
  totalSteps: number;
  children: ReactNode;
}> = ({ totalSteps, children }) => {
  const [completedSteps, setCompletedSteps] = useState(0);

  return (
    <ProgressContext.Provider
      value={{ totalSteps, completedSteps, setCompletedSteps }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
