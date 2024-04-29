import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavItem from './bottom/BottomNavItem';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

function Sample() {
  return (
    <View>
      <Text>Sheen</Text>
    </View>
  );
}

interface BottomNavProps {
  name: string;
  component: React.ComponentType<any>;
}

interface HomeNavProps {
  screens: Array<BottomNavProps>;
}

function HomeTabs(homeNavProps: HomeNavProps) {
  let screens = homeNavProps.screens;
  return (
    <Tab.Navigator
      initialRouteName="MyBenta"
      tabBar={(props) => <BottomNavItem {...props} />}
    >
      {screens.map((label, index) => (
        <Tab.Screen name={label.name} component={label.component} key={index} />
      ))}
      {/* <Tab.Screen name="MyBenta" component={Sample} />
            <Tab.Screen name="MyKita" component={Sample} />
            <Tab.Screen name="Home" component={Sample} />
            <Tab.Screen name="Updates" component={Sample} />
            <Tab.Screen name="Help" component={Sample} /> */}
    </Tab.Navigator>
  );
}

let arrayOfScreens: Array<BottomNavProps> = [
  {
    name: 'My Benta',
    component: Sample,
  },
  {
    name: 'My Kita',
    component: Sample,
  },
  {
    name: 'Home',
    component: Sample,
  },
  {
    name: 'Updates',
    component: Sample,
  },
  {
    name: 'Help',
    component: Sample,
  },
];

const BottomNav: React.FC = () => {
  return (
    <NavigationContainer>
      <HomeTabs screens={arrayOfScreens} />
    </NavigationContainer>
  );
};

export default BottomNav;
