import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

export type RadioButtonType = {
  label: string;
  value: string | number;
  active: boolean;
};

export interface RadioButtonProps {
  radioButtonStyle?: ViewStyle;
  radioButtonIcon?: ViewStyle;
  radioButtonInactive?: ViewStyle;
  radioButtonWhiteCircleStyle?: ViewStyle;
  radioButtonLabelStyle?: TextStyle;
  items: RadioButtonType[];
  name?: string;
  onSelect: (selected: RadioButtonType) => void;
}

/**
 * RadioButtonGroup Component
 *
 * @param radioButtonStyle - Additional styling for the radio button container (optional).
 * @param radioButtonIcon - Styling for the radio button icon (optional).
 * @param radioButtonInactive - Styling for the inactive state of the radio button icon (optional).
 * @param radioButtonWhiteCircleStyle - Styling for the white circle inside the radio button icon (optional).
 * @param radioButtonLabelStyle - Styling for the radio button label (optional).
 * @param items - Array of radio button items with label, value, and active state.
 * @param name - Used to locate this view in end-to-end tests (optional).
 * @param onSelect - Called when a radio button is selected.
 * @returns React component
 */
const RadioButton: React.FC<RadioButtonProps> = ({
  radioButtonStyle,
  radioButtonIcon,
  radioButtonInactive,
  radioButtonWhiteCircleStyle,
  radioButtonLabelStyle,
  items,
  name,
  onSelect,
}) => {
  const handleOnSelect = (selected: RadioButtonType) => {
    onSelect && onSelect(selected);
  };

  return (
    <View style={styles.main} testID={`${name}`}>
      {items.map((v, i) => (
        <Pressable
          style={[styles.radioButton, radioButtonStyle]}
          key={i}
          testID={`${name}-pressable`}
          onPress={() => handleOnSelect(v)}
        >
          <View
            style={[
              styles.radioButtonIcon,
              radioButtonIcon,
              !v.active && radioButtonInactive,
            ]}
            testID={`${name}-container-icon`}
          >
            <View
              style={[
                styles.radioButtonWhiteCircle,
                radioButtonWhiteCircleStyle,
              ]}
              testID={`${name}-container-icon-white-circle`}
            />
          </View>
          <Text
            style={[styles.radioButtonLabel, radioButtonLabelStyle]}
            testID={`${name}-text-label`}
          >
            {v.label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  radioButton: {
    flexDirection: 'row',
    marginTop: 24,
    alignItems: 'center',
  },
  radioButtonIcon: {
    height: 24,
    width: 24,
    borderRadius: 100,
    backgroundColor: '#2274E5',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonWhiteCircle: {
    height: 10,
    width: 10,
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
  },
  radioButtonLabel: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 22.4,
    color: '#1F3B59',
  },
});

export default RadioButton;
