import * as React from 'react';
import { ThemeProvider } from 'globe-react-native-ui-library';
import { Home } from './Home';

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
