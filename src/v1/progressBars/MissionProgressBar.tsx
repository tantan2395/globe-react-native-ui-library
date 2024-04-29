import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

export interface MissionProgressBarProps {
  totalSteps: number;
  completedSteps: number;
  containerStyle?: ViewStyle;
  progressBarStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const MissionProgressBar: React.FC<MissionProgressBarProps> = ({
  containerStyle,
  progressBarStyle,
  textStyle,
  totalSteps = 3,
  completedSteps = 0,
}) => {
  const progressPercentage = (completedSteps / totalSteps) * 100;
  const starSource = require('../assets/star.png');

  const circleColor =
    completedSteps === totalSteps
      ? styles.progressBar.backgroundColor
      : styles.circle.backgroundColor;

  return (
    <>
      <View style={[styles.container, containerStyle]}>
        <View
          style={[
            styles.progressBar,
            progressBarStyle,
            { width: `${progressPercentage}%` },
          ]}
        />
        <Text style={[styles.progressText, textStyle]}>
          {completedSteps}/{totalSteps}
        </Text>
      </View>
      <View style={[styles.circle, { backgroundColor: circleColor }]}>
        <View style={styles.starContainer}>
          <Image
            source={starSource}
            style={[styles.image]}
            resizeMode="cover"
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '97%',
    height: 30,
    backgroundColor: '#D7DCE1',
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#62768B',
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: '#D7DCE1',
    borderRadius: 100,
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: [{ translateY: 75 }],
  },
  progressText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -15 }, { translateY: -10 }],
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    width: '95%',
    height: '95%',
  },
  starContainer: {
    width: 24,
    height: 24,
    backgroundColor: 'white',
    borderRadius: 100,
    overflow: 'hidden',
    transform: [{ translateX: 14 }, { translateY: 12 }],
  },
});

export default MissionProgressBar;
