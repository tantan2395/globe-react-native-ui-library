import type { ReactNode } from 'react';
import React from 'react';
import { Pressable, StyleSheet, type ViewStyle } from 'react-native';

export interface ChipProps {
  children: ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
}

const Chip: React.FC<ChipProps> = ({ children, style, onPress }) => {
  return (
    <Pressable onPress={onPress} style={[styles.chip, style]}>
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
