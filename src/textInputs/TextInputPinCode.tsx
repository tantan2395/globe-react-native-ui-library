import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export interface TextInputPinCodeProps {
  numberOfPins?: number;
  onPinChanged?: (pin: string) => void;
}

const TextInputPinCode: React.FC<TextInputPinCodeProps> = ({
  numberOfPins = 6,
  onPinChanged,
}) => {
  const [pin, setPin] = useState<string[]>(Array(numberOfPins).fill(''));
  const pinInputs = useRef<TextInput[]>(Array(numberOfPins).fill(null));

  const handlePinChange = (text: string, index: number) => {
    const newPin = [...pin];
    newPin[index] = text;
    setPin(newPin);

    onPinChanged && onPinChanged(newPin.join(''));

    // Move focus to the next input
    setTimeout(() => {
      pinInputs.current[index]?.blur();
      if (text !== '' && index < numberOfPins - 1) {
        pinInputs.current[index + 1]?.focus();
      } else if (text === '' && index > 0) {
        pinInputs.current[index - 1]?.focus();
      }
    }, 200); // Adjust the delay as needed
  };

  const handleKeyPress = (key: string, index: number) => {
    if (key === 'Backspace' && pin[index] === '' && index > 0) {
      pinInputs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {pin.map((value, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => pinInputs.current[index]?.focus()}
          style={[styles.pinCircle, value !== '' && styles.filledCircle]}
        >
          <TextInput
            ref={(ref) => (pinInputs.current[index] = ref as TextInput)}
            style={pinInputStyles(value).pinInput}
            value={value}
            onChangeText={(text) => handlePinChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
            onKeyPress={({ nativeEvent }) =>
              handleKeyPress(nativeEvent.key, index)
            }
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinCircle: {
    position: 'relative',
    width: 15,
    height: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  filledCircle: {
    backgroundColor: 'black',
  },
});

const pinInputStyles = (value: string) =>
  StyleSheet.create({
    pinInput: {
      position: 'absolute',
      width: 40,
      height: 40,
      textAlign: 'center',
      borderWidth: 0,
      padding: 0,
      fontSize: 40,
      color: value ? 'rgba(0,0,0,0)' : 'black',
      opacity: value ? 0 : 1,
    },
  });
export default TextInputPinCode;
