import React from 'react';
import {
  Text,
  type GestureResponderEvent,
  TouchableOpacity,
  StyleSheet,
  type TextStyle,
} from 'react-native';
import { type Theme, useTheme } from '../provider/themeContext';

export interface PressableTextProps {
  label?: string | number;
  onPress?: (event: GestureResponderEvent) => void;
  style?: TextStyle;
  disabled?: boolean;
  name?: string;
}

/**
 * Pressable Text Component
 *
 * @param label  - Text (optional).
 * @param style - Additional styling for the button; It will override the theme (optional).
 * @param onPress - Called when a single tap gesture is detected (optional).
 * @param disabled - Represents whether the button is disabled or enabled (optional). Default to false.
 * @param name - Used to locate this view in end-to-end tests
 * @returns
 */
const PressableText: React.FC<PressableTextProps> = (props) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity onPress={props.onPress} testID={props.name}>
      <Text style={styles(props, theme).text} testID={`${props.name}-label`}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = (props?: PressableTextProps, theme?: Theme) =>
  StyleSheet.create({
    text: {
      fontSize: 14,
      fontWeight: '700',
      margin: 16,
      width: 'auto',
      color: props?.disabled
        ? theme?.colors?.disabledButtonColor
        : theme?.colors?.enabledButtonColor,
      ...props?.style,
    },
  });

export default PressableText;
