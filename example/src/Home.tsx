import React from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        <Button
          title="Buttons"
          onPress={() => console.log('Buttons clicked')}
        />
        <Button title="Labels" onPress={() => console.log('Labels clicked')} />
        <Button
          title="Progress Bars"
          onPress={() => console.log('Progress Bars clicked')}
        />
        <Button
          title="Text Inputs"
          onPress={() => console.log('Text Inputs clicked')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContentContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
});
