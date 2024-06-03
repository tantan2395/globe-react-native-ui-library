import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useProgress } from '../provider/progressContext';
import { useTheme } from '../provider';

const ProgressBar: React.FC = () => {
  const { totalSteps, completedSteps } = useProgress();
  const { theme } = useTheme();
  const progressPercentage = (completedSteps / totalSteps) * 100;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.progressBar?.backgroundColor },
      ]}
      testID="progress-bar"
    >
      <View
        style={[
          styles.progressBar,
          {
            width: `${progressPercentage}%`,
            backgroundColor: theme.progressBar?.progressColor,
          },
        ]}
        testID="progress-bar-percentage"
      />
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
