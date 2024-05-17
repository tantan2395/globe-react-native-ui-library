import React, { createContext, useContext, useState } from 'react';
import { type TextStyle, type ViewStyle } from 'react-native';

export interface Theme {
  colors?: {
    primary?: string;
    secondary?: string;
    textActiveColor?: string;
    textInactiveColor?: string;
    enabledButtonColor?: string;
    disabledButtonColor?: string;
  };
  dropdown?: {
    backgroundColor?: string;
    borderColor?: string;
    maxHeight?: number;
    itemText?: TextStyle;
    subText?: TextStyle;
  };
  button?: {
    textActiveColor?: string;
    textInactiveColor?: string;
    enabledButtonColor?: string;
    disabledButtonColor?: string;
  };
  circleButton?: {
    textActiveColor?: string;
    textInactiveColor?: string;
    backgroundColor?: string;
    borderColor?: string;
  };
  progressBar?: {
    backgroundColor?: string;
    progressColor?: string;
  };
  styles?: ViewStyle | TextStyle;
}

interface ThemeContextType {
  theme: Theme;
  updateTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const defaultTheme: Theme = {
    colors: {
      primary: '#F5F9FC',
      secondary: '#62768B',
      textActiveColor: '#FFFFFF',
      textInactiveColor: '#BCC4CD',
      enabledButtonColor: '#62768B',
      disabledButtonColor: '#E9EBEE',
    },
    dropdown: {
      backgroundColor: 'white',
      borderColor: '#CFDDF4',
      maxHeight: 300,
      itemText: {
        fontSize: 14,
        fontWeight: '500',
      },
      subText: {
        color: '#62768B',
      },
    },
    button: {
      textActiveColor: '#FFFFFF',
      textInactiveColor: '#BCC4CD',
      enabledButtonColor: '#62768B',
      disabledButtonColor: '#E9EBEE',
    },
    circleButton: {
      textActiveColor: '#FFFFFF',
      textInactiveColor: '#BCC4CD',
      backgroundColor: 'transparent',
      borderColor: '#CFDDF4',
    },
    progressBar: {
      backgroundColor: '#e0e0e0',
      progressColor: '#62768B',
    },
  };

  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const updateTheme = (newTheme: Partial<Theme>) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      ...newTheme,
      colors: {
        ...prevTheme.colors,
        ...newTheme.colors,
      },
      dropdown: {
        ...prevTheme.dropdown,
        ...newTheme.dropdown,
      },
      button: {
        ...prevTheme.button,
        ...newTheme.button,
      },
      circleButton: {
        ...prevTheme.circleButton,
        ...newTheme.circleButton,
      },
      progressBar: {
        ...prevTheme.progressBar,
        ...newTheme.progressBar,
      },
      styles: {
        ...prevTheme.styles,
        ...newTheme.styles,
      },
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
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
