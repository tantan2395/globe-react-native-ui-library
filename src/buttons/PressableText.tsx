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
  styles?: TextStyle;
  disabled?: boolean;
}

const PressableText: React.FC<PressableTextProps> = (props) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={styles(props, theme).text}>{props.label}</Text>
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
        ? theme?.colors.disabledButtonColor
        : theme?.colors.enabledButtonColor,
      ...props?.styles,
    },
  });

export default PressableText;
