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
}

const Tab: React.FC<TabProps> = ({
  tabs,
  tabStyle,
  tabTextStyle,
  style,
  children,
  contentStyle,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleSelectedTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <View style={style}>
      <ScrollView
        style={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {tabs.map((e, i) => (
          <Pressable
            key={i}
            style={[styles.tab, tabStyle]}
            onPress={() => handleSelectedTab(i)}
          >
            <Text
              style={[
                styles.title,
                tabTextStyle,
                activeTab === i && styles.selectedTab,
              ]}
            >
              {e}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      <View style={contentStyle}>
        {children.map((child, index) =>
          activeTab === index ? <View key={index}>{child}</View> : <></>
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
