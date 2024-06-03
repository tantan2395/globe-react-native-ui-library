import React from 'react';
import { Text, StyleSheet, type TextStyle } from 'react-native';

export interface SecondaryTextProps {
  name?: string;
  value: string;
  style?: TextStyle | TextStyle[] | undefined;
}

/**
 * Secondary Text Component
 *
 * @param value  - The label text of the button (optional).
 * @param style - Additional styling for the Text.
 * @param name - Used to locate this view in end-to-end tests (optional).
 * @returns
 */
const SecondaryText: React.FC<SecondaryTextProps> = ({
  name,
  value,
  style,
}) => {
  return (
    <Text style={[styles.text, style]} testID={name}>
      {value}
    </Text>
  );
};

export default SecondaryText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
    paddingBottom: 5,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 19.6,
  },
});
