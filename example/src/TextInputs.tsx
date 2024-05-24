import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  DateInput,
  Dropdown,
  TextInput,
  TextInputPin,
  TextInputPinCode,
} from 'globe-react-native-ui-library';

export const TextInputs = () => {
  const [currentDate, setCurrentDate] = useState('2024/01/01');
  const dropdownItems = [
    { label: 'Option 1', value: '1', subValue: 'Sub value 1' },
    { label: 'Option 2', value: '2', subValue: 'Sub value 2' },
    { label: 'Option 3', value: '3', subValue: 'Sub value 3' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Date Input</Text>
          <DateInput
            onConfirm={setCurrentDate}
            handleOnEnablePicker={() => {}}
            value={currentDate}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dropdown</Text>
          <Dropdown items={dropdownItems} placeholder="Dropdown" />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Text Input</Text>
          <TextInput />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Text Input Pin</Text>
          <TextInputPin />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Text Input Pin Code</Text>
          <TextInputPinCode />
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
    marginVertical: 5,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
