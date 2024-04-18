import React, { useRef, useState } from 'react';
import {
  type KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput as RNTextInput,
  type TextStyle,
  View,
  type ViewStyle,
  Animated,
} from 'react-native';

export interface TextInputProps {
  styles?: ViewStyle | TextStyle;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  onChangeText?: (e: string) => void;
}

/**
 * TextInput Component with placeholder on top-left corner upon focused
 *
 * @param styles - Additional styling for the outer design of the Text Input (optional).
 * @param placeholder - The label text of the Text Input (optional).
 * @param keyboardType - check react-native's keyboardTypes under TextInput (optional)
 * @param onChangeText - Get the text changes
 * @returns
 */
const TextInput: React.FC<TextInputProps> = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputAnim = useRef(new Animated.Value(0)).current;
  const [text, setText] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(inputAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!text) {
      Animated.timing(inputAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  const handleOnChangeText = (e: string) => {
    setText(e);
    props.onChangeText && props.onChangeText(e);
  };

  return (
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
        <RNTextInput
          style={styles(props).input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleOnChangeText}
          value={text}
          keyboardType={props.keyboardType}
        />
      </View>
    </View>
  );
};

export default TextInput;

const styles = (props: TextInputProps) =>
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
      fontSize: 14,
      height: 40,
      fontWeight: '600',
      lineHeight: 14,
      paddingHorizontal: 12,
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
