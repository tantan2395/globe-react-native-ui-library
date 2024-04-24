import React, { createContext, useContext, useState } from 'react';
import { type TextStyle, type ViewStyle } from 'react-native';

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    textActiveColor: string;
    textInactiveColor: string;
    enabledButtonColor: string;
    disabledButtonColor: string;
  };
  styles?: ViewStyle | TextStyle;
}

interface ThemeContextType {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>({
    colors: {
      primary: '#F5F9FC',
      secondary: '#62768B',
      textActiveColor: '#FFFFFF',
      textInactiveColor: '#BCC4CD',
      enabledButtonColor: '#62768B',
      disabledButtonColor: '#E9EBEE',
    },
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
