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

export interface ButtonProps {
  label?: string | number;
  styles?: ViewStyle;
  textStyles?: TextStyle;
  onPress?: (event: GestureResponderEvent) => void;
  useIcon?: ReactElement;
  disabled?: boolean;
  labelCenter?: boolean;
}

const defaultProps: Partial<ButtonProps> = {
  disabled: false,
  labelCenter: true,
};

/**
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
const BaseButton: React.FC<ButtonProps> = (props) => {
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

export default BaseButton;

const styles = (props?: ButtonProps, theme?: Theme) =>
  StyleSheet.create({
    view: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: props?.labelCenter ? 'center' : 'flex-start',
    },
    button: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginVertical: 5,
      alignSelf: 'stretch',
      backgroundColor: props?.disabled
        ? theme?.colors.disabledButtonColor
        : theme?.colors.enabledButtonColor,
      ...props?.styles,
    },
  });

const textStyles = (props?: ButtonProps, theme?: Theme) =>
  StyleSheet.create({
    text: {
      textAlign: 'center',
      color: props?.disabled
        ? theme?.colors.textInactiveColor
        : theme?.colors.textActiveColor,
      fontWeight: '500',
      marginLeft: props?.useIcon ? 5 : 0,
      ...props?.textStyles,
    },
  });
