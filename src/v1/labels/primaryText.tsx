import React from 'react';
import { Text, StyleSheet, type TextStyle } from 'react-native';

export interface PrimaryTextProps {
  value: string;
  styles?: TextStyle | TextStyle[];
}

const PrimaryText: React.FC<PrimaryTextProps> = (props) => {
  return (
    <>
      <Text style={[styles.text, props.styles]}>{props.value}</Text>
    </>
  );
};

export default PrimaryText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
    paddingBottom: 5,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
  },
});
