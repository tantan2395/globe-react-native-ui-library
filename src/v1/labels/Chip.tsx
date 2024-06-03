import type { ReactNode } from 'react';
import React from 'react';
import { Pressable, StyleSheet, type ViewStyle } from 'react-native';

export interface ChipProps {
  name?: string;
  children: ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
}

/**
 * Chip Component
 *
 * @param children  - React Elements
 * @param style - Additional styling for the Text.
 * @param name - Used to locate this view in end-to-end tests (optional).
 * @param onPress - Called when a single tap gesture is detected.
 * @returns
 */
const Chip: React.FC<ChipProps> = ({ children, style, onPress, name }) => {
  return (
    <Pressable onPress={onPress} style={[styles.chip, style]} testID={name}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  chip: {
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 4,
  },
});

export default Chip;
