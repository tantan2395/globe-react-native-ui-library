import React from 'react';
import { Text, View, Image, Pressable, StyleSheet } from 'react-native';
import { Container } from '../../containers';

const BottomNavItem = ({ state, descriptors, navigation }: any) => {
  return (
    <Container styles={styles().mainContainer}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View key={index} style={styles().mainItemContainer}>
            <Pressable onPress={onPress}>
              <View style={styles().navItemContainer}>
                <View style={styles().iconContainer}>
                  <Image
                    style={styles().image}
                    source={require('@expo/snack-static/react-native-logo.png')}
                  />
                </View>
                <Text style={styles({ isFocused }).labelContainer}>
                  {label}
                </Text>
              </View>
            </Pressable>
          </View>
        );
      })}
    </Container>
  );
};

const styles = (option?: { isFocused: boolean }) =>
  StyleSheet.create({
    mainContainer: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 25,
      backgroundColor: '#E0E7EC',
    },
    mainItemContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E0E7EC',
    },
    labelContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      padding: 15,
      fontWeight: option?.isFocused ? 'bold' : 'normal',
    },
    iconContainer: {
      borderRadius: 12,
      paddingHorizontal: 12,
      paddingVertical: 6,
      backgroundColor: option?.isFocused ? '#C7D3DC' : '#E0E7EC',
    },
    image: {
      flex: 1,
    },
    navItemContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      padding: 15,
    },
  });

export default BottomNavItem;
