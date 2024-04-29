import type { ReactNode } from 'react';
import React from 'react';
import { Pressable, StyleSheet, type ViewStyle } from 'react-native';

export interface ListItemProps {
  children: ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ children, style, onPress }) => {
  return (
    <Pressable onPress={onPress} style={[styles.listItem, style]}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    margin: 10,
    borderWidth: 1,
  },
});

export default ListItem;
