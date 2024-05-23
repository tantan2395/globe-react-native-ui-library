import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { Dropdown, Button } from 'globe-react-native-ui-library';

export default function Example() {
  const items = [
    { label: 'Option 1', value: '1', subValue: '8 Ports Available' },
    { label: 'Option 2', value: '2', subValue: '8 Ports Available' },
    { label: 'Option 3', value: '3', subValue: 'Full' },
  ];

  return (
    <View style={styles.container}>
      <Dropdown items={items} placeholder="NAP Name" />
      <Button label={'button'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    marginTop: 100,
    marginHorizontal: 20,
  },
});
