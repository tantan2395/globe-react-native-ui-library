import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  type ImageSourcePropType,
} from 'react-native';

export interface CircleImageProps {
  source: ImageSourcePropType;
  size?: number;
}

const CircleImage: React.FC<CircleImageProps> = ({ source, size = 100 }) => {
  return (
    <View style={[styles.circle, { width: size, height: size }]}>
      <Image source={source} style={styles.image} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    borderRadius: 100,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default CircleImage;
