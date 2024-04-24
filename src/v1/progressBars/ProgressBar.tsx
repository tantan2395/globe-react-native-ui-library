import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useProgress } from '../provider/progressContext';

const ProgressBar: React.FC = () => {
  const { totalSteps, completedSteps } = useProgress();
  const progressPercentage = (completedSteps / totalSteps) * 100;

  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, { width: `${progressPercentage}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 4,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#62768B',
  },
});

export default ProgressBar;
