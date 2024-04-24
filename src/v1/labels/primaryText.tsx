import React from 'react';
import { Text, StyleSheet, type TextStyle } from 'react-native';

export interface PrimaryTextProps {
  value: string;
  styles?: TextStyle;
}

const PrimaryText: React.FC<PrimaryTextProps> = (props) => {
  return (
    <>
      <Text style={styles(props).text}>{props.value}</Text>
    </>
  );
};

export default PrimaryText;

const styles = (props?: PrimaryTextProps) =>
  StyleSheet.create({
    text: {
      fontFamily: 'Roboto',
      paddingBottom: 5,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '700',
      lineHeight: 24,

      ...props?.styles,
    },
  });
