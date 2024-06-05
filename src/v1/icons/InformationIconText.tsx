import { Image, StyleSheet, View, type ViewStyle } from 'react-native';
import SecondaryText from '../labels/secondaryText';
import React from 'react';

/**
 * Information Icon Component
 *
 * @param iconSrc - The source of the icon to be displayed. This can be a local image asset or a remote URL (required).
 * @param infoContent - The text content providing information related to the icon (required).
 * @param style - Optional styles to be applied to the container of the icon and informational text. Allows for customization of the component's appearance (optional).
 * @returns
 */
interface InformationIconProps {
  iconSrc: any;
  infoContent: string;
  style?: ViewStyle;
}

const InformationIconText: React.FC<InformationIconProps> = (
  props: InformationIconProps
) => {
  return (
    <View style={[styles.main, props.style]}>
      <Image style={styles.image} source={props.iconSrc} />
      <SecondaryText style={styles.text} value={props.infoContent} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    marginHorizontal: 24,
    backgroundColor: 'red',
  },
  image: {
    width: 32,
    height: 32,
    backgroundColor: 'gray',
  },
  text: {
    paddingStart: 8,
    paddingRight: 48,
    textAlign: 'left',
  },
});

export default InformationIconText;
