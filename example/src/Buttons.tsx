import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  Button,
  CircleButton,
  PressableText,
} from 'globe-react-native-ui-library';

export const Buttons = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContentContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginVertical: 5,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
