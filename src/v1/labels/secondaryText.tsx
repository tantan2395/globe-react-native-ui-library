import React from 'react';
import { Text, StyleSheet, type TextStyle } from 'react-native';

export interface SecondaryTextProps {
  value: string;
  styles?: TextStyle | TextStyle[] | undefined;
}

const SecondaryText: React.FC<SecondaryTextProps> = (props) => {
  return (
    <>
      <Text style={[styles.text, props.styles]}>{props.value}</Text>
    </>
  );
};

export default SecondaryText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
    paddingBottom: 5,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 19.6,
  },
});
