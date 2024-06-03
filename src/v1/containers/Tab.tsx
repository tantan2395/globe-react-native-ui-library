import React, { useState, type ReactNode } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

export interface TabProps {
  tabs: string[];
  tabStyle?: ViewStyle;
  tabTextStyle?: TextStyle;
  style?: ViewStyle;
  children: ReactNode[];
  contentStyle?: ViewStyle;
  name?: string;
}

/**
 * Tab Component Props
 *
 * @param tabs - An array of strings representing the labels for each tab (required).
 * @param tabStyle - Additional styles for the tab container (optional).
 * @param tabTextStyle - Additional styles for the text of each tab (optional).
 * @param style - Additional styles for the overall component container (optional).
 * @param children - An array of React nodes representing the content of each tab (required).
 * @param contentStyle - Additional styles for the content container of each tab (optional).
 * @param name - Used to locate this view in end-to-end tests (optional).
 * @returns
 */
const Tab: React.FC<TabProps> = ({
  tabs,
  tabStyle,
  tabTextStyle,
  style,
  children,
  contentStyle,
  name,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleSelectedTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <View style={style} testID={name}>
      <ScrollView
        style={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}
        testID={`${name}-scrollview`}
      >
        {tabs.map((e, i) => (
          <Pressable
            key={i}
            style={[styles.tab, tabStyle]}
            onPress={() => handleSelectedTab(i)}
            testID={`${name}-scrollview-item-${i}`}
          >
            <Text
              style={[
                styles.title,
                tabTextStyle,
                activeTab === i && styles.selectedTab,
              ]}
              testID={`${name}-scrollview-item-text-${i}`}
            >
              {e}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      <View style={contentStyle} testID={`${name}-container-content`}>
        {children.map((child, index) =>
          activeTab === index ? (
            <View key={index} testID={`${name}-content-child`}>
              {child}
            </View>
          ) : (
            <></>
          )
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginTop: 50,
    marginHorizontal: 20,
  },
  tab: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'black',
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 8,
    width: 80,
    textAlign: 'center',
  },
  selectedTab: {
    borderBottomWidth: 3,
    borderColor: 'black',
  },
});

export default Tab;
