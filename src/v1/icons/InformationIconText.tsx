import {
  Image,
  StyleSheet,
  Text,
  View,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import React from 'react';
import { SecondaryText } from 'globe-react-native-ui-library';

/**
 * Information Icon Component
 *
 * @param iconSrc - The source of the icon to be displayed. This can be a local image asset or a remote URL (required).
 * @param infoContent - The text content providing information related to the icon (required).
 * @param infoSubContent - The text sub content providing additional information related to the icon (optional).
 * @param style - Optional styles to be applied to the container of the icon and informational text. Allows for customization of the component's appearance (optional).
 * @param highlightedText = Array of string to be highlighted (optional).
 * @param highlightedTextStyle = Additional Styling to the hightlighted text (optional).
 * @returns
 */
interface InformationIconProps {
  iconSrc: any;
  infoContent: string;
  infoSubContent?: string;
  style?: ViewStyle;
  highlightedText?: string[];
  highlightedTextStyle?: TextStyle;
  testId?: string;
}

const InformationIconText: React.FC<InformationIconProps> = ({
  iconSrc,
  infoContent,
  infoSubContent,
  style,
  highlightedText,
  highlightedTextStyle,
  testId = 'information-container',
}) => {
  function highlightPhrases(input: string, phrases: string[]) {
    if (!phrases || phrases.length === 0) {
      return [{ text: input, highlight: false }];
    }

    // Escape special characters in the phrases
    const escapeStringForRegExp = (str: string) => {
      return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape special characters
    };

    // Create a pattern to match any of the phrases
    const pattern = phrases.map(escapeStringForRegExp).join('|');
    const regexp = new RegExp(`(${pattern})`, 'gi'); // 'gi' for global and case-insensitive match

    // Split the input string based on the pattern
    const parts = input.split(regexp);

    // Map the parts to an array of objects
    return parts.map((part) => ({
      text: part,
      highlight: phrases.includes(part),
    }));
  }

  let modifiedContent = highlightPhrases(infoContent, highlightedText ?? []);

  return (
    <View style={[styles.main, style]} testID={testId}>
      <Image style={styles.image} source={iconSrc} />

      <View>
        <Text style={styles.text} testID={`${testId}-text`}>
          {modifiedContent.map((v, k) =>
            !v.highlight ? (
              v.text
            ) : (
              <Text
                key={k}
                style={[styles.highlightedTextStyle, highlightedTextStyle]}
              >
                {v.text}
              </Text>
            )
          )}
        </Text>
        {infoSubContent && (
          <SecondaryText
            style={styles.subText}
            name={`${testId}-sub-text`}
            value={infoSubContent}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
  },
  image: {
    width: 32,
    height: 32,
    backgroundColor: 'gray',
  },
  text: {
    paddingStart: 8,
    paddingRight: 48,
    textAlign: 'left',
    flexWrap: 'wrap',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 25.2,
  },
  subText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19.6,
    textAlign: 'left',
    paddingStart: 8,
    paddingRight: 48,
    flexWrap: 'wrap',
    color: '#4C627A',
  },
  highlightedTextStyle: {
    color: 'red',
  },
});

export default InformationIconText;
