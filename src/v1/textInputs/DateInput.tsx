import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  type TextStyle,
  View,
  type ViewStyle,
  Animated,
  Pressable,
} from 'react-native';

export interface DateInputProps {
  style?: ViewStyle | TextStyle;
  placeholder?: string;
  onConfirm: (date: string) => void;
  handleOnEnablePicker: (d: boolean) => void;
  value: string;
  name?: string;
}

/**
 * DateInput Component with placeholder on top-left corner upon focused Props
 *
 * @param style - Additional styles for the date input container (optional).
 * @param placeholder - Placeholder text for the date input (optional).
 * @param onConfirm - Callback function invoked when a date is confirmed; it receives the selected date as a string (required).
 * @param handleOnEnablePicker - Callback function invoked to enable or disable the date picker; it receives a boolean value (required).
 * @param value - The current value of the date input (required).
 * @param name - Used to locate this view in end-to-end tests (optional).
 * @returns
 */
const DateInput: React.FC<DateInputProps> = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputAnim = useRef(new Animated.Value(0)).current;

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(inputAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleOnEnablePicker = () => {
    props.handleOnEnablePicker && props.handleOnEnablePicker(true);

    handleFocus();
  };

  return (
    <>
      <Pressable onPress={handleOnEnablePicker} testID={props.name}>
        <View
          style={styles(props).container}
          testID={`${props.name}-container`}
        >
          <View
            style={[
              styles(props).inputContainer,
              isFocused && styles(props).inputContainerFocused,
            ]}
            testID={`${props.name}-container-input`}
          >
            <Animated.View
              style={[
                styles(props).placeholderContainer,
                {
                  transform: [
                    {
                      translateY: inputAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [10, 0],
                      }),
                    },
                    {
                      scale: inputAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 0.8],
                      }),
                    },
                  ],
                },
              ]}
            >
              <Text
                style={styles(props).placeholder}
                testID={`${props.name}-placeholder`}
              >
                {props.placeholder}
              </Text>
            </Animated.View>
            <Text style={styles(props).input} testID={`${props.name}-value`}>
              {props.value}
            </Text>
          </View>
        </View>
      </Pressable>
    </>
  );
};

export default DateInput;

const styles = (props: DateInputProps) =>
  StyleSheet.create({
    container: {
      ...props.style,
    },
    inputContainer: {
      position: 'relative',
      borderWidth: 1,
      borderColor: '#CFDDF4',
      padding: 8,
      borderRadius: 6,
      paddingHorizontal: 12,
      paddingVertical: 12,
      height: 60,
    },
    inputContainerFocused: {
      borderColor: '#CFDDF4', // Example color change when focused
    },
    input: {
      color: 'black',
      fontSize: 14,
      height: 40,
      fontWeight: '600',
      lineHeight: 14,
      paddingHorizontal: 8,
      marginTop: 11,
    },
    placeholderContainer: {
      position: 'absolute',
      top: 8,
      left: 1,
      backgroundColor: 'transparent',
    },
    placeholder: {
      fontSize: 12,
      fontWeight: '600',
      lineHeight: 15.6,
      color: 'gray',
      paddingHorizontal: 12,
    },
  });
