import * as React from 'react';
import { ThemeProvider } from 'globe-react-native-ui-library';
import Example from './example';

export default function App() {
  return (
    <ThemeProvider>
      <Example />
    </ThemeProvider>
  );
}
