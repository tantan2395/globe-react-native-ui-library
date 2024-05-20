import React, { type PropsWithChildren } from 'react';
import { StyleSheet, type TextStyle, View, type ViewStyle } from 'react-native';
import { type Theme, useTheme } from '../provider/themeContext';

export interface ContainerProps extends PropsWithChildren {
  styles?: ViewStyle | TextStyle;
}

/**
 * Basic Container Component
 *
 * @param styles - Additional styling; It will override the theme (optional).
 * @returns
 */
const Container: React.FC<ContainerProps> = (props) => {
  const { theme } = useTheme();

  return (
    <View style={containerStyle(props, theme).container}>{props.children}</View>
  );
};

export default Container;

const containerStyle = (props?: ContainerProps, theme?: Theme) =>
  StyleSheet.create({
    container: {
      padding: 15,
      backgroundColor: theme?.colors?.primary,
      ...props?.styles,
    },
  });
