import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { Button, ThemeProvider } from 'globe-react-native-ui-library';

export default function App() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Button label={'Sample Base Button'} />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
