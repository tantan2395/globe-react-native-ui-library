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
  name?: string;
}

/**
 * MissionProgressBar Component Props
 *
 * @param totalSteps - The total number of steps in the mission (required).
 * @param completedSteps - The number of steps completed in the mission (required).
 * @param containerStyle - Additional styles for the container of the progress bar (optional).
 * @param progressBarStyle - Additional styles for the progress bar (optional).
 * @param textStyle - Additional styles for the text displaying the progress (optional).
 * @param name - Used to locate this view in end-to-end tests (optional).
 * @returns
 */
const MissionProgressBar: React.FC<MissionProgressBarProps> = ({
  containerStyle,
  progressBarStyle,
  textStyle,
  totalSteps = 3,
  completedSteps = 0,
  name,
}) => {
  const progressPercentage = (completedSteps / totalSteps) * 100;
  const starSource = require('../assets/star.png');

  const circleColor =
    completedSteps === totalSteps
      ? styles.progressBar.backgroundColor
      : styles.circle.backgroundColor;

  return (
    <>
      <View style={[styles.container, containerStyle]} testID={name}>
        <View
          style={[
            styles.progressBar,
            progressBarStyle,
            { width: `${progressPercentage}%` },
          ]}
          testID={`${name}-progress-bar`}
        />
        <Text
          style={[styles.progressText, textStyle]}
          testID={`${name}-progress-bar-steps`}
        >
          {completedSteps}/{totalSteps}
        </Text>
      </View>
      <View
        style={[styles.circle, { backgroundColor: circleColor }]}
        testID={`${name}-container-circle`}
      >
        <View style={styles.starContainer} testID={`${name}-container-star`}>
          <Image
            source={starSource}
            style={[styles.image]}
            resizeMode="cover"
            testID={`${name}-image`}
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
