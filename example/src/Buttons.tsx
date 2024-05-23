import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {
  Button,
  CircleButton,
  PressableText,
} from 'globe-react-native-ui-library';

export const Buttons = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Button</Text>
        <Button label={'Button'} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Circle Button</Text>
        <CircleButton label={'Circle button'} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pressable Text</Text>
        <PressableText label={'Pressable text'} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  section: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
  },
});
