import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Search, SlidersHorizontal} from 'lucide-react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Search style={styles.icon} />
      <TextInput
        placeholder="Search Art"
        style={styles.input}
        placeholderTextColor="#999"
      />
      <SlidersHorizontal style={styles.filterButton} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',

    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    paddingHorizontal: 1,
  },
  icon: {
    marginHorizontal: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  filterButton: {
    padding: 4,
    marginHorizontal: 8,
  },
});
