import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { ThemeProvider, Dropdown } from 'globe-react-native-ui-library';

export default function App() {
  const items = [
    { label: 'Option 1', value: '1', subValue: '8 Ports Available' },
    { label: 'Option 2', value: '2', subValue: '8 Ports Available' },
    { label: 'Option 3', value: '3', subValue: 'Full' },
  ];

  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Dropdown items={items} placeholder="NAP Name" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
