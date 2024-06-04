import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  Image,
  type ViewStyle,
} from 'react-native';
import {
  Chip,
  TextInput,
  useTheme,
  type Theme,
} from 'globe-react-native-ui-library';

const icon = require('../assets/arrow-down-full.png');

export interface DropdownItem {
  label: string;
  value: string;
  subValue?: string;
}

export interface DropdownProps {
  items: DropdownItem[];
  placeholder: string;
  onSelect?: (selectedItem: DropdownItem) => void;
  name?: string;
  required?: boolean;
  dropdownItemStyle?: ViewStyle;
  dropdownStyle?: ViewStyle;
}

/**
 * Dropdown Component Props
 *
 * @param items - An array of DropdownItem objects representing the options in the dropdown (required).
 * @param placeholder - Placeholder text displayed when no option is selected (required).
 * @param onSelect - Callback function invoked when an item is selected; it receives the selected DropdownItem object (optional).
 * @param name - Used to locate this view in end-to-end tests (optional).
 * @param required - Default to false. Shows a red asterisk on the right side of the placeholder (optional).
 * @param dropdownItemStyle - Additional ViewStyle for the Dropdown Item Card (optional).
 *  @param dropdownStyle - Additional ViewStyle for the Dropdown (optional).
 * @returns
 */
const Dropdown: React.FC<DropdownProps> = ({
  items,
  placeholder,
  onSelect,
  name,
  required = false,
  dropdownItemStyle,
  dropdownStyle,
}) => {
  const { theme } = useTheme();

  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleDropdown = (focused: boolean) => {
    setIsVisible(focused);
  };

  const selectItem = (item: DropdownItem) => {
    setSelectedItem(item);
    setIsVisible(false);

    onSelect && onSelect(item);
  };

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={[styles(theme).container, dropdownStyle]} testID={name}>
      <View style={styles(theme).dropdown} testID={`${name}-dropdown`}>
        <TextInput
          required={required}
          placeholder={placeholder}
          value={selectedItem ? selectedItem.label : searchTerm}
          onChangeText={(e) => {
            setSearchTerm(e);
            toggleDropdown(true);
          }}
          name={`${name}-text-input`}
        />
        <Pressable
          style={styles(theme).iconContainer}
          onPress={() => setIsVisible(!isVisible)}
          testID={`${name}-pressable-container`}
        >
          <Image
            source={icon}
            style={styles(theme).icon}
            resizeMode="center"
            testID={`${name}-image`}
          />
        </Pressable>
      </View>

      {isVisible && (
        <View
          style={[styles(theme).card, dropdownItemStyle]}
          testID={`${name}-card`}
        >
          <FlatList
            data={filteredItems}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <Pressable
                style={styles(theme).dropdownItem}
                onPress={() => selectItem(item)}
                testID={`${name}-dropdown-item`}
              >
                <Text
                  style={styles(theme).itemText}
                  testID={`${name}-dropdown-item-value`}
                >
                  {item.label}
                </Text>
                {item.subValue && (
                  <Chip>
                    <Text
                      style={styles(theme).textChip}
                      testID={`${name}-dropdown-item-subvalue`}
                    >
                      {item.subValue}
                    </Text>
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
      width: '100%',
      backgroundColor: theme?.dropdown?.backgroundColor,
    },
    card: {
      position: 'absolute',
      zIndex: 10,
      top: 60,
      left: 0,
      right: 0,
      width: '100%',
      backgroundColor: 'white',
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
      ...theme.dropdown?.itemText,
    },
    iconContainer: {
      position: 'absolute',
      right: 20,
      top: '30%',
      width: 24,
      height: 24,
      borderRadius: 100,
    },
    icon: {
      width: 24,
      height: 24,
    },
    textChip: {
      ...theme.dropdown?.subText,
    },
  });

export default Dropdown;
