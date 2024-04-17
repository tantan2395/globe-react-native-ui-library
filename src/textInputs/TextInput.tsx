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
  textValue?: string;
  setText?: (text: string) => void;
}

/**
 * TextInput Component with placeholder on top-left corner upon focused
 *
 * @param styles - Additional styling for the outer design of the Text Input (optional).
 * @param placeholder - The label text of the Text Input (optional).
 * @param keyboardType - check react-native's keyboardTypes under TextInput (optional)
 * @param textValue - value of the TextInput (optional)
 * @param setText - set value of the textValue (optional)
 * @returns
 */
const TextInput: React.FC<TextInputProps> = (props) => {
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

  const handleBlur = () => {
    setIsFocused(false);
    if (!props.textValue) {
      Animated.timing(inputAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
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
          onChangeText={props.setText}
          value={props.textValue}
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
      borderRadius: 5,
      paddingHorizontal: 20,
    },
    inputContainerFocused: {
      borderColor: '#CFDDF4', // Example color change when focused
    },
    input: {
      fontSize: 14,
      height: 40,
    },
    placeholderContainer: {
      position: 'absolute',
      top: 8,
      left: 1,
      backgroundColor: 'transparent',
      paddingHorizontal: 13,
    },
    placeholder: {
      fontSize: 12,
      color: 'gray',
    },
  });
