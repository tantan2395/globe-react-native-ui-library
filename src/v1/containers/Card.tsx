import type { ReactNode } from 'react';
import React from 'react';
import { StyleSheet, View, type ViewStyle } from 'react-native';

export interface CardProps {
  children: ReactNode;
  style?: ViewStyle;
}

const Card: React.FC<CardProps> = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
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
