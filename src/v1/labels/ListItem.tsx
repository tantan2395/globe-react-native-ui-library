import type { ReactNode } from 'react';
import React from 'react';
import { Pressable, StyleSheet, type ViewStyle } from 'react-native';

export interface ListItemProps {
  name?: string;
  children: ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
}

/**
 * List Item Component
 *
 * @param children  - React Elements
 * @param style - Additional styling for the Text.
 * @param name - Used to locate this view in end-to-end tests (optional).
 * @param onPress - Called when a single tap gesture is detected.
 * @returns
 */
const ListItem: React.FC<ListItemProps> = ({
  children,
  style,
  onPress,
  name,
}) => {
  return (
    <Pressable onPress={onPress} style={[styles.listItem, style]} testID={name}>
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
