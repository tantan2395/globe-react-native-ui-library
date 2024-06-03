import type { ReactNode } from 'react';
import React from 'react';
import { StyleSheet, View, type ViewStyle } from 'react-native';

export interface CardProps {
  name?: string;
  children: ReactNode;
  style?: ViewStyle;
}

/**
 * Card Component
 *
 * @param children  - React Element.
 * @param style - Additional styling for the button; It will override the theme (optional).
 * @param name - Used to locate this view in end-to-end tests
 * @returns
 */
const Card: React.FC<CardProps> = ({ children, style, name }) => {
  return (
    <View style={[styles.card, style]} testID={name}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    margin: 10,
    borderWidth: 1,
  },
});

export default Card;
