import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, ScrollView } from 'react-native';
import {
  Chip,
  ListItem,
  PrimaryText,
  SecondaryText,
} from 'globe-react-native-ui-library';

export const Labels = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
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
  section: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
  },
});
