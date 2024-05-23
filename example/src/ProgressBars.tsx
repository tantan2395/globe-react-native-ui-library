import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {
  MissionProgressBar,
  ProgressBar,
  ProgressProvider,
} from 'globe-react-native-ui-library';

export const ProgressBars = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mission Progress Bar</Text>
        <MissionProgressBar totalSteps={100} completedSteps={40} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Progress Bar</Text>
        <ProgressProvider totalSteps={100} children={<ProgressBar />} />
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
