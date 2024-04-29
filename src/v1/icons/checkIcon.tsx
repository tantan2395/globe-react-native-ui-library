import React from 'react';
import { Image, StyleSheet, View, type ViewStyle } from 'react-native';

export interface CheckIconProps {
  circleStyle?: ViewStyle | ViewStyle[];
}

const CheckIcon: React.FC<CheckIconProps> = ({ circleStyle }) => {
  const checkIcon = require('../assets/check_icon.png');

  return (
    <View style={styles.row}>
      <View style={[styles.circle, circleStyle]}>
        <View style={styles.iconContainer}>
          <Image source={checkIcon} style={styles.icon} resizeMode="center" />
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
