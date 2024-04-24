import React, { useRef, useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Animated,
  type ViewStyle,
  type TextStyle,
} from 'react-native';
import Button from '../buttons/Button';

const { width: screenWidth } = Dimensions.get('window');

export interface CarouselProps {
  items: JSX.Element[];
  style?: ViewStyle;
  itemStyle?: ViewStyle;
  paginationStyle?: ViewStyle;
  paginationDotStyle?: ViewStyle;
  buttonContainerStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
  skipButtonText?: string;
  nextButtonText?: string;
  doneButtonText?: string;
  onDone: () => void;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  style,
  itemStyle,
  paginationStyle,
  paginationDotStyle,
  buttonContainerStyle,
  buttonStyle,
  buttonTextStyle,
  skipButtonText = 'Skip',
  nextButtonText = 'Next',
  doneButtonText = 'Done',
  onDone,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        animated: true,
        x: index * screenWidth,
        y: 0,
      });
      setActiveIndex(index);
    }
  };

  const handleNext = () => {
    if (activeIndex === items.length - 1) {
      onDone();
      return;
    }

    const nextIndex = (activeIndex + 1) % items.length;
    scrollToIndex(nextIndex);
  };

  const handleSkip = () => {
    const skipIndex = (items.length - 1) % items.length;
    scrollToIndex(skipIndex);
  };

  const handleScrollEnd = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / screenWidth);
    setActiveIndex(newIndex);
  };

  const renderItems = () => {
    return items.map((item, index) => (
      <View key={index} style={itemContainerStyles(itemStyle).itemContainer}>
        {item}
      </View>
    ));
  };

  const handleNextButtonText = () =>
    activeIndex === items.length - 1 ? doneButtonText : nextButtonText;
  const handleDisableSkipButton = () => activeIndex === items.length - 1;

  return (
    <View>
      <View style={containerStyles(style).container}>
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleScrollEnd}
          scrollEventThrottle={16}
        >
          {renderItems()}
        </ScrollView>
        <View style={paginationStyles(paginationStyle).pagination}>
          {items.map((_, index) => (
            <Animated.View
              key={index}
              style={
                paginationDotStyles(
                  paginationDotStyle,
                  activeIndex === index ? 1 : 0.5
                ).paginationDot
              }
            />
          ))}
        </View>
      </View>

      <View
        style={buttonContainerStyles(buttonContainerStyle).buttonsContainer}
      >
        <Button
          label={handleNextButtonText()}
          styles={buttonStyles(buttonStyle, buttonTextStyle).button}
          textStyles={buttonStyles(buttonStyle, buttonTextStyle).button}
          onPress={handleNext}
        />
        <Button
          label={skipButtonText}
          styles={buttonStyles(buttonStyle, buttonTextStyle).button}
          textStyles={buttonStyles(buttonStyle, buttonTextStyle).button}
          onPress={handleSkip}
          disabled={handleDisableSkipButton()}
        />
      </View>
    </View>
  );
};

const containerStyles = (style?: ViewStyle) =>
  StyleSheet.create({
    container: {
      ...style,
    },
  });

const itemContainerStyles = (style?: ViewStyle) =>
  StyleSheet.create({
    itemContainer: {
      width: screenWidth,
      justifyContent: 'center',
      alignItems: 'center',
      ...style,
    },
  });

const paginationStyles = (style?: ViewStyle) =>
  StyleSheet.create({
    pagination: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 15,
      alignSelf: 'center',
      ...style,
    },
  });

const paginationDotStyles = (style?: ViewStyle, opacity?: number) =>
  StyleSheet.create({
    paginationDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: 'black',
      marginHorizontal: 5,
      opacity,
      ...style,
    },
  });

const buttonContainerStyles = (style?: ViewStyle) =>
  StyleSheet.create({
    buttonsContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      marginHorizontal: 20,
      marginTop: 40,
      ...style,
    },
  });

const buttonStyles = (style?: ViewStyle, textStyle?: TextStyle) =>
  StyleSheet.create({
    button: {
      ...style,
    },
    buttonText: {
      ...textStyle,
    },
  });

export default Carousel;
