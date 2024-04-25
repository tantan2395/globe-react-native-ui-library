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
  styles?: ViewStyle | TextStyle;
  placeholder?: string;
  onConfirm: (date: string) => void;
  handleOnEnablePicker: (d: boolean) => void;
  value: string;
}

/**
 * DateInput Component with placeholder on top-left corner upon focused
 *
 * @param styles - Additional styling for the outer design of the Text Input (optional).
 * @param placeholder - The label text of the Text Input (optional).
 * @param onConfirm - Confirm callback returns picked date (required)
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
      <Pressable onPress={handleOnEnablePicker}>
        <View style={styles(props).container}>
          <View
            style={[
              styles(props).inputContainer,
              isFocused && styles(props).inputContainerFocused,
            ]}
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
              <Text style={styles(props).placeholder}>{props.placeholder}</Text>
            </Animated.View>
            <Text style={styles(props).input}>{props.value}</Text>
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
      ...props.styles,
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
