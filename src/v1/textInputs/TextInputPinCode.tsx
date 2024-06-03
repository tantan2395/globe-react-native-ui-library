import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export interface TextInputPinCodeProps {
  numberOfPins?: number;
  onPinChanged?: (pin: string) => void;
  value?: string;
  showSoftInputOnFocus?: boolean;
  name?: string;
}

/**
 * TextInputPinCode Component Props
 *
 * @param numberOfPins - The number of input fields (pins) in the pin code input (optional).
 * @param onPinChanged - Callback function invoked when the pin code value changes; it receives the new pin code as a string (optional).
 * @param value - The current value of the pin code input (optional).
 * @param showSoftInputOnFocus - Determines whether the soft keyboard should be displayed when the pin code input is focused (optional).
 * @param name - Used to locate this view in end-to-end tests (optional).
 * @returns
 */
const TextInputPinCode: React.FC<TextInputPinCodeProps> = ({
  numberOfPins = 6,
  onPinChanged,
  showSoftInputOnFocus,
  value,
  name,
}) => {
  const [pin, setPin] = useState<string[]>(Array(numberOfPins).fill(''));
  const pinInputs = useRef<TextInput[]>(Array(numberOfPins).fill(null));
  const [oldValue, setOldValue] = useState('');

  const handlePinChange = useCallback(
    (text: string, index: number) => {
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
    },
    [numberOfPins, onPinChanged, pin]
  );

  const handleKeyPress = (key: string, index: number) => {
    if (key === 'Backspace' && pin[index] === '' && index > 0) {
      pinInputs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    const str = value?.trim() ?? '';
    if (str.length <= numberOfPins) {
      setOldValue(str);
      const index = str.length - 1 > 0 ? str.length - 1 : 0;

      if (str.length > oldValue.length) {
        handlePinChange(str, index);
      } else {
        handlePinChange('', oldValue.length - 1);
      }
    }
    // disables lint test for this useEffect until we got solution for the handlePinChange lint error that causes infinite loop when added to the dependency array

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, numberOfPins]);

  return (
    <View style={styles.container} testID={name}>
      {pin.map((val, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => pinInputs.current[index]?.focus()}
          style={[styles.pinCircle, val !== '' && styles.filledCircle]}
          testID={`${name}-pin-inputs-${index}`}
        >
          <TextInput
            ref={(ref) => (pinInputs.current[index] = ref as TextInput)}
            style={pinInputStyles(val).pinInput}
            value={val}
            onChangeText={(text) => handlePinChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
            onKeyPress={({ nativeEvent }) =>
              handleKeyPress(nativeEvent.key, index)
            }
            showSoftInputOnFocus={showSoftInputOnFocus}
            caretHidden={true}
            testID={`${name}-text-inputs-${index}`}
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
    backgroundColor: 'transparent',
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
