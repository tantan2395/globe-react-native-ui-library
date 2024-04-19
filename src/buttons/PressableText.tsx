import React from 'react';
import {
  Text,
  type GestureResponderEvent,
  TouchableOpacity,
  StyleSheet,
  type TextStyle,
} from 'react-native';

export interface PressableTextProps {
  label?: string | number;
  onPress?: (event: GestureResponderEvent) => void;
  styles?: TextStyle;
}

const PressableText: React.FC<PressableTextProps> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={styles(props.styles).text}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const styles = (style?: TextStyle) =>
  StyleSheet.create({
    text: {
      fontSize: 14,
      fontWeight: '700',
      color: 'gray',
      margin: 16,
      width: 'auto',
      ...style,
    },
  });

export default PressableText;
