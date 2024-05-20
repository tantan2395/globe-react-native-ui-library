import React, { type ReactElement } from 'react';
import {
  type GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  type TextStyle,
  View,
  type ViewStyle,
} from 'react-native';
import { type Theme, useTheme } from '../provider/themeContext';

export interface CircleButtonProps {
  label?: string | number;
  styles?: ViewStyle;
  textStyles?: TextStyle;
  onPress?: (event: GestureResponderEvent) => void;
  useIcon?: ReactElement;
  disabled?: boolean;
  labelCenter?: boolean;
}

const defaultProps: Partial<CircleButtonProps> = {
  disabled: false,
  labelCenter: true,
};

/**
 * Circle Button Component
 *
 * @param label  - The label text of the button (optional).
 * @param styles - Additional styling for the button; It will override the theme (optional).
 * @param textStyles - Additional styling for the button label; It will override the theme (optional).
 * @param onPress - Called when a single tap gesture is detected (optional).
 * @param useIcon - Represents a JSX element. Usually an image (optional).
 * @param disabled - Represents whether the button is disabled or enabled (optional). Default to false.
 * @param labelCenter - Makes the label appear in the center (optional). Default to false.
 * @returns
 */
const CircleButton: React.FC<CircleButtonProps> = (props) => {
  const { theme } = useTheme();
  const mergedProps = { ...defaultProps, ...props };

  return (
    <Pressable
      style={styles(mergedProps, theme).button}
      onPress={props.onPress}
    >
      <View style={styles(mergedProps, theme).view}>
        {mergedProps.useIcon && mergedProps.useIcon}

        {mergedProps.label && (
          <Text style={textStyles(mergedProps, theme).text}>
            {mergedProps.label}
          </Text>
        )}
      </View>
    </Pressable>
  );
};

export default CircleButton;

const styles = (props?: CircleButtonProps, theme?: Theme) =>
  StyleSheet.create({
    view: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: props?.labelCenter ? 'center' : 'flex-start',
    },
    button: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginVertical: 5,
      alignSelf: 'stretch',
      backgroundColor: theme?.circleButton?.backgroundColor,
      width: 62,
      height: 62,
      gap: 10,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '#CFDDF4',
      margin: 10,
      fontWeight: '500',
      ...props?.styles,
    },
  });

const textStyles = (props?: CircleButtonProps, theme?: Theme) =>
  StyleSheet.create({
    text: {
      textAlign: 'center',
      color: props?.disabled
        ? theme?.circleButton?.textInactiveColor
        : theme?.circleButton?.textActiveColor,
      fontWeight: '600',
      fontSize: 18,
      lineHeight: 18,
      marginLeft: props?.useIcon ? 5 : 0,
      ...props?.textStyles,
    },
  });
