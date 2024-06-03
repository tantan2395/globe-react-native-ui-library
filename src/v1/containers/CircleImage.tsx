import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  type ImageSourcePropType,
} from 'react-native';

export interface CircleImageProps {
  name?: string;
  source: ImageSourcePropType;
  size?: number;
}

/**
 * CircleImage Component
 *
 * @param name - Used to locate this view in end-to-end tests (optional).
 * @param source - The image source to be displayed. This can be a URL, a local file path, or a static resource (required).
 * @param size - The diameter of the circle image in pixels (optional). Defaults to a standard size if not specified.
 * @returns
 */
const CircleImage: React.FC<CircleImageProps> = ({
  source,
  size = 100,
  name,
}) => {
  return (
    <View style={[styles.circle, { width: size, height: size }]} testID={name}>
      <Image
        source={source}
        style={styles.image}
        resizeMode="cover"
        testID={`${name}-image`}
      />
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
