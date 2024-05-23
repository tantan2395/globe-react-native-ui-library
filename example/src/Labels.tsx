import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import {
  Chip,
  ListItem,
  PrimaryText,
  SecondaryText,
} from 'globe-react-native-ui-library';

export const Labels = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Chip</Text>
        <Chip children={<Text>Button</Text>} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>List Item</Text>
        <ListItem children={<Text>Button</Text>} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Primary Text</Text>
        <PrimaryText value="Primary Text" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Secondary Text</Text>
        <SecondaryText value="Secondary Text" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  section: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
  },
});
