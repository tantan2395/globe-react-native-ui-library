import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import {
  Chip,
  TextInput,
  useTheme,
  type Theme,
} from 'globe-react-native-ui-library';

interface DropdownItem {
  label: string;
  value: string;
  subValue?: string;
}

export interface DropdownProps {
  items: DropdownItem[];
  placeholder: string;
}

const Dropdown: React.FC<DropdownProps> = ({ items, placeholder }) => {
  const { theme } = useTheme();

  const icon = require('../assets/arrow-down-full.png');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleDropdown = (focused: boolean) => {
    setIsVisible(focused);
  };

  const selectItem = (item: DropdownItem) => {
    setSelectedItem(item);
    setIsVisible(false);
  };

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).dropdown}>
        <TextInput
          placeholder={placeholder}
          value={selectedItem ? selectedItem.label : searchTerm}
          onChangeText={() => {
            setSearchTerm;
            toggleDropdown(true);
          }}
        />
        <View style={styles(theme).iconContainer}>
          <Image source={icon} style={styles(theme).icon} resizeMode="center" />
        </View>
      </View>

      {isVisible && (
        <View style={styles(theme).card}>
          <FlatList
            data={filteredItems}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <Pressable
                style={styles(theme).dropdownItem}
                onPress={() => selectItem(item)}
              >
                <Text style={styles(theme).itemText}>{item.label}</Text>
                {item.subValue && (
                  <Chip>
                    <Text style={styles(theme).textChip}>{item.subValue}</Text>
                  </Chip>
                )}
              </Pressable>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
    },
    dropdown: {
      position: 'absolute',
      width: '90%',
      bottom: '95%',
      zIndex: 2,
      backgroundColor: theme?.dropdown?.backgroundColor,
    },
    card: {
      position: 'relative',
      zIndex: 1,
      width: '90%',
      borderTopWidth: 0,
      borderTopColor: 'transparent',
      borderBottomWidth: 1,
      borderStartWidth: 1,
      borderEndWidth: 1,
      borderBottomEndRadius: 12,
      borderBottomStartRadius: 12,
      overflow: 'hidden',
      borderColor: theme.dropdown?.borderColor,
      maxHeight: theme.dropdown?.maxHeight,
    },
    dropdownItem: {
      padding: 15,
      borderTopWidth: 0,
      borderTopColor: 'transparent',
      borderBottomWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderColor: theme.dropdown?.borderColor,
    },
    itemText: {
      ...theme.dropdown.itemText,
    },
    iconContainer: {
      position: 'absolute',
      right: 20,
      top: '30%',
      width: 24,
      height: 24,
      backgroundColor: 'transparent',
      borderRadius: 100,
    },
    icon: {
      width: 24,
      height: 24,
    },
    textChip: {
      ...theme.dropdown.subText,
    },
  });

export default Dropdown;
