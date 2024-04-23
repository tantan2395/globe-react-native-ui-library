import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, useWindowDimensions } from 'react-native';

export interface TextInputPinProps {
  numberOfPins?: number;
  onPinChange?: (pin: string) => void;
  value?: string;
  showSoftInputOnFocus?: boolean;
}

const TextInputPin: React.FC<TextInputPinProps> = ({
  numberOfPins = 6,
  onPinChange,
  value,
  showSoftInputOnFocus,
}) => {
  const windowWidth = useWindowDimensions().width;
  const [pin, setPin] = useState<string>('');
  const [isBackspace, setBackspace] = useState(false);
  const [inputRefs, setInputRefs] = useState<(TextInput | null)[]>([]);

  useEffect(() => {
    setInputRefs(Array.from({ length: numberOfPins }, () => null));
  }, [numberOfPins]);

  useEffect(() => {
    const str = value?.trim() ?? '';
    const index = str.length - 1 > 0 ? str.length - 1 : 0;

    if (inputRefs[index]) {
      if (str.length > 0) {
        inputRefs[index]?.focus();
      } else {
        inputRefs[index]?.blur();
      }
    }

    setPin(value ?? '');
  }, [value, inputRefs]);

  const pinInputWidth = (windowWidth - 20 - 15 * numberOfPins) / numberOfPins;

  const handlePinChange = (newPin: string, currentIndex: number) => {
    if (isBackspace) return;

    if (newPin.length <= numberOfPins && /^\d*$/.test(newPin)) {
      setPin(newPin);

      if (currentIndex < numberOfPins - 1) {
        inputRefs[currentIndex + 1]?.focus();
      }
      // Call the onPinChange callback with the updated pin
      onPinChange && onPinChange(newPin);
      setBackspace(false);
    }
  };

  const handleBackspace = (index: number) => {
    if (index >= 0) {
      // If backspace is pressed and the current index is not the first pin
      const newPin = pin.slice(0, index);
      setPin(newPin);
      if (index - 1 >= 0) {
        inputRefs[index - 1]?.focus(); // Move focus to the previous pin
      }
      // Call the onPinChange callback with the updated pin
      onPinChange && onPinChange(newPin);
    }
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: numberOfPins }, (_, index) => (
        <View key={index} style={styles.pinContainer}>
          <TextInput
            ref={(ref) => (inputRefs[index] = ref)}
            style={[styles.pinInput, { width: pinInputWidth }]}
            value={pin[index] || ''}
            onChangeText={(text) =>
              handlePinChange(
                pin.substr(0, index) + text + pin.substr(index + 1),
                index
              )
            }
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Backspace') {
                setBackspace(true);
                handleBackspace(index);
              } else {
                setBackspace(false);
              }
            }}
            keyboardType="numeric"
            maxLength={1}
            showSoftInputOnFocus={showSoftInputOnFocus}
            caretHidden={true}
          />
        </View>
      ))}
    </View>
  );
};

export default TextInputPin;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  pinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pinInput: {
    height: 45,
    fontSize: 20,
    textAlign: 'center',
    borderBottomWidth: 1,
    marginHorizontal: 5,
  },
});
