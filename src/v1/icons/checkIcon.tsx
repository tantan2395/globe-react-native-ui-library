import React from 'react';
import { Image, StyleSheet, View, type ViewStyle } from 'react-native';

export interface CheckIconProps {
  circleStyle?: ViewStyle | ViewStyle[];
  name?: string;
}

/**
 * CheckIcon Component Props
 *
 * @param circleStyle - Additional styles for the circle container of the check icon (optional).
 * @param name - Used to locate this view in end-to-end tests (optional).
 * @returns
 */
const CheckIcon: React.FC<CheckIconProps> = ({ circleStyle, name }) => {
  const checkIcon = require('../assets/check_icon.png');

  return (
    <View style={styles.row} testID={name}>
      <View
        style={[styles.circle, circleStyle]}
        testID={`${name}-container-circle`}
      >
        <View style={styles.iconContainer} testID={`${name}-container-icon`}>
          <Image
            source={checkIcon}
            style={styles.icon}
            resizeMode="center"
            testID={`${name}-image`}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    padding: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: '#62768B',
    borderRadius: 100,
    justifyContent: 'center',
  },
  iconContainer: {
    width: 24,
    height: 24,
    backgroundColor: 'white',
    borderRadius: 100,
    alignSelf: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    alignSelf: 'center',
  },
});

export default CheckIcon;
