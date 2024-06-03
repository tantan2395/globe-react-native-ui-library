import React from 'react';
import { Text, StyleSheet, type TextStyle } from 'react-native';

export interface PrimaryTextProps {
  name?: string;
  value: string;
  style?: TextStyle | TextStyle[] | undefined;
}

/**
 * Primary Text Component
 *
 * @param value  - The label text of the button (optional).
 * @param style - Additional styling for the Text.
 * @param name - Used to locate this view in end-to-end tests (optional).
 * @returns
 */
const PrimaryText: React.FC<PrimaryTextProps> = ({ name, value, style }) => {
  return (
    <Text style={[styles.text, style]} testID={name}>
      {value}
    </Text>
  );
};

export default PrimaryText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
    paddingBottom: 5,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
  },
});
